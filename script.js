import { lightPresets } from './lightPresets.js';
import FormComponent from './FormComponent.js';

const LIGHTING_MODES = {
  realistic: 0.08,
  interior: 0.12,
  exterior: 0.3,
  cinematic: 0.6,
  dramatic: 0.8
};

const formComponent = new FormComponent();
let currentMode = 'realistic'; // default

const createLightBox = (preset) => {
  const box = document.createElement('div');
  box.className = 'light-box';
  box.style.setProperty('--light-hue', preset.hue);
  box.style.setProperty('--light-sat', preset.sat);
  box.style.setProperty('--light-l', preset.l);

  const overlay = document.createElement('div');
  overlay.className = 'light-overlay';
  overlay.style.opacity = LIGHTING_MODES[currentMode];
  box.appendChild(overlay);

  // Use the form component
  const form = formComponent.create();
  box.appendChild(form);

  const label = document.createElement('div');
  label.className = 'label';
  label.textContent = preset.name;
  box.appendChild(label);

  return box;
};

const createModeSelector = () => {
  const selector = document.createElement('div');
  selector.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255,255,255,0.9);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1000;
  `;

  const title = document.createElement('h3');
  title.textContent = 'Lighting Intensity';
  title.style.margin = '0 0 10px 0';
  selector.appendChild(title);

  Object.entries(LIGHTING_MODES).forEach(([mode, opacity]) => {
    const button = document.createElement('button');
    button.textContent = `${mode} (${opacity})`;
    button.style.cssText = `
      display: block;
      width: 100%;
      margin: 5px 0;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
      background: ${currentMode === mode ? '#007bff' : '#fff'};
      color: ${currentMode === mode ? '#fff' : '#333'};
    `;
    
    button.addEventListener('click', () => {
      currentMode = mode;
      updateAllOverlays();
      updateButtonStyles();
    });
    
    selector.appendChild(button);
  });

  const updateButtonStyles = () => {
    selector.querySelectorAll('button').forEach((btn, index) => {
      const mode = Object.keys(LIGHTING_MODES)[index];
      btn.style.background = currentMode === mode ? '#007bff' : '#fff';
      btn.style.color = currentMode === mode ? '#fff' : '#333';
    });
  };

  return selector;
};

const updateAllOverlays = () => {
  document.querySelectorAll('.light-overlay').forEach(overlay => {
    overlay.style.opacity = LIGHTING_MODES[currentMode];
  });
};

const createLightingDemo = () => {
  const grid = document.getElementById('grid');
  
  // Add mode selector
  document.body.appendChild(createModeSelector());
  
  lightPresets.forEach(preset => {
    const lightBox = createLightBox(preset);
    grid.appendChild(lightBox);
  });
};

// Initialize the demo when DOM is loaded
document.addEventListener('DOMContentLoaded', createLightingDemo);