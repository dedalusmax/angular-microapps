import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantsComponent } from './plants/plants.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'workflow', loadChildren: () => import('./workflow/workflow.module').then(m => m.WorkflowModule) },
  { path: 'plants', component: PlantsComponent },
  { path: 'management', component: ManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
