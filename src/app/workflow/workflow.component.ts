import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  configure() {
    dispatchEvent(new CustomEvent<boolean>('configure', { }));
  }
}
