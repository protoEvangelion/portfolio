import React, {Component} from 'react'
import Radium from 'radium'
import * as d3 from 'd3'
import d3Tip from 'd3-tip'
import month from 'month'

const styles = {
  container: {
		display: 'flex',
    justifyContent: 'center',
  }
}

class Chart extends Component {
	componentDidMount() {
		const margin = { top: 0, right: 20, bottom: 60, left: 35 },
				barData = this.props.data,
				width = 700 - margin.left - margin.right,
				height = 400 - margin.top - margin.bottom,
				barHeight= height / 12 - 3,
				barWidth = width / this.props.data.length + .5,
      	colors = ['#7caaff', '#e2f293', '#f7ff89', '#e5db27',  '#ce5c0a' , '#c41717', '#911414'],
				legend = [-7, -2.5, -.5, 0, .5, 2.5, 7]


		const xScale = d3.scaleLinear()
					.domain([1753, 2015])
					.range([0, width])

		const colorScale = d3.scaleQuantile()
					.domain(legend)
					.range(colors)

		const tip = d3Tip()
					.attr('class', 'd3-heat-tip')
					.offset([-10, 0])
					.html(d => {
						return `<div>${month(d.month)}, ${d.year}</br>Variance: ${d.variance} </br>Base Temp: 8.66°C<div>`
					})

		let myChart = d3.select('#chart').append('svg')
				.attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom)
				.attr('class', 'heatmap-chart')
				.append('g')
				.attr("transform", `translate(${margin.left}, ${margin.top})`)
				.style('background', 'lightgrey')

		myChart.call(tip)

		const myBars = myChart.selectAll('rect').data(barData)
					.enter().append('rect')
					.style('fill', d => colorScale(d.variance))
					.attr('x', d => xScale(d.year))
					.attr('y', d => (d.month-1) * (height/12))
					.attr('width', barWidth + 2)
					.attr('height', barHeight)
					.on('mouseover', tip.show)
					.on('mouseout', tip.hide)

			const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

			myChart.selectAll(".monthLabel")
				.data(months)
				.enter().append("text")
					.text(function (d) { return d; })
					.attr("x", 0)
					.attr("y", function (d, i) { return i * (height/12); })
					.style("text-anchor", "end")
					.attr("transform", `translate(-10,${(height-margin.top-margin.bottom)/12})`)
					.attr("class", 'monthLabel');

			const xAxis = d3.axisBottom()
						.scale(xScale)
						.tickFormat(d3.format('d'))

			d3.select('svg').append('g')
						.attr('class', 'heatmap-xaxis')
						.attr('transform', `translate(${margin.left}, ${height+margin.top})`)
						.call(xAxis)

			d3.select('svg').append('text')
				.attr('class', 'heatmap-xaxis-label')
				.attr('transform', `translate(${(width+margin.left+margin.right)/2}, ${height+margin.bottom+margin.top - 10})`)
				.style('text-anchor', 'middle')
				.text('Years')



	}

	render() {
		return <div className="animated rotateInUpRight" id="chart"></div>
	}
}

export default Chart = Radium(Chart)
