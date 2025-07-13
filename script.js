const lightPresets = [
  { name: 'Edison',       hue: 40,  sat: '60%', l: '90%' },
  { name: 'Incandescent', hue: 45,  sat: '70%', l: '95%' },
  { name: 'Fluorescent',  hue: 200, sat: '10%', l: '98%' },
  { name: 'Tungsten',     hue: 30,  sat: '80%', l: '85%' },
  { name: 'Natural White',hue: 60,  sat: '20%', l: '100%' },
  { name: 'Cool White',   hue: 210, sat: '30%', l: '98%' },
];

const formTemplate = `
  <div class="form">
    <label>Username:<br><input type="text"></label>
    <label>Password:<br><input type="password"></label>
    <label><input type="checkbox"> Remember me</label>
    <button>LOGIN</button>
  </div>
`;

function createLightingDemo() {
  const grid = document.getElementById('grid');
  
  lightPresets.forEach(preset => {
    const box = document.createElement('div');
    box.className = 'light-box';
    box.style.setProperty('--light-hue', preset.hue);
    box.style.setProperty('--light-sat', preset.sat);
    box.style.setProperty('--light-l', preset.l);

    const overlay = document.createElement('div');
    overlay.className = 'light-overlay';
    box.appendChild(overlay);

    const formContainer = document.createElement('div');
    formContainer.innerHTML = formTemplate;
    box.appendChild(formContainer.firstElementChild);

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = preset.name;
    box.appendChild(label);

    grid.appendChild(box);
  });
}

// Initialize the demo when DOM is loaded
document.addEventListener('DOMContentLoaded', createLightingDemo);