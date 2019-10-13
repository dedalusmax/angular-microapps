import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PlantEditorComponent } from './plant-editor.component';

@NgModule({
  declarations: [
    PlantEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PlantEditorComponent]
})
export class AppModule { }
