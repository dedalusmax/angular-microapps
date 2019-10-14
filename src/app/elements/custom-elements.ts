import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomElements implements CustomElementRegistry {

  define(name: string, constructor: Function, options?: ElementDefinitionOptions): void {

    if (!this.get(name)) {
      customElements.define(name, constructor, options);
    } else {
      console.warn(`${name} element has been defined twice`);
    }
  }

  get(name: string) {
    return customElements.get(name);
  }

  upgrade(root: Node): void {
    customElements.get(name);
  }

  whenDefined(name: string): Promise<void> {
    return customElements.whenDefined(name);
  }
}
