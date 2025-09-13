# Changelog

All notable changes to EquationViz will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Planned
- Parametric equation support
- Animation controls for parameter sweeping
- LaTeX export functionality
- Complex number visualization
- Mobile gesture improvements

## [1.0.0] - 2025-09-13
### Added
- 🎉 **Initial release of EquationViz**
- 📈 **Basic Plotting**: 2D function visualization with customizable styling
- 🔬 **Advanced Analysis**: Complex function analysis with derivative computation
- 🌐 **3D Visualization**: Interactive surface plots, contour plots, and heatmaps
- 📊 **Interactive Graphing**: Multi-function plotting capabilities
- 🧮 **Mathematical Engine**: Comprehensive support for mathematical functions
  - Trigonometric functions (sin, cos, tan, asin, acos, atan)
  - Exponential and logarithmic functions (exp, log, log10)
  - Algebraic functions (sqrt, abs, ceil, floor)
  - Constants (pi, e)
  - Basic operations (+, -, *, /, ^)
- 🎨 **User Interface**:
  - Responsive design for desktop and mobile
  - Tab-based navigation system
  - Real-time equation rendering with MathJax
  - Interactive plot controls (zoom, pan, rotate)
  - Customizable plot styling (colors, line types, etc.)
- 🛠 **Technical Features**:
  - Math.js integration for expression parsing
  - Plotly.js for high-quality visualizations
  - WebGL-accelerated 3D rendering
  - Error handling for invalid mathematical expressions
  - Browser compatibility (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- 📚 **Documentation**:
  - Comprehensive README with usage examples
  - Contributing guidelines
  - API documentation
  - MIT license

### Technical Details
- **Dependencies**: Math.js v11.11.0, Plotly.js v2.26.0, MathJax v3
- **Browser Support**: Modern browsers with ES6+ support
- **Performance**: Optimized for equations with up to 10,000 data points
- **Accessibility**: ARIA labels, keyboard navigation support

### Examples Included
- **Basic Functions**: x², sin(x), cos(x) + sin(2x), x³ - 3x² + 2x, e^(-x²), log(x), |x|, √x
- **Advanced Functions**: x·sin(1/x), x^x, sinc(x), x²·e^(-x), 1/(1+x²), tan(x)
- **3D Surfaces**: x² + y², sin(√(x²+y²)), cos(x)·sin(y), x² - y², x·y

---

## Version History Summary

| Version | Date | Major Features |
|---------|------|----------------|
| 1.0.0 | 2025-09-13 | Initial release with full functionality |

---

## Contributors

Special thanks to all contributors who made EquationViz possible:

- **Core Development**: Mathematical visualization engine
- **UI/UX Design**: Responsive interface and user experience
- **Documentation**: Comprehensive guides and examples
- **Testing**: Cross-browser compatibility and mathematical accuracy
- **Community**: Feedback, bug reports, and feature suggestions

---

## Roadmap

### v1.1.0 (Planned - Q4 2025)
- [ ] **Parametric Equations**: Support for x(t), y(t) parametric plotting
- [ ] **Animation Controls**: Time-based parameter animation
- [ ] **Export Options**: PNG, SVG, PDF export functionality
- [ ] **Performance**: Optimized rendering for complex equations
- [ ] **Accessibility**: Enhanced screen reader support

### v1.2.0 (Planned - Q1 2026)
- [ ] **Complex Numbers**: Visualization of complex-valued functions
- [ ] **Polar Coordinates**: Native polar plotting support
- [ ] **Function Library**: Pre-built mathematical function collection
- [ ] **Sharing**: URL-based equation sharing
- [ ] **Themes**: Dark mode and custom color schemes

### v2.0.0 (Future - 2026)
- [ ] **Differential Equations**: ODE/PDE visualization
- [ ] **Vector Fields**: Direction field plotting
- [ ] **Statistical Functions**: Probability distributions and analysis
- [ ] **Machine Learning**: Function fitting and regression
- [ ] **Collaborative**: Multi-user equation exploration

### Long-term Vision
- [ ] **Educational Platform**: Integrated learning modules
- [ ] **API Integration**: REST API for external applications
- [ ] **Mobile Apps**: Native iOS and Android applications
- [ ] **Plugin System**: Third-party extension support
- [ ] **Cloud Sync**: Cross-device equation synchronization

---

## Breaking Changes

### v1.0.0
- No breaking changes (initial release)

---

## Migration Guide

### Upgrading to v1.1.0 (When Released)
- No breaking changes expected
- New features will be additive
- Existing equations and plots will continue to work

---

## Performance Improvements

### v1.0.0
- Initial optimization for up to 10,000 data points
- WebGL acceleration for 3D rendering
- Efficient memory management for plot data
- Responsive design optimization for mobile devices

---

## Security Updates

### v1.0.0
- Client-side only application - no server security concerns
- Input sanitization for mathematical expressions
- CSP (Content Security Policy) ready
- No user data collection or storage

---

## Known Issues

### v1.0.0
- Complex mathematical expressions with very large numbers may cause precision issues
- 3D surface plots with high resolution may be slow on older devices
- Some mathematical functions may not render properly in Internet Explorer
- Mobile touch gestures for 3D plots could be improved

### Workarounds
- Use reasonable numeric ranges for complex equations
- Reduce 3D plot resolution on slower devices
- Use supported modern browsers for best experience
- Use desktop for intensive 3D visualization work

---

## Acknowledgments

This project is built on the shoulders of giants:

- **[Math.js](https://mathjs.org/)**: Expression parser and evaluator
- **[Plotly.js](https://plotly.com/javascript/)**: Visualization library
- **[MathJax](https://www.mathjax.org/)**: Mathematical typography
- **Open Source Community**: Inspiration and best practices

---

For detailed information about each release, see the [releases page](https://github.com/yourusername/equationviz/releases).
