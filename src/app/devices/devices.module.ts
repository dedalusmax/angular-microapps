import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { DeviceComponent } from './device/device.component';
import { createCustomElement } from '@angular/elements';
import { XComponentNgElementStrategyFactory } from '../elements/component-element-strategy.factory';

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

    const el = createCustomElement(DeviceComponent, { injector,
      strategyFactory: new XComponentNgElementStrategyFactory(DeviceComponent, injector) });
    customElements.define('app-device', el);
  }

}
