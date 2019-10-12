import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { DeviceComponent } from './device/device.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [
    DeviceComponent
  ],
  exports: [
    DeviceComponent
  ],
  entryComponents: [
    DeviceComponent
  ]
})
export class DevicesModule {

  constructor(injector: Injector) {

    const el = createCustomElement(DeviceComponent, { injector });
    customElements.define('app-device', el);
  }

}
