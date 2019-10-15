import { Component, OnInit, OnDestroy } from '@angular/core';
import { LazyLoaderService } from '../lazy-loader.service';
import { LazyLoaderOldService } from '../lazy-loader-old.service';
import { ExternalLoaderService } from '../external-loader.service';
import { DeviceComponent } from '../devices/device/device.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(
    private lazyLoaderService: LazyLoaderOldService,
    private externalLoaderService: ExternalLoaderService
    ) {
    }

  ngOnInit() {
    console.log('DashboardComponent: ngOnInit');

    addEventListener('configure', this.onConfigure);
    addEventListener('connectDevice', this.onConnectDevice);
    addEventListener('closeDevice', this.onCloseDevice);
  }

  ngOnDestroy(): void {
    console.log('DashboardComponent: ngOnDestroy');

    removeEventListener('configure', this.onConfigure);
    removeEventListener('connectDevice', this.onConnectDevice);
    removeEventListener('closeDevice', this.onCloseDevice);
  }

  onConfigure(event) {
    console.log('onConfigure raised', event);
  }

  onConnectDevice(event) {
    console.log('onConnectDevice raised', event);
  }

  onCloseDevice(event: any) {
    console.log('onConnectDevice raised', event);
    const component = event.detail as DeviceComponent;
    const el = document.querySelector(`app-device[partno='${component.partno}']`);
    if (el) {
      el.remove();
    }
  }

  addClassic(): void {

    const el = document.createElement('app-device');

    el.setAttribute('class', 'clr-col-lg-3 clr-col-8');
    el.setAttribute('partno', `EY-${Math.round(Math.random() * 100000) }-RND`);

    const content = document.getElementById('content');
    content.appendChild(el);
  }

  addLazyLoaded() {
    this.lazyLoaderService.load('src/app/workflow/workflow.module#WorkflowModule').then(_ => {
      this._add('el-workflow');
    });

  //   this.lazyLoaderService.loadModule(() =>
  //   import('../workflow/workflow.module').then(m => m.WorkflowModule)
  // );
    // this.lazyLoaderService.loadModule(() =>
    //   import('../workflow/workflow.module').then(m => m.WorkflowModule).then(_ => {

    //     const el = document.createElement('app-workflow');

    //     const content = document.getElementById('content');
    //     content.appendChild(el);
    //   })
    // );
  }

  addExternal() {
    this.externalLoaderService.load();
    this._add('app-plant-editor');
   }

  private _add(componentName: string) {

    const el = document.createElement(componentName);

    const content = document.getElementById('content');
    content.appendChild(el);
  }
}
