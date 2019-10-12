import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { ClarityModule } from '@clr/angular';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [WorkflowComponent],
  imports: [
    CommonModule,
    WorkflowRoutingModule,
    ClarityModule
  ],
  entryComponents: [
    WorkflowComponent
  ]
})
export class WorkflowModule {

  constructor(injector: Injector) {

    const el = createCustomElement(WorkflowComponent, { injector });
    customElements.define('app-workflow', el);
  }

}
