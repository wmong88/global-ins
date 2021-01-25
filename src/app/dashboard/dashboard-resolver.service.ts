import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'

import { DashboardService } from 'src/app/shared/services/dashboard.service'

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverservice implements Resolve<any>{

  constructor(private dashboardSvc: DashboardService) { }

  resolve(){
    return this.dashboardSvc.getDashboardData()
  }
}
