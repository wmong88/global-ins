import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';
import { MultiLineChartComponent } from './shared/multi-line-chart/multi-line-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PieChartComponent,
    MultiLineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
