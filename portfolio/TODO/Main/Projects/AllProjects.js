import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

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

const AllProjects = () => (
	<div style={{textAlign: 'center'}}>
		<Link to="/weather">
			<Item src={require('./images/weather.png')} />
		</Link>
		<Link to="/wikiViewer">
			<Item src={require('./images/wiki.png')} />
		</Link>
		<Link to="/quotepump">
			<Item src={require('./images/quotePump.png')} />
		</Link>
		<Link to="/twitch">
			<Item src={require('./images/twitch.png')} />
		</Link>
		<Link to="/leaderboard">
			<Item src={require('./images/Leaderboard.png')} />
		</Link>
		<Link to="/recipebox">
			<Item src={require('./images/Recipe.png')} />
		</Link>
		<Link to="/youtube-viewer">
			<Item src={require('./images/youtubeviewer.png')} />
		</Link>

		<Link to="/calc">
			<Item src={require('./images/calc.png')} />
		</Link>
		<Link to="/tictactoe">
			<Item src={require('./images/tic.png')} />
		</Link>
		<Link to="/pomodoro">
			<Item src={require('./images/pomodoro.png')} />
		</Link>
		<Link to="/simon">
			<Item src={require('./images/simon.png')} />
		</Link>
		<Link to="/markdown">
			<Item src={require('./images/Markdown.png')} />
		</Link>
		<Link to="/game-of-life">
			<Item src={require('./images/gameoflife.png')} />
		</Link>

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
	</div>
)

export default AllProjects
