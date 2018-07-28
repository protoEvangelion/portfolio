import React, {Component} from 'react'
import Radium from 'radium'
import dopingData from './data'
import nondopingData from './data2'
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import CustomTip from './CustomTip'

const styles = {
	container: {
		background: 'white',
		borderRadius: '10px',
		paddingRight: '40px',
		paddingBottom: '40px',
		marginBottom: '50px',
	},
	header: {
		fontFamily: 'Coiny',
		textAlign: 'center',
		fontSize: '2.5em',
		marginTop: '15px',
		paddingLeft: '35px',
	},
	xaxis: {
		textAlign: 'center',
	}
}

class ScatterGraph extends Component{
	constructor(props) {
		super(props)
		this.state = {
			doping: [],
			nondoping: []
		}
	}
	componentWillMount() {
		let date, minutesBehind, secondsBehind
		let doping = dopingData.map((cyclist) => {
			return Object.assign({}, cyclist, {
				"TimeBehind": cyclist.Seconds - dopingData[0].Seconds
			})
		})
		let nondoping = nondopingData.map((cyclist) => {
			return Object.assign({}, cyclist, {
				"TimeBehind": cyclist.Seconds - dopingData[0].Seconds
			})
		})

		this.setState({doping, nondoping})
	}
	render() {
		return (
			<div style={styles.container}>
				<div style={styles.header}>Relation Between Doping <br/> & Non-doping Pro Cyclists</div>
				<ScatterChart width={750} height={400} margin={{top: 50, right: 20, bottom: 20, left: 20}} style={{display: 'inline-block'}}>
	      	<XAxis dataKey={'TimeBehind'} name='TimeBehind' unit='seconds'/>
	      	<YAxis padding={{ top: 10 }} label="Ranking" dataKey={'Place'} name='Place' unit='rank'/>
	      	<Scatter name='Alleged Dopers' data={this.state.doping} fill='red'/>
					<Scatter name='Non-Alleged Dopers' data={this.state.nondoping} fill='#8884d8'/>
	      	<CartesianGrid padding={{ top: 10 }}/>
					<Legend verticalAlign="top"/>
	      	<Tooltip cursor={{strokeDasharray: '3 3'}} content={<CustomTip payload={this.props.payload}/>}/>
	      </ScatterChart>
	      <div id="xAxis label" style={styles.xaxis}>
					Seconds Behind 1st Place Cyclist Marco Pantini
				</div>
			</div>
  	)
	}

}

export default ScatterGraph = Radium(ScatterGraph)
