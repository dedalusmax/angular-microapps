import { Component, OnInit, OnDestroy } from '@angular/core';
import { LazyLoaderOldService } from '../lazy-loader-old.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit, OnDestroy {

  partno = 'RC-123456-MGMT';

  constructor(private lazyLoaderService: LazyLoaderOldService) { }

  ngOnInit() {

    addEventListener('connectDevice', this.onConnectDevice);

    this.lazyLoaderService.load('src/app/workflow/workflow.module#WorkflowModule').then(_ => {
      this._add('el-workflow');
    });
  }

  ngOnDestroy(): void {
    removeEventListener('connectDevice', this.onConnectDevice);
  }

  private _add(componentName: string) {

    const el = document.createElement(componentName);

    el.setAttribute('class', 'clr-col-9');
    el.setAttribute('steps', '1');
    el.setAttribute('partno', this.partno);

    const content = document.getElementById('content');
    content.appendChild(el);
  }

  onConnectDevice(event) {
    console.log('onConnectDevice raised', event);
    dispatchEvent(new CustomEvent('workflowStep', { detail: event.detail }));
  }
}
