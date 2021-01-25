import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

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
	private margin = {top: 10, right: 50, bottom: 30, left: 50};
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
	
	private colors = ['#284566', '#2eadbe'];

  constructor(private container: ElementRef){
  }
  
  ngOnInit(): void {
    this.initScales();
		this.initSvg();
    this.drawLine(this.lineData, 'stroke');
    this.drawLine(this.lineData2, 'stroke2');
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

  //create axis
	private drawAxis(){
    this.x0Axis = this.chart.append('g')
      .attr("color", "#b2b2b2")
      .style("font", "12px roboto")
			.classed('x-axis', true)
			.attr("transform", "translate(0," + this.height + ")")
			.call(d3.axisBottom(this.x0))

    this.y0Axis = this.chart.append('g')
      .attr("color", "#b2b2b2")
      .style("font", "12px roboto")
			.classed('y0-axis', true)
			.call(d3.axisLeft(this.y0));  
	}

  //plot the lines
  private drawLine(linedata:any, strokeNumber:string){
    var that = this;
    var stroke = '#000';

    var valueline = d3.line()
      .x(function(d, i) { 
        return that.x0(d['year']) + 0.5 * that.x0.bandwidth();
      })
      .y(function(d) { 
        return that.y0(d['rate']); 
    });

    this.x0.domain(linedata.map((d:any)=>{
      return d.year
    }));

    // this.y0.domain(d3.extent(linedata, function(d) { 
    //   return d.rate 
    // }));

    this.y0.domain([0,4.0])

    //determine stroke colors
    stroke = (strokeNumber == 'stroke') ? this.colors[0] : this.colors[1]

    this.lineArea.append("path")
    .data([linedata])
    .attr("class", "line")
    .attr("d", valueline)
    .attr("fill", "none")
    .attr("stroke", stroke)
    .attr("stroke-width", "1")
    .transition()
    .duration(1000)
  }    

}

