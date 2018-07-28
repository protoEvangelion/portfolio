import React, {Component} from 'react'
import Radium from 'radium'
import * as d3 from 'd3'
import data from './countries.json'

const color1 = '#B3FFAB', color2 = '#12FFF7'

const styles = {
  container: {
		display: 'flex',
    justifyContent: 'center',
    background: color1,
  	background: `webkit-linear-gradient(to left, ${color1} , ${color2})`,
  	background: `linear-gradient(to left, ${color1} , ${color2})`
  }
}

class Graph extends Component {
  componentDidMount() {

    const svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        color = 'blue',
        radius = 15

    const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.index))
        .force('charge', d3.forceManyBody().strength(-5))
        .force('collide', d3.forceCollide(radius + 2).strength(.5))
        .force("center", d3.forceCenter(width / 2, height / 2))

    const link = svg.append("g")
        .attr("class", "links")
      .selectAll("line")
      .data(data.links)
      .enter().append("line")
        .attr("stroke-width", 1)
        .style('stroke', '#999')
        .style('stroke-opacity', 0.6)

    const node = svg.selectAll(".flag")
        .data(data.nodes)
        .enter().append("image")
        .attr("xlink:href", d => require(`./flag/${d.code}.png`))
        .attr("width", radius)
        .attr("height", radius)
        .attr("x", -5)
        .attr("y", -8)

        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))

      node.append("title")
          .text(d => d.id)

      simulation
          .nodes(data.nodes)
          .on("tick", ticked)

      simulation.force("link")
          .links(data.links)

    function ticked() {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y)

      node
          .attr("cx", d => d.x = Math.max(radius, Math.min(width - radius, d.x)))
          .attr("cy", d => d.y = Math.max(radius, Math.min(height - radius, d.y)))
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    }


    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    function dragged(d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }


  }
  render() {
    return (
      <div>
        <svg className="animated lightSpeedIn" id="forceGraph" style={styles.container} width="800" height="500">
        </svg>
      </div>

    )
  }
}

export default Graph = Radium(Graph)
