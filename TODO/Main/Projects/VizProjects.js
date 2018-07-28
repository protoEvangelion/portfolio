import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import ForceGraph from '../../DataVizProjects/Force'

const Item = styled.div`
	margin: 20px 20px;
	background: url(${props => props.src}) no-repeat center;
	background-size: 100% auto;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	cursor: default;
	transition: all 1s ease-in-out;
	display: inline-block;
	text-align: left;

	&:hover {
		box-shadow:
			inset 0 0 0 110px rgba(65, 88, 200, 0.4),
			inset 0 0 0 16px rgba(255,255,255,0.8),
			0 1px 2px rgba(0,0,0,0.1);
	  cursor: pointer;
	}
`

const VizProjects = () => (
	<div style={{textAlign: 'center'}}>
		<Link to="/GDP">
			<Item src={require('./images/GDP.png')} />
		</Link>
		<Link to="/scatterplot_doping_olympian_cyclists">
			<Item src={require('./images/scatter.png')} />
		</Link>
		<Link to="/heatmap">
			<Item src={require('./images/heatmap.png')} />
		</Link>
		<Link to="/world-force-graph">
			<Item src={require('./images/force.png')} />
		</Link>
		<ForceGraph />
	</div>
)

export default VizProjects
