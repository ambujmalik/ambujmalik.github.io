/**
 * EquationViz - Mathematical Equation Visualization
 * Main Application Controller
 * 
 * Handles tab navigation, equation input, and coordinates between
 * different visualization modules.
 */

// Application configuration
const CONFIG = {
    defaultXRange: [-10, 10],
    defaultYRange: [-5, 5],
    defaultResolution: 1000,
    maxResolution: 5000,
    plotColors: ['#3b82f6', '#ef4444', '#22c55e', '#a855f7', '#f97316'],
    colorScales: ['Viridis', 'Plasma', 'Hot', 'Cool', 'Rainbow']
};

// Application state
let currentTab = 'basic';
let plots = {
    basic: null,
    advanced: null,
    '3d': null,
    interactive: null
};

// Example equations for each tab
const EXAMPLES = {
    basic: [
        { name: 'x²', equation: 'x^2' },
        { name: 'sin(x)', equation: 'sin(x)' },
        { name: 'cos(x) + sin(2x)', equation: 'cos(x) + sin(2*x)' },
        { name: 'x³ - 3x² + 2x', equation: 'x^3 - 3*x^2 + 2*x' },
        { name: 'e^(-x²)', equation: 'exp(-x^2)' },
        { name: 'log(x)', equation: 'log(x)' },
        { name: '|x|', equation: 'abs(x)' },
        { name: '√x', equation: 'sqrt(x)' }
    ],
    advanced: [
        { name: 'x·sin(1/x)', equation: 'x*sin(1/x)' },
        { name: 'x^x', equation: 'x^x' },
        { name: 'sinc(x)', equation: 'sin(x)/x' },
        { name: 'x²·e^(-x)', equation: 'x^2*exp(-x)' },
        { name: '1/(1+x²)', equation: '1/(1+x^2)' },
        { name: 'tan(x)', equation: 'tan(x)' }
    ],
    '3d': [
        { name: 'x² + y²', equation: 'x^2 + y^2' },
        { name: 'sin(√(x²+y²))', equation: 'sin(sqrt(x^2 + y^2))' },
        { name: 'cos(x)·sin(y)', equation: 'cos(x)*sin(y)' },
        { name: 'x² - y²', equation: 'x^2 - y^2' },
        { name: 'x·y', equation: 'x*y' }
    ]
};

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing EquationViz...');
    
    // Initialize MathJax configuration
    initializeMathJax();
    
    // Set up tab navigation
    initializeTabs();
    
    // Set up example buttons
    initializeExamples();
    
    // Set up input handlers
    initializeInputHandlers();
    
    // Load initial equation
    setEquation('basic', 'x^2');
    plotBasic();
    
    console.log('EquationViz initialized successfully!');
});

/**
 * Configure MathJax for equation rendering
 */
function initializeMathJax() {
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
        },
        svg: {
            fontCache: 'global'
        }
    };
}

/**
 * Set up tab navigation functionality
 */
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

/**
 * Switch to a different tab
 * @param {string} tabName - Name of the tab to switch to
 */
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`${tabName}-panel`).classList.add('active');
    
    currentTab = tabName;
    
    // Load example equation for the new tab
    if (EXAMPLES[tabName] && EXAMPLES[tabName].length > 0) {
        setEquation(tabName, EXAMPLES[tabName][0].equation);
    }
}

/**
 * Set up example button functionality
 */
function initializeExamples() {
    document.querySelectorAll('.example-btn').forEach(button => {
        button.addEventListener('click', function() {
            const equation = this.getAttribute('data-equation');
            setEquation(currentTab, equation);
            
            // Auto-plot the equation
            switch(currentTab) {
                case 'basic':
                    plotBasic();
                    break;
                case 'advanced':
                    plotAdvanced();
                    break;
                case '3d':
                    plot3D();
                    break;
                case 'interactive':
                    plotInteractive();
                    break;
            }
        });
    });
}

/**
 * Set up input event handlers
 */
function initializeInputHandlers() {
    // Add Enter key support for equation inputs
    document.querySelectorAll('.equation-input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const tabName = this.id.split('-')[2]; // equation-input-basic -> basic
                switch(tabName) {
                    case 'basic':
                        plotBasic();
                        break;
                    case 'advanced':
                        plotAdvanced();
                        break;
                    case '3d':
                        plot3D();
                        break;
                }
            }
        });
        
        // Real-time equation display update
        input.addEventListener('input', function() {
            const tabName = this.id.split('-')[2];
            updateEquationDisplay(tabName, this.value);
        });
    });
}

/**
 * Set equation in input field and update display
 * @param {string} tabName - Name of the tab
 * @param {string} equation - Mathematical equation
 */
function setEquation(tabName, equation) {
    const input = document.getElementById(`equation-input-${tabName}`);
    if (input) {
        input.value = equation;
        updateEquationDisplay(tabName, equation);
    }
}

/**
 * Update the mathematical equation display using MathJax
 * @param {string} tabName - Name of the tab
 * @param {string} equation - Mathematical equation
 */
function updateEquationDisplay(tabName, equation) {
    const display = document.getElementById(`equation-display-${tabName}`);
    if (display) {
        let formattedEquation;
        
        if (tabName === '3d') {
            formattedEquation = `$$z = ${equation}$$`;
        } else {
            formattedEquation = `$$y = ${equation}$$`;
        }
        
        display.innerHTML = formattedEquation;
        
        // Re-render MathJax
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([display]).catch(err => {
                console.warn('MathJax rendering error:', err);
            });
        }
    }
}

/**
 * Show error message in plot container
 * @param {string} tabName - Name of the tab
 * @param {string} message - Error message
 */
function showError(tabName, message) {
    const plotContainer = document.getElementById(`plot-${tabName}`);
    if (plotContainer) {
        plotContainer.innerHTML = `
            <div class="error-message">
                <h3>⚠️ Error</h3>
                <p>${message}</p>
                <small>Please check your equation syntax and try again.</small>
            </div>
        `;
    }
}

/**
 * Clear plot container
 * @param {string} tabName - Name of the tab
 */
function clearPlot(tabName) {
    const plotContainer = document.getElementById(`plot-${tabName}`);
    if (plotContainer) {
        plotContainer.innerHTML = '';
    }
}

/**
 * Utility function to parse range string "min:max"
 * @param {string} rangeStr - Range string like "-5:5"
 * @returns {number[]} Array [min, max]
 */
function parseRange(rangeStr) {
    const parts = rangeStr.split(':').map(Number);
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        return parts;
    }
    return [-5, 5]; // Default range
}

/**
 * Generate data points for 2D function
 * @param {Function} expr - Compiled math expression
 * @param {number} xMin - Minimum x value
 * @param {number} xMax - Maximum x value
 * @param {number} resolution - Number of points
 * @returns {Object} Object with x and y arrays
 */
function generateData2D(expr, xMin, xMax, resolution) {
    const xValues = [];
    const yValues = [];
    const step = (xMax - xMin) / resolution;
    
    for (let x = xMin; x <= xMax; x += step) {
        try {
            const y = expr.evaluate({ x: x });
            if (isFinite(y)) {
                xValues.push(x);
                yValues.push(y);
            }
        } catch (e) {
            // Skip invalid points
        }
    }
    
    return { x: xValues, y: yValues };
}

/**
 * Generate data points for 3D surface
 * @param {Function} expr - Compiled math expression
 * @param {number[]} xRange - X range [min, max]
 * @param {number[]} yRange - Y range [min, max]
 * @param {number} resolution - Grid resolution
 * @returns {number[][]} 2D array of z values
 */
function generateData3D(expr, xRange, yRange, resolution = 50) {
    const zValues = [];
    const xStep = (xRange[1] - xRange[0]) / resolution;
    const yStep = (yRange[1] - yRange[0]) / resolution;
    
    for (let i = 0; i <= resolution; i++) {
        const row = [];
        const x = xRange[0] + i * xStep;
        
        for (let j = 0; j <= resolution; j++) {
            const y = yRange[0] + j * yStep;
            
            try {
                const z = expr.evaluate({ x: x, y: y });
                row.push(isFinite(z) ? z : null);
            } catch (e) {
                row.push(null);
            }
        }
        zValues.push(row);
    }
    
    return zValues;
}

// Export functions for use in other modules
window.EquationViz = {
    CONFIG,
    EXAMPLES,
    setEquation,
    updateEquationDisplay,
    showError,
    clearPlot,
    parseRange,
    generateData2D,
    generateData3D,
    switchTab
};
