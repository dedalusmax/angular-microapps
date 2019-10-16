import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit, OnDestroy {

  @Input() steps: number;
  @Input() partno: string;

  @ViewChild('btnConfigure', { static: true}) btnConfigure: ElementRef;

  constructor() {
    this.partno = 'Unknkown device';
    this.steps = 5;
  }

  ngOnInit() {
    addEventListener('workflowStep', this.onWorkflowStep.bind(this));
  }

  ngOnDestroy(): void {
    removeEventListener('workflowStep', this.onWorkflowStep);
  }

  onWorkflowStep(event) {
    console.log('onWorkflowStep raised', event);
    this.steps++;
  }
}
