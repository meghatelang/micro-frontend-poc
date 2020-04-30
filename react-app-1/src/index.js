import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import  ExampleComponent from './components/example-component.js';

export class ReactElement extends HTMLElement {
  
  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {   
    render(<ExampleComponent />, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

}

customElements.define('react-app-1', ReactElement);