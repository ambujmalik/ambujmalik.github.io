/**
 * EquationViz - Plotting Functions
 * Mathematical visualization and plotting functionality
 * 
 * Handles all plotting operations using Plotly.js and Math.js
 */

/**
 * Plot basic 2D function
 */
function plotBasic() {
    const equation = document.getElementById('equation-input-basic').value;
    const xMin = parseFloat(document.getElementById('x-min-basic').value) || -10;
    const xMax = parseFloat(document.getElementById('x-max-basic').value) || 10;
    const plotStyle = document.getElementById('plot-style-basic').value || 'lines';
    const color = document.getElementById('color-basic').value || '#3b82f6';
    
    try {
        // Update equation display
        EquationViz.updateEquationDisplay('basic', equation);
        
        // Parse and compile expression
        const expr = math.compile(equation);
        
        // Generate data points
        const data = EquationViz.generateData2D(expr, xMin, xMax, 1000);
        
        if (data.x.length === 0) {
            throw new Error('No valid points found. Check your equation and range.');
        }
        
        // Create plot trace
        const trace = {
            x: data.x,
            y: data.y,
            type: 'scatter',
            mode: plotStyle,
            line: { color: color, width: 2 },
            marker: { color: color, size: 4 },
            name: `y = ${equation}`
        };
        
        // Plot layout
        const layout = {
            title: {
                text: `Graph of y = ${equation}`,
                font: { size: 16, family: 'Arial, sans-serif' }
            },
            xaxis: {
                title: 'x',
                gridcolor: '#f0f0f0',
                zerolinecolor: '#333',
                showspikes: true
            },
            yaxis: {
                title: 'y',
                gridcolor: '#f0f0f0',
                zerolinecolor: '#333',
                showspikes: true
            },
            plot_bgcolor: 'white',
            paper_bgcolor: 'white',
            hovermode: 'x unified',
            showlegend: false
        };
        
        const config = {
            responsive: true,
            displayModeBar: true,
            modeBarButtonsToRemove: ['lasso2d', 'select2d']
        };
        
        Plotly.newPlot('plot-basic', [trace], layout, config);
        
    } catch (error) {
        EquationViz.showError('basic', `Error: ${error.message}`);
        console.error('Basic plotting error:', error);
    }
}

/**
 * Plot advanced function with optional derivative
 */
function plotAdvanced() {
    const equation = document.getElementById('equation-input-advanced').value;
    const xMin = parseFloat(document.getElementById('x-min-advanced').value) || -10;
    const xMax = parseFloat(document.getElementById('x-max-advanced').value) || 10;
    const resolution = parseInt(document.getElementById('resolution-advanced').value) || 1000;
    const showDerivative = document.getElementById('show-derivative').checked;
    
    try {
        // Update equation display
        EquationViz.updateEquationDisplay('advanced', equation);
        
        // Parse expression
        const expr = math.compile(equation);
        
        // Generate high-resolution data
        const data = EquationViz.generateData2D(expr, xMin, xMax, Math.min(resolution, 5000));
        
        if (data.x.length === 0) {
            throw new Error('No valid points found. Check your equation and range.');
        }
        
        const traces = [{
            x: data.x,
            y: data.y,
            type: 'scatter',
            mode: 'lines',
            name: 'f(x)',
            line: { color: '#3b82f6', width: 2 }
        }];
        
        // Add derivative if requested
        if (showDerivative && data.x.length > 1) {
            const derivativeData = computeNumericalDerivative(data.x, data.y);
            
            traces.push({
                x: derivativeData.x,
                y: derivativeData.y,
                type: 'scatter',
                mode: 'lines',
                name: "f'(x)",
                line: { color: '#ef4444', width: 2, dash: 'dash' }
            });
        }
        
        const layout = {
            title: {
                text: `Advanced Analysis: ${equation}`,
                font: { size: 16, family: 'Arial, sans-serif' }
            },
            xaxis: {
                title: 'x',
                gridcolor: '#f0f0f0',
                zerolinecolor: '#333',
                showspikes: true
            },
            yaxis: {
                title: 'y',
                gridcolor: '#f0f0f0',
                zerolinecolor: '#333',
                showspikes: true
            },
            plot_bgcolor: 'white',
            paper_bgcolor: 'white',
            hovermode: 'x unified',
            showlegend: showDerivative
        };
        
        const config = {
            responsive: true,
            displayModeBar: true,
            modeBarButtonsToRemove: ['lasso2d', 'select2d']
        };
        
        Plotly.newPlot('plot-advanced', traces, layout, config);
        
    } catch (error) {
        EquationViz.showError('advanced', `Error: ${error.message}`);
        console.error('Advanced plotting error:', error);
    }
}

/**
 * Plot 3D surface
 */
function plot3D() {
    const equation = document.getElementById('equation-input-3d').value;
    const xRangeStr = document.getElementById('x-range-3d').value || '-5:5';
    const yRangeStr = document.getElementById('y-range-3d').value || '-5:5';
    const vizType = document.getElementById('viz-type-3d').value || 'surface';
    const colorScale = document.getElementById('colorscale-3d').value || 'Viridis';
    
    try {
        // Update equation display
        EquationViz.updateEquationDisplay('3d', equation);
        
        // Parse ranges
        const xRange = EquationViz.parseRange(xRangeStr);
        const yRange = EquationViz.parseRange(yRangeStr);
        
        // Parse expression
        const expr = math.compile(equation);
        
        // Generate 3D data
        const zData = EquationViz.generateData3D(expr, xRange, yRange, 50);
        
        // Create appropriate trace based on visualization type
        let trace;
        if (vizType === 'surface') {
            trace = {
                z: zData,
                type: 'surface',
                colorscale: colorScale,
                showscale: true
            };
        } else if (vizType === 'contour') {
            trace = {
                z: zData,
                type: 'contour',
                colorscale: colorScale,
                showscale: true,
                contours: {
                    showlabels: true
                }
            };
        } else if (vizType === 'heatmap') {
            trace = {
                z: zData,
                type: 'heatmap',
                colorscale: colorScale,
                showscale: true
            };
        }
        
        const layout = {
            title: {
                text: `${vizType.charAt(0).toUpperCase() + vizType.slice(1)}: z = ${equation}`,
                font: { size: 16, family: 'Arial, sans-serif' }
            },
            scene: {
                xaxis: { title: 'x' },
                yaxis: { title: 'y' },
                zaxis: { title: 'z' }
            },
            margin: { l: 0, r: 0, b: 0, t: 40 }
        };
        
        const config = {
            responsive: true,
            displayModeBar: true
        };
        
        Plotly.newPlot('plot-3d', [trace], layout, config);
        
    } catch (error) {
        EquationViz.showError('3d', `Error: ${error.message}`);
        console.error('3D plotting error:', error);
    }
}

/**
 * Plot multiple functions interactively
 */
function plotInteractive() {
    const functionInputs = document.querySelectorAll('.function-input');
    const functionColors = document.querySelectorAll('.function-color');
    
    const traces = [];
    const xRange = [-10, 10];
    
    try {
        functionInputs.forEach((input, index) => {
            const equation = input.value.trim();
            if (equation) {
                const color = functionColors[index]?.value || EquationViz.CONFIG.plotColors[index % EquationViz.CONFIG.plotColors.length];
                
                try {
                    const expr = math.compile(equation);
                    const data = EquationViz.generateData2D(expr, xRange[0], xRange[1], 1000);
                    
                    if (data.x.length > 0) {
                        traces.push({
                            x: data.x,
                            y: data.y,
                            type: 'scatter',
                            mode: 'lines',
                            name: equation,
                            line: { color: color, width: 2 }
                        });
                    }
                } catch (e) {
                    console.warn(`Error plotting function ${equation}:`, e.message);
                }
            }
        });
        
        if (traces.length === 0) {
            throw new Error('No valid functions to plot');
        }
        
        const layout = {
            title: {
                text: 'Interactive Multi-Function Plot',
                font: { size: 16, family: 'Arial, sans-serif' }
            },
            xaxis: {
                title: 'x',
                gridcolor: '#f0f0f0',
                zerolinecolor: '#333',
                showspikes: true
            },
            yaxis: {
                title: 'y',
                gridcolor: '#f0f0f0',
                zerolinecolor: '#333',
                showspikes: true
            },
            plot_bgcolor: 'white',
            paper_bgcolor: 'white',
            hovermode: 'x unified',
            showlegend: true,
            legend: {
                x: 1,
                y: 1,
                xanchor: 'right',
                yanchor: 'top'
            }
        };
        
        const config = {
            responsive: true,
            displayModeBar: true
        };
        
        Plotly.newPlot('plot-interactive', traces, layout, config);
        
    } catch (error) {
        EquationViz.showError('interactive', `Error: ${error.message}`);
        console.error('Interactive plotting error:', error);
    }
}

/**
 * Compute numerical derivative using finite differences
 * @param {number[]} xValues - X coordinates
 * @param {number[]} yValues - Y coordinates
 * @returns {Object} Object with x and y arrays for derivative
 */
function computeNumericalDerivative(xValues, yValues) {
    const derivX = [];
    const derivY = [];
    
    for (let i = 1; i < xValues.length; i++) {
        const dx = xValues[i] - xValues[i-1];
        const dy = yValues[i] - yValues[i-1];
        
        if (dx !== 0 && isFinite(dy/dx)) {
            derivX.push((xValues[i] + xValues[i-1]) / 2);
            derivY.push(dy / dx);
        }
    }
    
    return { x: derivX, y: derivY };
}

/**
 * Add new function input to interactive tab
 */
function addFunction() {
    const functionList = document.querySelector('.function-list');
    const newFunction = document.createElement('div');
    newFunction.className = 'function-item';
    
    const colors = EquationViz.CONFIG.plotColors;
    const currentCount = functionList.children.length;
    const defaultColor = colors[currentCount % colors.length];
    
    newFunction.innerHTML = `
        <input type="text" class="function-input" placeholder="Enter equation...">
        <select class="function-color">
            <option value="#3b82f6">Blue</option>
            <option value="#ef4444">Red</option>
            <option value="#22c55e">Green</option>
            <option value="#a855f7">Purple</option>
            <option value="#f97316">Orange</option>
        </select>
        <button class="remove-btn" onclick="removeFunction(this)">×</button>
    `;
    
    // Set default color
    newFunction.querySelector('.function-color').value = defaultColor;
    
    functionList.appendChild(newFunction);
}

/**
 * Remove function input
 * @param {HTMLElement} button - Remove button element
 */
function removeFunction(button) {
    const functionItem = button.parentElement;
    const functionList = functionItem.parentElement;
    
    // Don't remove if it's the last function
    if (functionList.children.length > 1) {
        functionList.removeChild(functionItem);
    }
}

// Make functions globally available
window.plotBasic = plotBasic;
window.plotAdvanced = plotAdvanced;
window.plot3D = plot3D;
window.plotInteractive = plotInteractive;
window.addFunction = addFunction;
window.removeFunction = removeFunction;
