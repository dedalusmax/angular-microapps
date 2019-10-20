import { Component, OnInit } from '@angular/core';
import { LazyLoaderService } from '../lazy-loader.service';
import { LazyLoaderOldService } from '../lazy-loader-old.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private lazyLoaderService: LazyLoaderOldService) { }

  ngOnInit() {
  }

  addClassic(): void {

    const el = document.createElement('app-device');

    el.setAttribute('class', 'clr-col-lg-3 clr-col-8');
    el.setAttribute('partno', `EY-${Math.round(Math.random() * 100000)}-RND`);

    const content = document.getElementById('content');
    content.appendChild(el);
  }

  addLazyLoaded() {

    this.lazyLoaderService.load('src/app/workflow/workflow.module#WorkflowModule').then(_ => {

      const el = document.createElement('app-workflow');

      const content = document.getElementById('content');
      content.appendChild(el);
    });
  }
}
