import React, {Component} from 'react'

let colors = [
	['#F1F2B5', '#135058'],
	['#7b4397', '#dc2430'],
	['#8e9eab', '#eef2f3'],
	['#136a8a', '#267871'],
	['#ff0084', '#33001b'],
	['#6441A5', '#2a0845'],
	['#ffb347', '#ffcc33'],
	['#43cea2', '#185a9d'],
	['#D38312', '#A83279'],
	['#00c6ff', '#0072ff'],
	['#B3FFAB', '#12FFF7']
]

let color1 = '#B3FFAB'
let color2 = '#12FFF7'
let style={
	background: color1,
	background: `webkit-linear-gradient(to left, ${color1} , ${color2})`,
	background: `linear-gradient(to left, ${color1} , ${color2})`
}
let typeAnimate = 'fadeIn'
let count = 0

export default class QuoteDetail extends Component {
	componentWillUpdate(nextProps) {
		if(count==10) {count=0}
		++count
		switch(count % 2) {
			case 1:
				typeAnimate = 'fadeInLeft'
				color1 = colors[count][0]
				color2= colors[count][1]
				style={
					background: color1,
					background: `webkit-linear-gradient(to left, ${color1} , ${color2})`,
					background: `linear-gradient(to left, ${color1} , ${color2})`
				}
				break
			case 0:
				typeAnimate = 'fadeInRight'
				color1 = colors[count][0]
				color2 = colors[count][1]
				style={
					background: color1,
					background: `webkit-linear-gradient(to left, ${color1} , ${color2})`,
					background: `linear-gradient(to left, ${color1} , ${color2})`
				}
		}
	}
	render() {
		const quoteAuthor = !this.props.quote.quoteAuthor ? 'unknown' : this.props.quote.quoteAuthor
		return (
			<div className={`jumbotron animated ${typeAnimate}`} style={style}>
				<h2 className="helloWorld">{this.props.quote.quoteText}</h2>
				<h3 className="helloWorld">~{quoteAuthor}</h3>
			</div>
		)
	}
}
