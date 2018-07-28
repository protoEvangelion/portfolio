import React, {Component} from 'react'
import Radium from 'radium'
import axios from 'axios'
import proxyUrl from '../../../api'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import CustomTip from './CustomTip'
import {convertMonth} from './convertMonth_helper'
const styles = {
}

class Simple extends Component{
	constructor(props) {
		super(props)
		this.state = {
			gdpData: []
		}
	}
	componentWillMount() {
		const url = `https://api.stlouisfed.org/fred/series/observations?series_id=GDP&file_type=json&fq=Quarterly&api_key=`
		axios.get(`${proxyUrl}${url}`)
			.then(res => {
				let filteredData = res.data.observations.filter(gdp => {
					return gdp.value !== '.'
				})
				let gdpData = filteredData.map((gdp, i) => {
					return {
						date: gdp.date.slice(0, 4),
						month: convertMonth(gdp.date.slice(5, 7)),
						GDP: Number(gdp.value)
					}
				})
				let reducedData = gdpData
				this.setState({gdpData: reducedData})
			})
			.catch(err => console.log(err))

	}
		render() {
			if(this.state.gdpData.length < 1) {
				return <i style={{color: '#33adff', marginTop: '50px'}} className="fa fa-spinner fa-pulse fa-3x" aria-hidden="true"></i>
			}
			return (
				<BarChart
					width={1000}
					height={500}
					data={this.state.gdpData}
					margin={{top: 5, right: 30, left: 20, bottom: 5}}>
					 <XAxis dataKey="date"/>
					 <YAxis/>
					 <CartesianGrid strokeDasharray="3 3"/>
					 <Tooltip content={<CustomTip payload={this.props.payload}/>}/>
					 <Legend />
					 <Bar name="GDP (Billions of Dollars)" dataKey="GDP" fill="#82ca9d" />
				</BarChart>
	  	)
		}

}

export default Simple = Radium(Simple)
