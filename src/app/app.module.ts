import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http'

import { mockApiServiceProvider } from './shared/services/mock-api.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PieChartComponent } from './shared/component/chart/pie-chart/pie-chart.component'
import { MultiLineChartComponent } from './shared/component/chart/multi-line-chart/multi-line-chart.component'
import { HeaderComponent } from './shared/component/header/header.component'
import { TableComponent } from './shared/component/table/table.component'
import { environment } from 'src/environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PieChartComponent,
    MultiLineChartComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    environment.isLocal ? mockApiServiceProvider : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
