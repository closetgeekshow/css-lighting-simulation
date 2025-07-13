# CSS Lighting Simulation Demo

A visual demonstration of different lighting conditions applied to form elements using CSS custom properties, blend modes, and overlays.

## Purpose

This project showcases how different types of lighting (Edison, Incandescent, Fluorescent, Tungsten, Natural White, and Cool White) can be simulated using CSS to create realistic lighting effects over UI elements. It's particularly useful for:

- Understanding how different lighting affects the appearance of forms and UI elements
- Testing form designs under various lighting conditions
- Demonstrating CSS blend modes and custom properties
- Creating mood boards for lighting design in web applications

## Features

- **6 Different Lighting Presets**: Each representing a different type of light source with unique color temperature and characteristics
- **Interactive Forms**: Complete login forms with enhanced styling including shadows, focus rings, and press effects
- **CSS Blend Modes**: Uses `mix-blend-mode: screen` to create realistic lighting overlays
- **Responsive Design**: Grid layout that adapts to different screen sizes
- **Enhanced UX**: Focus rings, hover effects, and button press animations

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
- Maintains low opacity (0.15) for subtle effect

### Form Styling
Forms include:
- **Input Focus Rings**: Blue glow effect on focus
- **Button Shadows**: Multi-layered shadows for depth
- **Press Effects**: Transform and shadow changes on click
- **Hover States**: Smooth transitions and visual feedback

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Usage

1. Open `index.html` in a web browser
2. Observe how the different lighting presets affect the appearance of the forms
3. Interact with the form elements to see the enhanced styling effects
4. Compare how each lighting condition changes the visual perception of the UI

## Lighting Presets

| Preset | Hue | Saturation | Lightness | Description |
|--------|-----|------------|-----------|-------------|
| Edison | 40° | 60% | 90% | Warm, vintage incandescent bulb |
| Incandescent | 45° | 70% | 95% | Standard warm household lighting |
| Fluorescent | 200° | 10% | 98% | Cool, office-style fluorescent |
| Tungsten | 30° | 80% | 85% | Very warm, professional tungsten |
| Natural White | 60° | 20% | 100% | Neutral daylight simulation |
| Cool White | 210° | 30% | 98% | Cool, bright white light |

## Customization

To add new lighting presets, modify the `lightPresets` array in `script.js`:

```javascript
const lightPresets = [
  // ... existing presets
  { name: 'Custom Light', hue: 120, sat: '40%', l: '85%' },
];
```

## Browser Support

- Modern browsers supporting CSS Grid, Custom Properties, and Blend Modes
- ES6+ JavaScript features (const, arrow functions, template literals)
- No external dependencies required