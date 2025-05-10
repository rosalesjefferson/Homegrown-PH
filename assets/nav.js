// Create header navigation web component. The links is props/argument
class Nav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['links'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'links') {
      this.render();
    }
  }

  render() {
    const links = JSON.parse(this.getAttribute('links'));
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'header-nav');

    links.forEach(link => {
      const a = document.createElement('a');
      a.setAttribute('href', link.href);
      a.textContent = link.text;
      nav.appendChild(a);
    });

    this.shadowRoot.innerHTML = `
      <style>
        .header-nav {
          display: flex;
          justify-content: space-around;
          background-color: #333;
          padding: 1rem;
        }
        .header-nav a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
        }
        .header-nav a:hover {
          text-decoration: underline;
        }
      </style>
    `;
    this.shadowRoot.appendChild(nav);
  }
}

customElements.define('nav', Nav);