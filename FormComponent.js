export class FormComponent {
  constructor() {
    this.template = `
      <div class="form">
        <label>Username:<br><input type="text"></label>
        <label>Password:<br><input type="password"></label>
        <label><input type="checkbox"> Remember me</label>
        <button>LOGIN</button>
        <div class="rainbow-gradient"></div>
        <div class="fill-image"><img src="color-printer-test-page-1024x768.jpg"></div>
      </div>
    `;
    
    // Load CSS styles
    this.loadStyles();
  }

  loadStyles() {
    // Check if styles are already loaded
    if (document.querySelector('link[href="./FormComponent.css"]')) {
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './FormComponent.css';
    document.head.appendChild(link);
  }

  create() {
    const container = document.createElement('div');
    container.innerHTML = this.template;
    const form = container.firstElementChild;
    
    return form;
  }
}

export default FormComponent;