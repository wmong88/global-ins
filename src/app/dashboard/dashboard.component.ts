import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

// import { BaseResponse } from 'src/app/shared/models/baseResponse.model'
import { ExposureData } from 'src/app/shared/models/exposureData.model'
import { ProjectedData } from 'src/app/shared/models/projectedData.model'
import { DashboardService } from 'src/app/shared/services/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //table settings
  displayedColumnsExposureData: string[] = ['counterparty', 'rate'] //ExposureData
  displayedColumnsProjectedData: string[] = ['year', 'rate']        //ProjectedData

  //set data via resolver
  dataSourceAsset: ExposureData[] 
  dataSourceLiabilitties: ExposureData[]
  dataSourceLiquidity: ExposureData[]
  dataSourceProjectedBond: ProjectedData[]
  dataSourceProjectedAsset: ProjectedData[]

  constructor(private dashboardSvc: DashboardService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      
      if(res){
        let exposureData:any = res["dashboard"][0]['exposureData']
        let projectedData:any = res["dashboard"][0]['projectedData']
  
        //pie chart
        this.dataSourceAsset = exposureData.asset
        this.dataSourceLiabilitties = exposureData.liabilitties
        this.dataSourceLiquidity = exposureData.liquidity
  
        //multi line chart
        this.dataSourceProjectedBond = projectedData.bond
        this.dataSourceProjectedAsset = projectedData.asset
      }
      
    })
  }

}
