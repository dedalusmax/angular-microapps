import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagementModule } from './management/management.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesModule } from './devices/devices.module';
import { PlantsComponent } from './plants/plants.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ManagementModule,
    DevicesModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
