import { Component, OnInit } from '@angular/core';
import { ExternalLoaderService } from '../external-loader.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  constructor(private externalLoaderService: ExternalLoaderService) { }

  ngOnInit() {
    this.externalLoaderService.load();
    this._add('app-plant-editor');
  }

  private _add(componentName: string) {

    const el = document.createElement(componentName);

    const content = document.getElementById('content');
    content.appendChild(el);
  }
}
