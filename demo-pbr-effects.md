# Physically Based Rendering (PBR) UI Demo - Advanced CSS + SVG Filters

## Overview

This demo showcases a **skeuomorphic UI surface** inspired by Physically Based Rendering (PBR) principles adapted to web technologies — primarily CSS and SVG filters. While browsers lack native PBR pipelines like Unity or Unreal Engine, layered CSS effects and SVG filter chains allow us to simulate key material qualities such as:

- **Ambient Occlusion (AO)**: Subtle darkening in crevices and edges to enhance depth perception.
- **Bump Lighting**: Dynamic surface light interaction generated via SVG turbulence + diffuse lighting filters.
- **Ripple Distortion**: Simulated glaze thickness and surface irregularities using animated displacement maps.
- **Masking**: Precise clipping of filter effects to the rounded UI surface shape.
- **Subtle Texture**: Overlay of fine patterns and noise for realism.

This demo uses **vanilla HTML and CSS**, with embedded **SVG filters** and minimal JavaScript for animation control.

---

## Demo Structure

### HTML

- A central `.surface` div representing the ceramic-like UI panel with rounded corners.
- A `.masked-surface` wrapper applies an SVG mask restricting filter effects precisely to the shape.
- A `.ripple-layer` div above the surface to create dynamic distortion.
- A `.test-button` positioned on top to demonstrate interaction and layered shadows.
- Inline SVG filters defining:
  - `bump-lighting` filter for dynamic surface light interaction.
  - `ripple-distort` filter for animated displacement effects.
  - `surface-mask` defining the rounded rectangle clipping mask.

### CSS

- Background gradients simulate base color and diffuse light scattering.
- Inset shadows and overlay gradients create ambient occlusion.
- SVG filters apply turbulence and lighting effects for bump mapping and ripple distortion.
- Masking ensures all visual effects respect the surface shape.
- Keyframe animations (`shimmer`) continuously move the ripple distortion texture for subtle motion.
- Box shadows on the button give physical depth and interaction clarity.
- Use of CSS variables for easy tuning of parameters like AO opacity.

### JavaScript

- None needed for animation in current version — all animation handled via CSS keyframes.
- The surface is interactive but without dynamic glare or mouse-tracking effects.

---

## PBR Concepts Emulated

| PBR Property         | Demo Technique                        | Notes                                      |
|---------------------|-------------------------------------|--------------------------------------------|
| Albedo/Base Color   | Radial gradients and base CSS color  | Ceramic-like blue gradient base             |
| Ambient Occlusion   | Inset shadows and overlay gradients  | Adds crevice shadowing to surface edges     |
| Bump Mapping        | SVG `feTurbulence` + `feDiffuseLighting` | Dynamic light interaction simulating surface roughness |
| Surface Distortion  | SVG `feDisplacementMap` + animation   | Ripple effect simulates glaze thickness     |
| Masking            | SVG `<mask>` element                   | Restricts filters and effects to rounded shape |
| Specular Highlights | *Removed in current version*           | Was part of glare effect, now omitted       |

---

## How to Use

1. **Open the HTML file** in any modern browser (Chrome, Firefox, Edge, Safari).
2. Observe the **animated ripple distortion** on the ceramic-like surface.
3. The **button** on top demonstrates physical layering and shadow interaction.
4. Adjust CSS variables or SVG filter parameters inside the `<style>` and `<svg>` blocks to customize effects:
   - `--ao-opacity` controls ambient occlusion strength.
   - `baseFrequency` in `feTurbulence` controls bump texture roughness.
   - `scale` in `feDisplacementMap` controls ripple intensity.
5. Experiment with the mask size or radius to create different surface shapes.

---

## Performance Notes

- All effects are done with CSS and SVG filters — **hardware acceleration varies by browser**.
- The use of `feTurbulence` and `feDisplacementMap` can be GPU intensive.
- Animations use CSS keyframes for smooth, low-CPU impact.
- Masking ensures no visual bleed, keeping effects clean.
- This demo is **optimized for desktop browsers**; performance may vary on mobile devices.

---

## Future Extensions

- Add **dynamic mouse-tracking lighting** or parallax highlights.
- Implement **multiple material presets** (e.g., metal, glass, rubber) using reusable CSS classes.
- Introduce **click ripple effects** or **heat shimmer** layers.
- Port ripple distortion or bump lighting to **WebGL canvas shaders** for higher fidelity and performance.
- Support **light temperature** or **environment lighting** via CSS variables and layered overlays.
- Add **specular highlights** and fresnel reflections via SVG or canvas.

---

## Credits & Resources

- SVG filter techniques inspired by Mozilla Developer Network and CSS-Tricks articles on SVG filters.
- Conceptual foundation based on Physically Based Rendering principles from Unity and Unreal Engine documentation.
- Inspired by skeuomorphic UI design trends and ceramic/glass material appearance in product design.

---

## License

This demo and all code snippets are provided under the [MIT License](https://opensource.org/licenses/MIT).

---

## Contact

For questions, feedback, or collaboration ideas, please reach out or file issues in the repo.

---

Thank you for exploring PBR-inspired UI effects in CSS + SVG filters!  
Enjoy crafting realistic, tactile web interfaces without heavy 3D engines.