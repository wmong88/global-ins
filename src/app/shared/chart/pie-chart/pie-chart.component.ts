import { Component, OnInit, Input, ElementRef } from '@angular/core'
import { ExposureData } from 'src/app/shared/models/exposureData.model'
import * as d3 from 'd3'

// Adopted from Basic pie chart example on D3 Graph Gallery:
// https://www.d3-graph-gallery.com/graph/pie_basic.html
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {
  @Input() data:ExposureData[]
  
  private svg;
  //private margin = 50;
  private width = 200;
  private height = 200;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2// - this.margin;
  private colors;

  constructor(private container: ElementRef){
  }
  
  ngOnInit(): void {
    console.log(this.data);
    

    this.createSvg();
    this.createColors();
    this.drawChart();
  }

  private createSvg(): void {
    this.svg = d3.select(this.container.nativeElement)
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
    .domain(this.data.map(d => d.rate.toString()))
    .range(["#284566", "#2eadbe", "#ef4d61", "#fbb218"]);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.rate));

    // Build the pie chart
    this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
    )
    .attr('fill', (d, i) => (this.colors(i)))
    .attr("stroke", "#efefef")
    .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
    .innerRadius(10)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('text')
    .text(d => d.data.counterparty)
    .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("fill", "#fff")
    .style("font-size", 12);
  }

}
