import React, {Component} from 'react';
import './widget1.css';
import {scaleLinear} from 'd3-scale';
import {select} from 'd3-selection';
class Widget1 extends Component {
    interval;

    constructor(props) {
        super(props);
        this.createBarChart = this.createBarChart.bind(this);
        this.balancing = this.balancing.bind(this);
        this.data = [0, 0, 0, 0, 0, 0];
    }

    balancing() {
        if (this.interval) {
            window.clearInterval(this.interval);
        }
        this.interval = window.setInterval((e) => {
            for (let i = 0; i < this.data.length; i++) {
                if (i % 2) {
                    this.data[i] = Math.random() * 5;
                } else {
                    this.data[i] = -Math.random() * 5;
                }
                window.setTimeout(this.createBarChart(),50);
            }
        }, 400);
    }

    createBarChart() {
        const node = this.node;
        const yScale = scaleLinear()
            .range([this.props.size[1] / 2, 0]);
        select(node)
            .selectAll('rect')
            .data(this.data)
            .enter()
            .append('rect')
            .attr("class", (d) => {
                return d < 0 ? 'bar negative' : 'bar positive'
            })
            .attr('x', (d, i) => i * 25)
            .attr('y', d => d > 0 ? yScale(d) : yScale(0))
            .attr('height', d => Math.abs(yScale(d) - yScale(0)))
            .attr('width', 25);

        select(node)
            .selectAll('rect')
            .data(this.data)
            .exit()
            .remove();

        select(node)
            .selectAll('rect')
            .data(this.data)
            .attr('x', (d, i) => i * 25)
            .attr('y', d => d <= 0 ? yScale(0) : yScale(d))
            .attr('height', d => Math.abs(yScale(d) - yScale(0)))
            .attr('width', 25);
    }

    render() {
        return (<div>
            <button onClick={this.balancing}>
                Balancing
            </button>
            <svg className="chart" ref={node => this.node = node}
                 width={this.props.size[0]} height={this.props.size[1]}>
            </svg>
        </div>)
    }
}
export default Widget1;