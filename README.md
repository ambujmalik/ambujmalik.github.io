# 🧮 EquationViz

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/equationviz)
[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://yourusername.github.io/equationviz)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Interactive mathematical equation visualization tool** - Transform any mathematical equation into beautiful, interactive visualizations from simple polynomials to complex 3D surfaces.

## ✨ Features

### 🎯 **Multi-Mode Visualization**
- **📈 Basic Plotting**: Simple 2D function visualization with customizable styling
- **🔬 Advanced Analysis**: Complex function analysis with derivative visualization
- **🌐 3D Visualization**: Interactive surface plots, contours, and heatmaps  
- **📊 Interactive Graphing**: Multi-function plotting with real-time parameter adjustment

### 🧠 **Mathematical Capabilities**
- **Comprehensive Function Support**: Trigonometric, exponential, logarithmic, algebraic functions
- **Complex Expressions**: Handle discontinuous functions, parametric equations, implicit curves
- **3D Surface Rendering**: Visualize functions of two variables z = f(x,y)
- **Derivative Analysis**: Automatic derivative computation and visualization
- **Error Handling**: Graceful handling of mathematical edge cases and invalid expressions

### 🎨 **User Experience**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Rendering**: Instant equation visualization as you type
- **Interactive Controls**: Zoom, pan, rotate 3D plots with mouse/touch
- **Export Capabilities**: Save plots as images or share via URL
- **Accessibility**: Screen reader compatible with proper ARIA labels

## 🚀 Quick Start

### Option 1: Use Online (Recommended)
Visit the **[Live Demo](https://yourusername.github.io/equationviz)** and start plotting equations immediately!

### Option 2: Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/equationviz.git
   cd equationviz
   ```

2. **Start local server**:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000`

### Option 3: GitHub Pages Deployment

1. Fork this repository
2. Go to Settings → Pages
3. Select source: "Deploy from a branch"
4. Choose branch: `main` and folder: `/ (root)`
5. Your site will be available at: `https://yourusername.github.io/equationviz`

## 📚 Usage Examples

### Basic Function Plotting
```javascript
// Plot a parabola
equation: "x^2"
range: [-10, 10]
```

### Trigonometric Functions
```javascript
// Sine wave with frequency modulation  
equation: "sin(x) + 0.5*sin(3*x)"
range: [-2π, 2π]
```

### Advanced Mathematical Functions
```javascript
// Sinc function (important in signal processing)
equation: "sin(x)/x"
range: [-15, 15]
```

### 3D Surface Visualization
```javascript
// Paraboloid surface
equation: "x^2 + y^2" 
xRange: [-5, 5]
yRange: [-5, 5]
type: "surface"
```

### Complex Analysis
```javascript
// Function with interesting behavior at origin
equation: "x*sin(1/x)"
range: [-2, 2]
showDerivative: true
```

## 🛠 Technical Architecture

### Core Libraries
- **[Math.js](https://mathjs.org/)**: Mathematical expression parsing and evaluation
- **[Plotly.js](https://plotly.com/javascript/)**: High-performance 2D/3D plotting
- **[MathJax](https://www.mathjax.org/)**: Beautiful mathematical notation rendering

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- **WebGL Acceleration**: Hardware-accelerated 3D rendering
- **Adaptive Sampling**: Intelligent point generation for smooth curves
- **Memory Management**: Efficient handling of large datasets
- **Lazy Loading**: Progressive enhancement for better load times

## 📖 Documentation

- **[API Documentation](docs/API.md)**: Complete function reference
- **[Contributing Guide](CONTRIBUTING.md)**: How to contribute to the project
- **[Changelog](CHANGELOG.md)**: Version history and updates

## 🎯 Use Cases

### 🎓 **Education**
- **Mathematics Courses**: Visualize concepts from algebra to calculus
- **Physics Classes**: Plot wave functions, potential fields, trajectories
- **Engineering**: Analyze transfer functions, frequency responses
- **Research**: Explore mathematical relationships and patterns

### 👨‍💻 **Professional Applications**
- **Data Science**: Quick function prototyping and analysis
- **Engineering**: Signal processing and system analysis
- **Research**: Mathematical modeling and hypothesis testing
- **Presentations**: Create compelling mathematical visualizations

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
```bash
# Clone and setup
git clone https://github.com/yourusername/equationviz.git
cd equationviz

# Install development dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Ways to Contribute
- 🐛 **Bug Reports**: Found an issue? [Report it!](https://github.com/yourusername/equationviz/issues)
- 💡 **Feature Requests**: Have an idea? [Suggest it!](https://github.com/yourusername/equationviz/issues)
- 📝 **Documentation**: Improve our docs
- 🧪 **Testing**: Add test cases for edge cases
- 🌐 **Translations**: Help localize the interface

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/equationviz?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/equationviz?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/equationviz)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/equationviz)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Math.js Team**: For the robust mathematical expression engine
- **Plotly.js Contributors**: For the exceptional plotting capabilities
- **MathJax Project**: For beautiful mathematical typography
- **Open Source Community**: For inspiration and feedback

## 🔗 Links

- **[Live Demo](https://yourusername.github.io/equationviz)** - Try it now!
- **[GitHub Repository](https://github.com/yourusername/equationviz)** - Source code
- **[Issue Tracker](https://github.com/yourusername/equationviz/issues)** - Report bugs
- **[Discussions](https://github.com/yourusername/equationviz/discussions)** - Community chat

---

<div align="center">

**Made with ❤️ for the mathematical community**

[⭐ Star this repo](https://github.com/yourusername/equationviz) | [🐛 Report Bug](https://github.com/yourusername/equationviz/issues) | [💡 Request Feature](https://github.com/yourusername/equationviz/issues) | [🤝 Contribute](CONTRIBUTING.md)

</div>
