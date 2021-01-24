import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

interface LineChart{
  date: string,
  value: number
}

// Adopted from Basic pie chart example on D3 Graph Gallery:
// https://www.d3-graph-gallery.com/graph/pie_basic.html
@Component({
  selector: 'app-multi-line-chart',
  templateUrl: './multi-line-chart.component.html',
  styleUrls: ['./multi-line-chart.component.css']
})
export class MultiLineChartComponent implements OnInit {
  @Input() lineData:any[]
  @Input() lineData2:any[]
  
  private w: number = 600;
	private h: number = 200;
  private divH: number = 375;
  private halfLength: number;
	private margin = {top: 10, right: 50, bottom: 80, left: 50};
	private width = this.w - this.margin.left - this.margin.right;
	private height = this.h - this.margin.top - this.margin.bottom;

	private x0: any;
	private y0: any;
	private svg: any;
	private g: any;
	private chart: any;
	private layersBarArea: any;
	private layersBar: any;
	private x0Axis: any;
	private y0Axis: any;
  private valueline: any;
  private lineArea: any
	
	private colors = ['#00D7D2', '#313c53', '#FFC400'];

  constructor(private container: ElementRef){
  }
  
  ngOnInit(): void {
    this.initScales();
		this.initSvg();
    this.drawLine(this.lineData, '1');
    this.drawLine(this.lineData2, '2');
		this.drawAxis();
	}

	private initScales(){
		this.x0 = d3.scaleBand()
			.rangeRound([0, this.width])
			.padding(0.05);

    this.y0 = d3.scaleLinear()
			.range([this.height, 0])

	}

	private initSvg() {

		this.svg = d3.select(this.container.nativeElement)
			// .select('.chart-container')
			.append('svg')
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr('class', 'chart')
			.attr("viewBox", "0 0 600 200");

		this.chart = this.svg.append('g')
			.classed('chart-contents', true)
			.attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.layersBarArea = this.chart.append('g')
      .classed('layers', true);

    this.lineArea = this.chart.append('g')
      .classed('line', true);  
	}

	private drawAxis(){
    this.x0Axis = this.chart.append('g')
      .attr("color", "pink")
			.classed('x-axis', true)
			.attr("transform", "translate(0," + this.height + ")")
			.call(d3.axisBottom(this.x0))

    this.y0Axis = this.chart.append('g')
      .attr("color", "pink")
			.classed('y0-axis', true)
			.call(d3.axisLeft(this.y0));  

	}


  private drawLine(linedata:any, lineNumber:string){
    var that = this;
    var valueline = d3.line()
      .x(function(d, i) { 
        return that.x0(d['date']) + 0.5 * that.x0.bandwidth();
      })
      .y(function(d) { 
        return that.y0(d['value']); 
    });

    this.x0.domain(linedata.map((d:any)=>{
      return d.date
    }));

    // this.y0.domain(d3.extent(linedata, function(d) { 
    //   return d.value 
    // }));

    this.y0.domain([0,500])

    if(lineNumber === '1'){
      this.lineArea.append("path")
      .data([linedata])
      .attr("class", "line")
      .attr("d", valueline)
      .attr("fill", "none")
      .attr("stroke", "#FE0600")
      .attr("stroke-width", "1")
      .transition()
      .duration(1000)
    } else {
      this.lineArea.append("path")
      .data([linedata])
      .attr("class", "line")
      .attr("d", valueline)
      .attr("fill", "none")
      .attr("stroke", "#abc222")
      .attr("stroke-width", "1")
      .transition()
      .duration(1000)
    }
    
      
      // .attrTween('d', pathTween);

      // function pathTween() {
      //     var interpolate = d3.scale.quantile()
      //       .domain([0,1])
      //       .range(d3.range(1, linedata.length + 1));
      //     return function(t) {
      //       // @ts-ignore: Unreachable code error
      //       return line(linedata.slice(0, interpolate(t)));
      //     };
      // }​
    }    

}

