import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Markdown from '../../UtilityProjects/Markdown'

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

const UtilityProjects = () => (
	<div style={{textAlign: 'center'}}>
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
		<Markdown />
	</div>
)

export default UtilityProjects
