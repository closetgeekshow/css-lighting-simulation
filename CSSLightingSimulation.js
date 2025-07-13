export class CSSLightingSimulation {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      materials: ['plastic-glossy', 'plastic-matte', 'rubber', 'metal-brushed', 'metal-painted', 'glass'],
      defaultPreset: 'Edison',
      defaultMode: 'interior',
      showControls: true,
      ...options
    };
    
    this.globalLightX = 0;
    this.viewportWidth = window.innerWidth;
    
    this.lightPresets = [
      { name: 'Edison',       hue: 40,  sat: '60%', l: '90%' },
      { name: 'Incandescent', hue: 45,  sat: '70%', l: '95%' },
      { name: 'Fluorescent',  hue: 200, sat: '10%', l: '98%' },
      { name: 'Tungsten',     hue: 30,  sat: '80%', l: '85%' },
      { name: 'Natural White',hue: 60,  sat: '20%', l: '100%' },
      { name: 'Cool White',   hue: 210, sat: '30%', l: '98%' },
      { name: 'Candlelight',  hue: 25,  sat: '85%', l: '75%' },
      { name: 'Moonlight',    hue: 240, sat: '15%', l: '85%' },
      { name: 'Sunset',       hue: 15,  sat: '90%', l: '80%' },
      { name: 'Dawn',         hue: 50,  sat: '40%', l: '92%' }
    ];
    
    this.lightingModes = {
      subtle:     0.04,
      realistic:  0.08,
      interior:   0.12,
      exterior:   0.25,
      cinematic:  0.45,
      dramatic:   0.7,
      extreme:    1.0
    };
    
    this.init();
  }
  
  init() {
    this.loadStyles();
    this.createHTML();
    this.bindEvents();
    this.setDefaults();
  }
  
  loadStyles() {
    if (document.querySelector('link[href*="CSSLightingSimulation.css"]')) {
      return;
    }
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './CSSLightingSimulation.css';
    document.head.appendChild(link);
  }
  
  createHTML() {
    const controlsHTML = this.options.showControls ? `
      <div class="lighting-controls">
        <label>
          Light Preset:
          <select class="preset-select"></select>
        </label>
        <label>
          Intensity:
          <select class="mode-select">
            <option value="subtle">Subtle</option>
            <option value="realistic">Realistic</option>
            <option value="interior">Interior</option>
            <option value="exterior">Exterior</option>
            <option value="cinematic">Cinematic</option>
            <option value="dramatic">Dramatic</option>
            <option value="extreme">Extreme</option>
          </select>
        </label>
      </div>
    ` : '';
    
    const materialsHTML = this.options.materials.map(material => `
      <div class="material-swatch ${material}">
        <div class="material-label">${this.formatMaterialName(material)}</div>
      </div>
    `).join('');
    
    this.container.innerHTML = `
      <div class="css-lighting-simulation">
        ${controlsHTML}
        <div class="materials-grid">
          ${materialsHTML}
        </div>
      </div>
    `;
  }
  
  formatMaterialName(material) {
    return material.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
  
  bindEvents() {
    if (this.options.showControls) {
      const presetSelect = this.container.querySelector('.preset-select');
      const modeSelect = this.container.querySelector('.mode-select');
      
      // Populate presets
      this.lightPresets.forEach(preset => {
        const option = document.createElement('option');
        option.value = preset.name;
        option.textContent = preset.name;
        presetSelect.appendChild(option);
      });
      
      presetSelect.addEventListener('change', (e) => {
        this.setLightPreset(e.target.value);
      });
      
      modeSelect.addEventListener('change', (e) => {
        this.setLightingMode(e.target.value);
      });
    }
    
    // Global mouse tracking
    document.addEventListener('mousemove', (e) => {
      this.globalLightX = e.clientX;
      this.updateGlobalLighting();
    });
    
    window.addEventListener('resize', () => {
      this.viewportWidth = window.innerWidth;
    });
  }
  
  setLightPreset(presetName) {
    const preset = this.lightPresets.find(p => p.name === presetName);
    if (preset) {
      document.documentElement.style.setProperty('--light-hue', preset.hue);
      document.documentElement.style.setProperty('--light-sat', preset.sat);
      document.documentElement.style.setProperty('--light-l', preset.l);
    }
  }
  
  setLightingMode(mode) {
    const opacity = this.lightingModes[mode] ?? 0.12;
    document.documentElement.style.setProperty('--overlay-opacity', opacity);
  }
  
  updateGlobalLighting() {
    const normalizedLightX = this.globalLightX / this.viewportWidth;
    const lightAngle = (normalizedLightX - 0.5) * 45;
    
    this.container.querySelectorAll('.material-swatch').forEach(swatch => {
      const rect = swatch.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      
      const distanceFromLight = Math.abs(this.globalLightX - elementCenterX);
      const maxDistance = this.viewportWidth * 0.5;
      const falloffDistance = Math.min(distanceFromLight, maxDistance);
      const falloffFactor = 1 - (falloffDistance / maxDistance);
      const smoothFalloff = 1 - Math.pow(1 - falloffFactor, 1.5);
      
      const materialClass = swatch.className.split(' ').find(cls => 
        this.options.materials.includes(cls)
      );
      
      const baseMaterialReflectivity = this.getMaterialReflectivity(materialClass);
      const reflectionIntensity = smoothFalloff * baseMaterialReflectivity;
      const stripeX = 50 + (lightAngle * 1.2);
      
      swatch.style.setProperty('--glare-x', `${stripeX}%`);
      swatch.style.setProperty('--glare-intensity', reflectionIntensity.toFixed(3));
      
      const colorShift = Math.sin(normalizedLightX * Math.PI) * 0.1;
      swatch.style.setProperty('--light-influence', colorShift.toFixed(3));
    });
    
    document.documentElement.style.setProperty('--global-light-x', `${normalizedLightX * 100}%`);
    document.documentElement.style.setProperty('--light-angle', `${lightAngle}deg`);
  }
  
  getMaterialReflectivity(materialClass) {
    const reflectivity = {
      'plastic-glossy': 0.5,
      'metal-brushed': 0.7,
      'glass': 0.6,
      'plastic-matte': 0.15,
      'rubber': 0.08,
      'metal-painted': 0.4
    };
    return reflectivity[materialClass] || 0.3;
  }
  
  setDefaults() {
    if (this.options.showControls) {
      const presetSelect = this.container.querySelector('.preset-select');
      const modeSelect = this.container.querySelector('.mode-select');
      
      presetSelect.value = this.options.defaultPreset;
      modeSelect.value = this.options.defaultMode;
      
      this.setLightPreset(this.options.defaultPreset);
      this.setLightingMode(this.options.defaultMode);
    }
    
    this.updateGlobalLighting();
  }
}

export default CSSLightingSimulation;