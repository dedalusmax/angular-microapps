import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalLoaderService {

  constructor() { }

  loaded = false;

  load(): void {
    if (this.loaded) {
      return;
    }

    // TODO: Load script
    const script = document.createElement('script');
    script.src = 'assets/plant-editor.bundle.js';
    document.body.appendChild(script);
    this.loaded = true;
  }
}
