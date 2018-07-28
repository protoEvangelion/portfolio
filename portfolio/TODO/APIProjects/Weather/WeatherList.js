import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from './chart'
import GoogleMap from './GoogleMap'
import smoothScroll from '../../../helpers/scroll'

class WeatherList extends Component {
	componentDidUpdate() {
    smoothScroll(document.getElementById("weatherTblContainer"))
	}
	renderWeather(cityData) {
		if(cityData) {
			const name = cityData.city.name
			const temps = cityData.list.map(weather => weather.main.temp * (9/5) - 459.67)
			const pressures = cityData.list.map(weather => weather.main.pressure)
			const humidities = cityData.list.map(weather => weather.main.humidity)
			const { lon, lat } = cityData.city.coord

			return (
				<tr height={105} key={name}>
					<td className="tdWeather"><GoogleMap lon={lon} lat={lat} /></td>
					<td className="tdWeather"><Chart data={temps} color="orange" units="°F" /></td>
					<td className="tdWeather"><Chart data={pressures} color="red" units="hPa" /></td>
					<td className="tdWeather"><Chart data={humidities} color="blue" units="%" /></td>
				</tr>
			)
		} else {
			return
		}
	}
	render() {
		return (
		<div id="weatherTblContainer" className="container containerComp">
			<div className="row">
				<div className="col-sm-12">
					<table className="table table-hover">
						<thead>
							<tr>
								<th className="thWeather">City</th>
								<th className="thWeather">Temperature (°F)</th>
								<th className="thWeather">Pressure (hPa)</th>
								<th className="thWeather">Humidity (%)</th>
							</tr>
						</thead>
						<tbody>
							{this.props.weather.map(this.renderWeather)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		)
	}
}

function mapStateToProps({ weather }) {
	return { weather }
}

export default connect(mapStateToProps)(WeatherList)
