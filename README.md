# CSS Lighting Simulation Demo

A visual demonstration of different lighting conditions applied to form elements using CSS custom properties, blend modes, and overlays.

## Purpose

This project showcases how different types of lighting (Edison, Incandescent, Fluorescent, Tungsten, Natural White, Cool White, and many more) can be simulated using CSS to create realistic lighting effects over UI elements. It's particularly useful for:

- Understanding how different lighting affects the appearance of forms and UI elements
- Testing form designs under various lighting conditions
- Demonstrating CSS blend modes and custom properties
- Creating mood boards for lighting design in web applications
- Comparing realistic vs. cinematic lighting effects

## Features

- **24 Different Lighting Presets**: Including Edison, Incandescent, Fluorescent, Tungsten, Natural White, Cool White, Candlelight, Moonlight, Sunset, Dawn, Halogen, LED variations, Neon, Fire, Starlight, Golden Hour, Blue Hour, and more
- **Multiple Intensity Modes**: Realistic, Interior, Exterior, Cinematic, and Dramatic lighting intensities
- **Interactive Mode Selector**: Switch between different lighting intensity levels in real-time
- **Rainbow Gradient Visualization**: Shows how different lighting affects color perception
- **Modular Component Architecture**: Clean separation of concerns with dedicated form components
- **Enhanced UX**: Focus rings, hover effects, and button press animations
- **Modern ES6+ Modules**: Clean modular architecture with ESM imports

## How It Works

### CSS Custom Properties
The lighting system uses CSS custom properties to define:
- `--light-hue`: The hue value (0-360)
- `--light-sat`: Saturation percentage
- `--light-l`: Lightness percentage

### Lighting Overlay
Each form is wrapped in a container with a pseudo-overlay that:
- Covers the entire form area using `position: absolute` and `inset: 0`
- Applies the lighting color using HSL values
- Uses `mix-blend-mode: screen` to blend with underlying content
- Variable opacity based on lighting mode (0.05-0.8+)

### Lighting Intensity Modes
- **Realistic (0.08)**: Subtle, barely noticeable like good interior lighting
- **Interior (0.12)**: Noticeable but natural indoor lighting effects  
- **Exterior (0.3)**: Strong natural light effects like golden hour
- **Cinematic (0.6)**: Movie-like color grading effects
- **Dramatic (0.8)**: Very stylized, almost surreal effects

### Form Components
Forms include:
- **Modular Architecture**: Separate FormComponent with dedicated CSS
- **Rainbow Gradient**: Visual indicator of color temperature effects
- **Input Focus Rings**: Blue glow effect on focus
- **Button Shadows**: Multi-layered shadows for depth
- **Press Effects**: Transform and shadow changes on click
- **Hover States**: Smooth transitions and visual feedback

## File Structure

```
css-lighting-simulation/
├── css-lighting-demo.html    # Main HTML file
├── styles.css               # Main layout and lighting effects
├── script.js                # Main JavaScript module
├── lightPresets.js          # Lighting presets data module
├── FormComponent.js         # Form component module
├── FormComponent.css        # Form-specific styling
└── README.md                # This documentation
```

## Usage

1. Open `css-lighting-demo.html` in a web browser (requires a local server for ES6 modules)
2. Use the intensity mode selector in the top-right to switch between different lighting levels
3. Observe how the different lighting presets affect the appearance of the forms
4. Watch the rainbow gradient to see how color perception changes under different lighting
5. Interact with the form elements to see the enhanced styling effects

**Note**: Due to ES6 module usage, you'll need to serve the files from a local server:

```bash
python -m http.server 8000
```

```bash
npx serve .
```

## Expanded Lighting Presets

| Preset | Hue | Saturation | Lightness | Description |
|--------|-----|------------|-----------|-------------|
| Edison | 40° | 60% | 90% | Warm, vintage incandescent bulb |
| Incandescent | 45° | 70% | 95% | Standard warm household lighting |
| Fluorescent | 200° | 10% | 98% | Cool, office-style fluorescent |
| Tungsten | 30° | 80% | 85% | Very warm, professional tungsten |
| Natural White | 60° | 20% | 100% | Neutral daylight simulation |
| Cool White | 210° | 30% | 98% | Cool, bright white light |
| Candlelight | 25° | 85% | 75% | Warm, flickering candle glow |
| Moonlight | 240° | 15% | 85% | Cool, ethereal night lighting |
| Sunset | 15° | 90% | 80% | Warm golden hour lighting |
| Dawn | 50° | 40% | 92% | Soft morning light |
| Halogen | 55° | 25% | 95% | Bright halogen spotlight |
| LED Cool | 220° | 20% | 96% | Modern cool LED lighting |
| LED Warm | 50° | 30% | 90% | Modern warm LED lighting |
| Neon | 180° | 80% | 85% | Vibrant neon sign lighting |
| Fire | 20° | 95% | 70% | Intense firelight |
| Starlight | 250° | 10% | 80% | Subtle stellar illumination |
| Golden Hour | 35° | 75% | 85% | Photography's magic hour |
| Blue Hour | 230° | 40% | 75% | Twilight's blue period |
| Sodium Vapor | 55° | 100% | 80% | Street lamp orange glow |
| Mercury Vapor | 180° | 60% | 90% | Industrial blue-green light |
| Blacklight | 270° | 70% | 60% | UV fluorescent effect |
| Studio Light | 65° | 15% | 98% | Professional photography lighting |
| Campfire | 25° | 90% | 65% | Warm outdoor fire |
| Aquarium | 200° | 50% | 88% | Underwater blue ambiance |

## Customization

### Adding New Lighting Presets
Modify the `lightPresets` array in `lightPresets.js`:

```javascript
export const lightPresets = [
  // ... existing presets
  { name: 'Custom Light', hue: 120, sat: '40%', l: '85%' },
];
```

### Adjusting Lighting Intensity
Modify the `LIGHTING_MODES` object in `script.js`:

```javascript
const LIGHTING_MODES = {
  subtle: 0.05,
  realistic: 0.08,
  interior: 0.12,
  exterior: 0.3,
  cinematic: 0.6,
  dramatic: 0.8,
  extreme: 1.0
};
```

## Browser Support

- Modern browsers supporting ES6 modules, CSS Grid, Custom Properties, and Blend Modes
- ES6+ JavaScript features (const, arrow functions, template literals, modules)
- CSS `:has()` pseudo-class for enhanced checkbox styling
- No external dependencies required

## Technical Details

- **ES6 Modules**: Clean separation of concerns with modular imports
- **Component Architecture**: Reusable FormComponent with dedicated styling
- **Functional Programming**: Pure functions for creating light boxes
- **Modern JavaScript**: Uses const/let, arrow functions, template literals
- **CSS Custom Properties**: Dynamic styling with CSS variables
- **Mix Blend Modes**: Advanced CSS blending for realistic lighting effects
- **Dynamic Opacity Control**: Real-time lighting intensity adjustment

## Credits

- **Color Test Concepts**: Inspired by printer test images from ["My Top Choices of Printer Test Images for Photographers"](https://www.lapseoftheshutter.com/printer-test-image/) by Tim Daniels at Lapse of the Shutter