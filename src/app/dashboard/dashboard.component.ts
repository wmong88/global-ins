import { Component, OnInit } from '@angular/core';
import { ExposureData } from 'src/app/shared/models/exposure.model'
import { DashboardService } from 'src/app/shared/services/dashboard.service'

// const EXPOSURE_DATA_ASSET: ExposureData[] = [
//   {"party": "Bank", "rate": "17"},
//   {"party": "Insurers", "rate": "33"},
//   {"party": "Sovereigns", "rate": "21"},
//   {"party": "Others", "rate": "29"}
// ];

















interface LineChart{
  date: string,
  value: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})




export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['party', 'rate']
  dataSourceAsset: ExposureData[]
  


  data2:any = [
    {"party": "Bank", "rate": "17"},
        {"party": "Insurers", "rate": "33"},
        {"party": "Sovereigns", "rate": "21"},
        {"party": "Others", "rate": "29"}
  ]

data3:any = [
  {"party": "Bank", "rate": "17"},
  {"party": "Insurers", "rate": "33"},
  {"party": "Sovereigns", "rate": "21"},
  {"party": "Others", "rate": "29"}
  ]

  // data4:any=[
  //   { "year":1880,"sex":"F","name":"Helen","n":636,"prop":0.00651612638826278},
  //   { "year":1880,"sex":"F","name":"Amanda","n":241,"prop":0.00246916109995492},
  //   { "year":1880,"sex":"F","name":"Betty","n":117,"prop":0.00119872136387853},
  //   { "year":1880,"sex":"F","name":"Dorothy","n":112,"prop":0.00114749395516577},
  //   { "year":1880,"sex":"F","name":"Linda,27","n":13,"prop":0.000276628007048891},
  //   { "year":1880,"sex":"F","name":"Deborah","n":12,"prop":0.000122945780910618},
  //   { "year":1880,"sex":"F","name":"Jessica","n":7,"prop":7.17183721978607e-05},
  //   { "year":1881,"sex":"F","name":"Helen","n":612,"prop":0.00619088564058469},
  //   { "year":1881,"sex":"F","name":"Amanda","n":263,"prop":0.0026604622932578},
  //   { "year":1881,"sex":"F","name":"Betty","n":112,"prop":0.00113297253553184},
  //   { "year":1881,"sex":"F","name":"Dorothy","n":109,"prop":0.00110262505690152},
  //   { "year":1881,"sex":"F","name":"Linda","n":38,"prop":0.000384401395984017},
  //   { "year":1881,"sex":"F","name":"Deborah","n":14,"prop":0.00014162156694148},
  //   { "year":1881,"sex":"F","name":"Jessica","n":7,"prop":7.081078347074e-05},
  //   { "year":1882,"sex":"F","name":"Helen","n":838,"prop":0.00724311990042871},
  //   { "year":1882,"sex":"F","name":"Amanda","n":288,"prop":0.00248928225694925},
  //   { "year":1882,"sex":"F","name":"Betty","n":123,"prop":0.00106313096390541},
  //   { "year":1882,"sex":"F","name":"Dorothy","n":115,"prop":0.000993984234545706},
  //   { "year":1882,"sex":"F","name":"Linda","n":36,"prop":0.000311160282118656},
  //   { "year":1882,"sex":"F","name":"Deborah","n":15,"prop":0.00012965011754944},
  //   { "year":1882,"sex":"F","name":"Jessica","n":8,"prop":6.91467293597013e-05},
  //   { "year":1883,"sex":"F","name":"Helen","n":862,"prop":0.0071798032633955},
  //   { "year":1883,"sex":"F","name":"Amanda","n":287,"prop":0.00239049134175697},
  //   { "year":1883,"sex":"F","name":"Dorothy","n":141,"prop":0.00117442257556701},
  //   { "year":1883,"sex":"F","name":"Betty","n":120,"prop":0.000999508574950649},
  //   { "year":1883,"sex":"F","name":"Linda","n":49,"prop":0.000408132668104848},
  //   { "year":1883,"sex":"F","name":"Deborah","n":16,"prop":0.00013326780999342},
  //   { "year":1883,"sex":"F","name":"Jessica","n":6,"prop":4.99754287475325e-05},
  //   { "year":1884,"sex":"F","name":"Helen","n":986,"prop":0.00716642681668193},
  //   { "year":1884,"sex":"F","name":"Amanda","n":337,"prop":0.00244937711685782},
  //   { "year":1884,"sex":"F","name":"Dorothy","n":163,"prop":0.00118471356097277},
  //   { "year":1884,"sex":"F","name":"Betty","n":144,"prop":0.00104661811521521},
  //   { "year":1884,"sex":"F","name":"Linda","n":33,"prop":0.000239849984736819},
  //   { "year":1884,"sex":"F","name":"Jessica","n":14,"prop":0.000101754538979257},
  //   { "year":1884,"sex":"F","name":"Deborah","n":13,"prop":9.44863576235954e-05},
  //   { "year":1884,"sex":"F","name":"Patricia","n":6,"prop":4.36090881339671e-05},
  //   { "year":1885,"sex":"F","name":"Helen","n":1134,"prop":0.00798878470436565},
  //   { "year":1885,"sex":"F","name":"Amanda","n":339,"prop":0.0023881816708818},
  //   { "year":1885,"sex":"F","name":"Dorothy","n":196,"prop":0.00138077760322369},
  //   { "year":1885,"sex":"F","name":"Betty","n":155,"prop":0.0010919414719371},
  //   { "year":1885,"sex":"F","name":"Linda","n":60,"prop":0.000422687021395008},
  //   { "year":1885,"sex":"F","name":"Deborah","n":10,"prop":7.0447836899168e-05},
  //   { "year":1885,"sex":"F","name":"Jessica","n":6,"prop":4.22687021395008e-05},
  //   { "year":1885,"sex":"F","name":"Patricia","n":5,"prop":3.5223918449584e-05}
  // ]

  

//    stackedChart: StackedChart[] = [
//     {
//        "date": "Jan",
//        "type":"Left",
//        "one":14,
//        "two":287,
//        "three":147
//     },
//     {
//        "date": "Jan",
//        "type":"Right",
//        "one":545,
//        "two":27,
//        "three":487
//     }
//    ,
//    {
//        "date": "Feb",    
//        "type":"Left",
//        "one":143,
//        "two":288,
//        "three":424
//    },
//    {
//        "date": "Feb",
//        "type":"Right",
//        "one":191,
//        "two":209,
//        "three":345
//    },
//     {
//        "date": "Mar",
//        "type":"Left",
//        "one":148,
//        "two":27,
//        "three":147
//     },
//     {
//        "date": "Mar",
//        "type":"Right",
//        "one":386,
//        "two":286,
//        "three":287
//     }
//    ,
//    {
//        "date": "Apr",    
//        "type":"Left",
//        "one":13,
//        "two":286,
//        "three":924
//    },
//    {
//        "date": "Apr",
//        "type":"Right",
//        "one":121,
//        "two":209,
//        "three":345
//    },
//     {
//        "date": "May",
//        "type":"Left",
//        "one":145,
//        "two":287,
//        "three":647
//     },
//     {
//        "date": "May",
//        "type":"Right",
//        "one":556,
//        "two":27,
//        "three":87
//     }
//    ,
//    {
//        "date": "June",    
//        "type":"Left",
//        "one":143,
//        "two":28,
//        "three":424
//    },
//    {
//        "date": "June",
//        "type":"Right",
//        "one":121,
//        "two":209,
//        "three":345
//    },
//     {
//        "date": "July",
//        "type":"Left",
//        "one":148,
//        "two":287,
//        "three":147
//     },
//     {
//        "date": "July",
//        "type":"Right",
//        "one":56,
//        "two":687,
//        "three":387
//     }
//    ,
//    {
//        "date": "Aug",    
//        "type":"Left",
//        "one":143,
//        "two":28,
//        "three":424
//    },
//    {
//        "date": "Aug",
//        "type":"Right",
//        "one":121,
//        "two":209,
//        "three":345
//    },
//    {
//        "date": "Sept",
//        "type":"Left",
//        "one":121,
//        "two":209,
//        "three":345
//    },
//     {
//        "date": "Sept",
//        "type":"Right",
//        "one":148,
//        "two":287,
//        "three":147
//     },
//     {
//        "date": "Oct",
//        "type":"Left",
//        "one":586,
//        "two":287,
//        "three":487
//     }
//    ,
//    {
//        "date": "Oct",    
//        "type":"Right",
//        "one":143,
//        "two":285,
//        "three":42
//    },
//    {
//        "date": "Nov",
//        "type":"Left",
//        "one":11,
//        "two":269,
//        "three":145
//    },
//     {
//        "date": "Nov",
//        "type":"Right",
//        "one":586,
//        "two":287,
//        "three":487
//     }
//    ,
//    {
//        "date": "Dec",    
//        "type":"Left",
//        "one":10,
//        "two":266,
//        "three":44
//    },
//    {
//        "date": "Dec",
//        "type":"Right",
//        "one":128,
//        "two":203,
//        "three":35
//    }
//  ]
 
  lineChart: LineChart[] = [
   {
     "date": 'Jan',
     "value": 400
   },
   {
     "date": 'Feb',
     "value": 300
   },
   {
     "date": 'Mar',
     "value": 250
   },
   {
     "date": 'Apr',
     "value": 450
   },
   {
     "date": 'May',
     "value": 220
   },
   {
     "date": 'June',
     "value": 210
   },
   {
     "date": 'July',
     "value": 250
   },
   {
     "date": 'Aug',
     "value": 100
   },
   {
     "date": 'Sept',
     "value": 220
   },
   {
     "date": 'Oct',
     "value": 360
   },
   {
     "date": 'Nov',
     "value": 234
   },
   {
     "date": 'Dec',
     "value": 290
   }
 ]

 lineChart2: LineChart[] = [
  {
    "date": 'Jan',
    "value": 100
  },
  {
    "date": 'Feb',
    "value": 100
  },
  {
    "date": 'Mar',
    "value": 250
  },
  {
    "date": 'Apr',
    "value": 150
  },
  {
    "date": 'May',
    "value": 120
  },
  {
    "date": 'June',
    "value": 110
  },
  {
    "date": 'July',
    "value": 350
  },
  {
    "date": 'Aug',
    "value": 400
  },
  {
    "date": 'Sept',
    "value": 420
  },
  {
    "date": 'Oct',
    "value": 260
  },
  {
    "date": 'Nov',
    "value": 134
  },
  {
    "date": 'Dec',
    "value": 390
  }
]

constructor() { }

  ngOnInit(): void {

    

  }


  // constructor(private dashboardSvc: DashboardService) { }

  // ngOnInit(): void {

  //   this.dashboardSvc.getExposureDataAsset().subscribe((data: any[])=>{
  //     console.log(data);
  //     this.dataSourceAsset = data;
  //   })  

  // }

}
