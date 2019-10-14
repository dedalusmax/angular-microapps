import { Component, OnInit, OnDestroy } from '@angular/core';
import { LazyLoaderService } from '../lazy-loader.service';
import { LazyLoaderOldService } from '../lazy-loader-old.service';
import { ExternalLoaderService } from '../external-loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  loading = false;

  constructor(
    private lazyLoaderService: LazyLoaderOldService,
    private externalLoaderService: ExternalLoaderService
    ) { }

  ngOnInit() {
    console.log('DashboardComponent: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('DashboardComponent: ngOnDestroy');
  }

  addClassic(): void {

    const el = document.createElement('app-device');

    el.setAttribute('class', 'clr-col-lg-3 clr-col-8');
    el.setAttribute('partno', `EY-${Math.round(Math.random() * 100000) }-RND`);

    const content = document.getElementById('content');
    content.appendChild(el);
  }

  addLazyLoaded() {

    this.loading = true;
    this.lazyLoaderService.load('src/app/workflow/workflow.module#WorkflowModule').then(_ => {
      this._add('el-workflow');
      this.loading = false;
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
    this.loading = true;
    this.externalLoaderService.load();
    this._add('app-plant-editor');
    this.loading = false;
   }

  private _add(componentName: string) {

    const el = document.createElement(componentName);

    const content = document.getElementById('content');
    content.appendChild(el);
  }
}
