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

    el.setAttribute('class', 'clr-col-lg-3 clr-col-12');
    el.setAttribute('partno', `EY-${Math.round(Math.random() * 100000) }-RND`);

    const content = document.getElementById('content');
    content.appendChild(el);
  }
}
