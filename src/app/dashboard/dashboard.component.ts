import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addWidget(): void {
    this._add('app-device');
  }

  private _add(element: string): void {

    const el = document.createElement(element);
    el['partno'] = 'EY-123233RT';

    el.setAttribute('class', 'clr-col-lg-4 clr-col-12');

    const content = document.getElementById('content');
    content.appendChild(el);
  }
}
