# Contributing to EquationViz

Thank you for your interest in contributing to EquationViz! 🎉 We welcome contributions from developers, mathematicians, educators, and anyone passionate about mathematical visualization.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/equationviz.git
   cd equationviz
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-new-feature
   ```
4. **Make your changes** and test them
5. **Commit your changes**:
   ```bash
   git commit -m "Add amazing new feature"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/amazing-new-feature
   ```
7. **Create a Pull Request** on GitHub

## 🛠 Development Setup

### Prerequisites
- Modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Basic text editor or IDE
- Local web server (Python, Node.js, or any HTTP server)

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/equationviz.git
cd equationviz

# Start development server
npm run dev
# OR
python -m http.server 8080

# Open http://localhost:8080 in your browser
```

### Project Structure
```
equationviz/
├── index.html              # Main application entry point
├── package.json            # NPM configuration
├── README.md               # Project documentation
├── LICENSE                 # MIT license
├── CONTRIBUTING.md         # This file
├── src/                    # Source code
│   ├── app.js             # Main application logic
│   ├── plotting.js        # Plotting functionality
│   └── styles.css         # Application styles
└── docs/                   # Documentation
    └── API.md             # API reference
```

## 🎯 Ways to Contribute

### 🐛 Bug Reports
Found a bug? Please create an issue with:
- **Clear title** describing the problem
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Browser/OS** information
- **Screenshots** if applicable

**Template:**
```markdown
## Bug Description
Brief description of the bug

## Steps to Reproduce
1. Go to...
2. Click on...
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: Chrome 120.0
- OS: Windows 11
- EquationViz Version: 1.0.0
```

### 💡 Feature Requests
Have an idea? Create an issue with:
- **Clear description** of the feature
- **Use case** - why is this valuable?
- **Mockups/examples** if applicable
- **Implementation ideas** (optional)

### 📝 Code Contributions

#### Types of Contributions Welcome:
- **Mathematical Functions**: Add support for new mathematical operations
- **Visualization Features**: New plot types, styling options, animations
- **UI/UX Improvements**: Better user interface, accessibility features
- **Performance Optimizations**: Faster rendering, memory usage improvements
- **Bug Fixes**: Fix existing issues
- **Documentation**: Improve docs, add examples
- **Testing**: Add test coverage for edge cases

#### Code Style Guidelines:
- **JavaScript**: Use ES6+ features, consistent naming (camelCase)
- **CSS**: Use CSS custom properties, semantic class names
- **HTML**: Semantic markup, proper accessibility attributes
- **Comments**: Document complex mathematical algorithms
- **Functions**: Keep functions small and focused

#### Mathematical Accuracy:
- **Precision**: Ensure numerical accuracy for mathematical computations
- **Domain Handling**: Properly handle function domains and singularities
- **Error Cases**: Graceful handling of division by zero, complex numbers, etc.
- **Edge Cases**: Test with extreme values, boundary conditions

### 🧪 Testing
We appreciate test contributions! Areas that need testing:
- **Mathematical Functions**: Verify accuracy of computations
- **UI Interactions**: Tab switching, input validation, error handling
- **Browser Compatibility**: Cross-browser testing
- **Performance**: Large datasets, complex equations
- **Accessibility**: Screen reader compatibility, keyboard navigation

### 📚 Documentation
Help improve our documentation:
- **API Reference**: Document function parameters and return values
- **Tutorials**: Create step-by-step guides
- **Examples**: Add equation examples for different use cases
- **Troubleshooting**: Help solve common user problems

## 📋 Pull Request Guidelines

### Before Submitting:
- [ ] Test your changes in multiple browsers
- [ ] Verify mathematical accuracy of any new functions
- [ ] Update documentation if needed
- [ ] Add comments for complex code
- [ ] Check that all existing functionality still works

### Pull Request Checklist:
- [ ] **Descriptive title** and detailed description
- [ ] **Link to related issues** (if applicable)
- [ ] **Screenshots** for UI changes
- [ ] **Test results** in different browsers
- [ ] **Code follows** project style guidelines

### PR Template:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Mathematical accuracy verified
- [ ] UI/UX tested on mobile

## Screenshots
(If applicable)

## Related Issues
Fixes #123
```

## 🏆 Recognition

Contributors will be recognized in:
- **README.md** contributors section
- **CHANGELOG.md** release notes
- **GitHub contributors** page

## 🌟 Mathematical Contributions

We especially welcome contributions in these areas:

### Advanced Mathematical Functions:
- **Special Functions**: Bessel functions, elliptic integrals, gamma functions
- **Statistical Functions**: Probability distributions, regression analysis
- **Complex Analysis**: Complex number support, Riemann surfaces
- **Differential Equations**: ODE/PDE visualization
- **Fractal Mathematics**: Mandelbrot sets, Julia sets, L-systems

### Educational Features:
- **Interactive Tutorials**: Guided mathematical explorations
- **Animation Support**: Parameter sweeps, function morphing
- **Annotation Tools**: Add labels, equations, explanations to plots
- **Export Options**: LaTeX, SVG, high-resolution image export

## 🤔 Questions?

- **GitHub Discussions**: [Ask questions](https://github.com/yourusername/equationviz/discussions)
- **Issues**: [Report bugs or request features](https://github.com/yourusername/equationviz/issues)
- **Email**: contact@equationviz.com (for sensitive matters)

## 📜 Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

### Our Standards:
- **Respectful Communication**: Be kind and constructive
- **Inclusive Environment**: Welcome all backgrounds and skill levels
- **Collaborative Spirit**: Help each other learn and grow
- **Quality Focus**: Strive for mathematical accuracy and clean code

## 🎓 Learning Resources

New to mathematical visualization? Here are some helpful resources:

### Mathematical Concepts:
- **Function Analysis**: Domain, range, continuity, derivatives
- **3D Mathematics**: Surfaces, partial derivatives, gradients
- **Numerical Methods**: Interpolation, approximation, error analysis

### Web Development:
- **JavaScript Math**: Math object, numerical precision, algorithms
- **Canvas/WebGL**: 2D/3D graphics programming
- **Mathematical Libraries**: Math.js, NumJS, ml-matrix

### Tools:
- **Mathematical Software**: Mathematica, MATLAB, SageMath
- **Plotting Libraries**: Plotly, D3.js, Chart.js
- **Development Tools**: Browser DevTools, git, npm

---

Thank you for helping make mathematical visualization accessible to everyone! 🧮✨
