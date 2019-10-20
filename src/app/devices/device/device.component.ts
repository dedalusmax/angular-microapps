import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() partno: string;
  @Input() platform = 'Azure Sphere';

  constructor() { }

  ngOnInit() {
  }

  connect() {
    dispatchEvent(new CustomEvent('connectDevice', { detail: this }));
  }

  close() {
    dispatchEvent(new CustomEvent('closeDevice', { detail: this }));
  }
}
