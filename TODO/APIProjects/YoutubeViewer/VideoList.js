import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props) => {
	const videoItems = props.videos.map((video, i) => {
		return (
			<VideoItem
				onVideoSelect={props.onVideoSelect}
				video={video}
				key={video.etag} />
		)
	})
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList
