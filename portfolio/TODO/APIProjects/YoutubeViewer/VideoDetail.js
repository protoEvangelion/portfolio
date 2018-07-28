import React from 'react'

const VideoDetail = ({video}) => {
	if(!video) {
		return <div>Loading...</div>
	}
	const videoId = video.id.videoId
	const url = `https://youtube.com/embed/${videoId}`

	return (
		<div className="video-detail">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details" style={{marginBottom: '50px'}}>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoDetail
