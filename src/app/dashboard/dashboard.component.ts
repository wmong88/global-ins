import { Component, OnInit } from '@angular/core'
import { BaseResponse } from 'src/app/shared/models/baseResponse.model'
import { ExposureData } from 'src/app/shared/models/exposureData.model'
import { ProjectedData } from 'src/app/shared/models/projectedData.model'
import { DashboardService } from 'src/app/shared/services/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  displayedColumnsExposureData: string[] = ['counterparty', 'rate']
  dataSourceAsset: ExposureData[]

  displayedColumnsProjectedData: string[] = ['year', 'rate']
  projectedData: ProjectedData[]
  
  


  data2:any = [
    {"counterparty": "Bank", "rate": "18"},
        {"counterparty": "Insurers", "rate": "33"},
        {"counterparty": "Sovereigns", "rate": "21"},
        {"counterparty": "Others", "rate": "29"}
  ]

data3:any = [
  {"party": "Bank", "rate": "17"},
  {"party": "Insurers", "rate": "33"},
  {"party": "Sovereigns", "rate": "21"},
  {"party": "Others", "rate": "29"}
  ]

  lineChart: ProjectedData[] = [
    {
      "year": '2021',
      "rate": 0.5
    },
    {
      "year": '2022',
      "rate": 1.0
    },
    {
      "year": '2023',
      "rate": 0.6
    },
    {
      "year": '2024',
      "rate": 0.7
    },
    {
      "year": '2025',
      "rate": 1.5
    },
    {
      "year": '2026',
      "rate": 2.7
    },
    {
      "year": '2027',
      "rate": 3.1
    }
  ]

 lineChart2: any[] = [
  {
    "year": '2021',
    "rate": 3.6
  },
  {
    "year": '2022',
    "rate": 2.5
  },
  {
    "year": '2023',
    "rate": 2.3
  },
  {
    "year": '2024',
    "rate": 2.7
  },
  {
    "year": '2025',
    "rate": 2.0
  },
  {
    "year": '2026',
    "rate": 1.8
  },{
    "year": '2027',
    "rate": 0.3
  }
]

  constructor(private dashboardSvc: DashboardService) { }

  ngOnInit(): void {

    this.dashboardSvc.getExposureDataAsset().subscribe((data: BaseResponse)=>{
      this.dataSourceAsset = data.response;
    })  

  }

}
