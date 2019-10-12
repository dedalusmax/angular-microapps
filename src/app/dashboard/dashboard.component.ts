import { Component, OnInit } from '@angular/core';
import { LazyLoaderService } from '../lazy-loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private lazyLoaderService: LazyLoaderService) { }

  ngOnInit() {
  }

  addDevice(): void {
    this._add('app-device');
  }

  addWorkflow() {
    this.lazyLoaderService.loadModule(() =>
      import('../workflow/workflow.module').then(m => m.WorkflowModule)
    );
  }

  private _add(element: string): void {

    const el = document.createElement(element);

    el.setAttribute('class', 'clr-col-lg-4 clr-col-12');
    el.setAttribute('partno', `EY-${Math.round(Math.random() * 100000) }-RND`);

    const content = document.getElementById('content');
    content.appendChild(el);
  }
}
