// Doesnt require state based component as it doesnt render on user interaction or re rerender itself
import React from 'react';
import VideoListItem from './videoListItem';
//props is videos from the index.js that we will collect here.
//Whenver we refactor a fn based comp to a class based component props(arguement in fn based) get changed to this.props

const VideoList = (props) => { 
    {/* Map is applied to the video array(whos length is 5) and on every video we have applied the VideoListItem where key and video are self created props to which each video array elemnt and its keytag is assigned */}
	const videoItems = props.videos.map((video) => {
		return <VideoListItem key = {video.etag} video = {video} />; 
	 });
	return (
			<ul className='col-md-4 list-group'>
			  {videoItems} {/*This is an array of videos*/}
			</ul>
		);
};

export default VideoList;
