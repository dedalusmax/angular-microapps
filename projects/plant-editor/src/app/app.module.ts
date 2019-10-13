import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { PlantEditorComponent } from './plant-editor.component';
import { createCustomElement } from '@angular/elements';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PlantEditorComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [PlantEditorComponent]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap(app) {
    const el = createCustomElement(PlantEditorComponent, { injector: this.injector });
    customElements.define('app-plant-editor', el);
  }

}
