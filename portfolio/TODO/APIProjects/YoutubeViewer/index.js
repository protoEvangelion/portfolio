import _ from 'lodash'
import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const API_KEY = 'AIzaSyDwsOCQnHPYgPXxQ3C42DAgtW_umXoIpEE'
// import './style.css'

export default class YoutubeViewer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			videos: [],
			selectedVideo: null,
			term: 'ocean waves'
		}
	}
	componentWillMount() {
		this.videoSearch()
	}
	changeTerm(term) {
		this.setState({term})
	}
	videoSearch() {
		YTSearch({key: API_KEY, term: this.state.term}, (videos) => {
				this.setState({
					videos: videos,
					selectedVideo: videos[0]
				})
			})
	}
	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

		return (
			<div id="youtube-viewer-container" style={{marginBottom: '200px'}}>
				<SearchBar
					change={this.changeTerm.bind(this)}
					search={this.videoSearch.bind(this)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		)
	}
}
