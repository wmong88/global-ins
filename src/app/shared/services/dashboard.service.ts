import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public getDashboardData(){
      return this.httpClient.get(environment.GET_DASHBOARD_DATA);
  }
}
