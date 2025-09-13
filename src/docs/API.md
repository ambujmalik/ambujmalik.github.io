# EquationViz API Documentation

This document provides comprehensive information about the EquationViz JavaScript API, functions, and integration methods.

## Table of Contents
- [Core Functions](#core-functions)
- [Mathematical Expression Support](#mathematical-expression-support)
- [Plotting Functions](#plotting-functions)
- [Configuration Options](#configuration-options)
- [Event Handling](#event-handling)
- [Integration Guide](#integration-guide)
- [Error Handling](#error-handling)

## Core Functions

### `EquationViz.setEquation(tabName, equation)`
Sets an equation in the specified tab input field.

**Parameters:**
- `tabName` (string): Target tab ('basic', 'advanced', '3d', 'interactive')
- `equation` (string): Mathematical equation string

**Example:**
```javascript
EquationViz.setEquation('basic', 'x^2 + 2*x + 1');
```

### `EquationViz.updateEquationDisplay(tabName, equation)`
Updates the mathematical equation display using MathJax.

**Parameters:**
- `tabName` (string): Target tab name
- `equation` (string): Mathematical equation string

### `EquationViz.switchTab(tabName)`
Programmatically switches to a different tab.

**Parameters:**
- `tabName` (string): Name of tab to switch to

## Mathematical Expression Support

### Supported Functions
- **Trigonometric**: `sin(x)`, `cos(x)`, `tan(x)`, `asin(x)`, `acos(x)`, `atan(x)`
- **Exponential**: `exp(x)`, `log(x)`, `log10(x)`
- **Algebraic**: `sqrt(x)`, `abs(x)`, `ceil(x)`, `floor(x)`
- **Constants**: `pi`, `e`
- **Operations**: `+`, `-`, `*`, `/`, `^`

### Expression Examples
```javascript
// Basic polynomial
"x^2 + 3*x - 4"

// Trigonometric with phase shift
"sin(x + pi/4)"

// Complex expression
"x*sin(1/x)"

// 3D surface
"x^2 + y^2 - z^2"
```

## Plotting Functions

### `plotBasic()`
Creates a 2D plot in the basic plotting tab.

**Configuration:**
- Reads equation from `#equation-input-basic`
- Uses x-range from `#x-min-basic` and `#x-max-basic`
- Applies styling from control inputs

**Example Usage:**
```javascript
// Set equation and plot
document.getElementById('equation-input-basic').value = 'sin(x)';
plotBasic();
```

### `plotAdvanced()`
Creates an advanced 2D plot with optional derivative visualization.

**Features:**
- High-resolution plotting (configurable up to 5000 points)
- Numerical derivative computation
- Enhanced error handling for discontinuous functions

### `plot3D()`
Creates 3D surface, contour, or heatmap visualizations.

**Supported Types:**
- `surface`: 3D surface plot
- `contour`: 2D contour plot
- `heatmap`: Color-coded heatmap

### `plotInteractive()`
Plots multiple functions simultaneously with different colors.

**Features:**
- Multiple equation support
- Individual color control
- Dynamic function addition/removal

## Configuration Options

### `CONFIG` Object
```javascript
const CONFIG = {
    defaultXRange: [-10, 10],
    defaultYRange: [-5, 5],
    defaultResolution: 1000,
    maxResolution: 5000,
    plotColors: ['#3b82f6', '#ef4444', '#22c55e', '#a855f7', '#f97316'],
    colorScales: ['Viridis', 'Plasma', 'Hot', 'Cool', 'Rainbow']
};
```

### Plotly Configuration
```javascript
const plotlyConfig = {
    responsive: true,
    displayModeBar: true,
    modeBarButtonsToRemove: ['lasso2d', 'select2d']
};
```

## Event Handling

### Input Event Listeners
```javascript
// Equation input with Enter key support
document.getElementById('equation-input-basic').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        plotBasic();
    }
});
```

### Example Button Handlers
```javascript
document.querySelectorAll('.example-btn').forEach(button => {
    button.addEventListener('click', function() {
        const equation = this.getAttribute('data-equation');
        EquationViz.setEquation(currentTab, equation);
    });
});
```

## Integration Guide

### Basic Integration
```html
<!DOCTYPE html>
<html>
<head>
    <!-- Include required libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.11.0/math.min.js"></script>
    <script src="https://cdn.plot.ly/plotly-2.26.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <!-- Your HTML content -->
    <div id="plot-container"></div>
    
    <!-- Include EquationViz scripts -->
    <script src="src/app.js"></script>
    <script src="src/plotting.js"></script>
</body>
</html>
```

### Custom Implementation
```javascript
// Custom plotting function
function customPlot(equation, xRange, container) {
    try {
        const expr = math.compile(equation);
        const data = EquationViz.generateData2D(expr, xRange[0], xRange[1], 1000);
        
        const trace = {
            x: data.x,
            y: data.y,
            type: 'scatter',
            mode: 'lines'
        };
        
        Plotly.newPlot(container, [trace]);
    } catch (error) {
        console.error('Plotting error:', error);
    }
}
```

## Error Handling

### Common Error Types
```javascript
// Expression parsing errors
try {
    const expr = math.compile('invalid_equation');
} catch (error) {
    console.log('Parse error:', error.message);
}

// Evaluation errors (e.g., division by zero)
try {
    const result = expr.evaluate({x: 0});
} catch (error) {
    console.log('Evaluation error:', error.message);
}
```

### Error Display Function
```javascript
function showError(tabName, message) {
    const plotContainer = document.getElementById(`plot-${tabName}`);
    plotContainer.innerHTML = `
        <div class="error-message">
            <h3>⚠️ Error</h3>
            <p>${message}</p>
            <small>Please check your equation syntax and try again.</small>
        </div>
    `;
}
```

## Utility Functions

### `parseRange(rangeStr)`
Parses range strings like "-5:5" into [min, max] arrays.

### `generateData2D(expr, xMin, xMax, resolution)`
Generates data points for 2D function plotting.

### `generateData3D(expr, xRange, yRange, resolution)`
Generates 3D surface data for z = f(x,y) functions.

### `computeNumericalDerivative(xValues, yValues)`
Computes numerical derivative using finite differences.

## Browser Compatibility

### Minimum Requirements
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Feature Detection
```javascript
// Check for required APIs
if (typeof math === 'undefined') {
    console.error('Math.js not loaded');
}

if (typeof Plotly === 'undefined') {
    console.error('Plotly.js not loaded');
}

if (typeof MathJax === 'undefined') {
    console.warn('MathJax not loaded - equation display will be limited');
}
```

## Performance Considerations

### Optimization Tips
- Limit resolution for complex equations (< 2000 points)
- Use debouncing for real-time input updates
- Implement progressive rendering for large datasets
- Cache compiled expressions for repeated use

### Memory Management
```javascript
// Clear plots when switching tabs to free memory
function clearPlot(tabName) {
    const plotContainer = document.getElementById(`plot-${tabName}`);
    if (plotContainer && plotContainer._fullData) {
        Plotly.purge(plotContainer);
    }
}
```

## Advanced Usage

### Custom Mathematical Functions
```javascript
// Add custom function to math.js
math.createUnit('celsius', '1 degC');
math.evaluate('5 celsius in kelvin'); // 278.15 K

// Custom function
const customExpr = math.parse('f(x) = x^2 + sin(x)');
const compiled = customExpr.compile();
```

### Batch Processing
```javascript
// Process multiple equations
const equations = ['x^2', 'sin(x)', 'cos(x)'];
const results = equations.map(eq => {
    try {
        const expr = math.compile(eq);
        return EquationViz.generateData2D(expr, -10, 10, 1000);
    } catch (error) {
        return null;
    }
});
```

### Export Functionality
```javascript
// Export plot as image
function exportPlot(tabName, format = 'png') {
    const plotElement = document.getElementById(`plot-${tabName}`);
    Plotly.downloadImage(plotElement, {
        format: format,
        width: 1200,
        height: 800,
        filename: `equation-plot-${Date.now()}`
    });
}
```

## Troubleshooting

### Common Issues
1. **Equation not plotting**: Check syntax and function names
2. **Performance issues**: Reduce resolution or limit x/y ranges
3. **3D plots not rendering**: Verify WebGL support in browser
4. **MathJax not rendering**: Check for JavaScript errors, ensure proper initialization

### Debug Mode
```javascript
// Enable debug logging
window.EquationVizDebug = true;

// This will log additional information during plotting
```

### Performance Monitoring
```javascript
// Monitor plot generation time
function timedPlot(plotFunction) {
    const start = performance.now();
    plotFunction();
    const end = performance.now();
    console.log(`Plot generated in ${end - start} milliseconds`);
}
```

---

For more examples and advanced usage, see the [examples directory](../examples/) and [contributing guide](../CONTRIBUTING.md).
