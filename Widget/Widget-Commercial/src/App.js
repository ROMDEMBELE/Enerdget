import React, { Component } from 'react';
import logo from './logo.svg';
import background from './back.svg'
import './App.css';
import * as d3 from "d3";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    var width = 650,
    height = 400,
    green = "rgb(47, 191, 59)",
    red = "#ea445f",
    backheight = height+120,
    data = [63,-100,-61,41,27,-12,0,4,100];

var y = d3.scaleLinear()
    .range([height, height/2]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);

    d3.select(".background")
      .append("img")
      .attr("src",background)
      .attr("height",backheight)
      .attr("width",width);

  // y.domain([d3.min(data, function(d) { return d; }), d3.max(data, function(d) { return d; })]);
  y.domain([0, 100]);


  var barWidth = (width-100) / data.length ;

  var bar = chart.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("height",height)
      .attr("transform", function(d, i) { return "translate(" + (i * barWidth + 60)+", 0)"; });

  bar.append("rect")
    .attr("class","empty")
    .attr("y",0)
    .attr("rx",4)
    .attr("ry",4)
    .attr("fill","#ccc9c7")
    .attr("height",height)
    .attr("width",barWidth - 20);

  bar.append("rect")
      .attr("fill", (d) => d>=0 ? green : red)
      .attr("y", function(d) { return d>0 ? y(Math.abs(d)) - height/2 : height/2;})
      .attr("height", function(d) { return d==0 ? 0 : height - y(Math.abs(d)); })
      .attr("width", barWidth - 20)
      .attr("rx",4)
      .attr("ry",4);

    chart.append("line")
      .attr("stroke","rgb(255, 120, 48)")
      .attr("x1",0)
      .attr("y1",height/2)
      .attr("x2",width)
      .attr("y2",height/2)
      .attr("stroke-width","3");

      let i=-100;
      while (i <= 100) {
        chart.append("line")
        .attr("stroke","rgb(255, 120, 48)")
        .attr("x1",15)
        .attr("stroke-dasharray","5,5")
        .attr("y1",i==0 ? height/2 : i>0 ? y(i) - height/2: height - y(-i) + height/2)
        .attr("x2",width-15)
        .attr("y2",i==0 ? height/2 : i>0 ? y(i) - height/2 :height - y(-i) + height/2)
        .attr("stroke-width","1");

        chart.append("text")
          .attr("x",40)
          .attr("y",(i==0 ? height/2 : i>0 ? y(i) - height/2 : height - y(-i) + height/2)+10)
          .attr("dy",".25em")
          .attr("fill","rgb(255, 120, 48)")
          .attr("font-weight","bold")
          .text(Math.abs(i)+"A");

        i=i+20;

      }

      bar.append("text")
          .attr("class","label")
          .attr("font-weight","bold")
          .attr("fill",(d) => d == 0 ? "white" : d>0 ? green : red)
          .attr("x", (barWidth-20) / 2)
          .attr("y", function(d) { return d==0 ? height/2 - 20 : d>0 ? y(d) - 15 - height/2 : height - y(-d) + height/2 + 5 ; })
          .attr("dy", ".75em")
          .text(function(d) { return d != 0 ? Math.abs(d)+" A" : "0A"; });

      bar.append("text")
        .attr("x", (barWidth-20) / 2)
        .attr("y",height+20)
        .attr("dy",".75em")
        .attr("fill","#ccc9c7")
        .text((d) => "C°"+(data.indexOf(d)+1));
    }

  render() {
    return (
      <div className="App">
        <div className="background">
          <svg className="chart" style={{ position : "absolute"}}/>
        </div>
      </div>
    );
  }
}

export default App;
