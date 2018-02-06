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
    var width = 550,
    height = 430,
    backwidth = width+50,
    backheight = height+70,
    data = [1,-4,7,-6,2,8,-5,4];

var y = d3.scaleLinear()
    .range([height, height/2]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);

    d3.select(".background")
      .append("img")
      .attr("src",background)
      .attr("height",backheight)
      .attr("width",backwidth);

  // y.domain([d3.min(data, function(d) { return d; }), d3.max(data, function(d) { return d; })]);
  y.domain([-10, 10]);


  var barWidth = (width-20) / data.length ;

  var bar = chart.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("height",height)
      .attr("transform", function(d, i) { return "translate(" + i * barWidth + ", 0)"; });

  bar.append("rect")
    .attr("class","empty")
    .attr("y",0)
    .attr("rx",5)
    .attr("ry",5)
    .attr("fill","darkgray")
    .attr("height",height)
    .attr("width",barWidth - 20);

  bar.append("rect")
      .attr("class","plot")
      .attr("y", function(d) { return d>0 ? y(Math.abs(d)) - height/2 : height/2;})
      .attr("height", function(d) { return height - y(Math.abs(d)); })
      .attr("width", barWidth - 20)
      .attr("rx",5)
      .attr("ry",5);

  bar.append("text")
      .attr("x", barWidth / 2)
      .attr("y", function(d) { return d>0 ? y(d) + 10 - height/2 : height - y(-d) + height/2 - 25 ; })
      .attr("dy", ".75em")
      .text(function(d) { return d; });

      chart.append("line")
        .attr("stroke","rgb(255, 120, 48)")
        .attr("x1",0)
        .attr("y1",height/2)
        .attr("x2",width-40)
        .attr("y2",height/2)
        .attr("stroke-width","5");
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to betterie</h1>
        </header>
        <div className="background">
          <svg className="chart" style={{ position : "absolute"}}/>
        </div>
      </div>
    );
  }
}

export default App;
