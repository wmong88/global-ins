import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public getExposureDataAsset(){
    return this.httpClient.get('assets/mockdata/exposureDataAsset.json');
  }
}
