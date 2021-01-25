import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component'
import { DashboardResolverservice } from 'src/app/dashboard/dashboard-resolver.service'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      dashboard : DashboardResolverservice
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
