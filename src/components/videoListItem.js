import React from 'react';



//key and video were the self created props we built in videoList.js
// we refer to those props in here as props.key or props.video
//so here we can get it as const video = props.video OR we 
//we can just use es6 new feature and pass in video as props cos we only need that and key prop is unused.
//const VideoListItem = (props) => {
const VideoListItem = ({video}) => {
  const imgUrl = video.snippet.thumbnails.default.url ;
  const title = video.snippet.title;
  return (
		<li className = "list-group-item">
  			<div className = "video-list media">
  	           	<div className = "media-left">
  	           		<img className = "media-object" src={imgUrl}/>
  	           	</div>

				<div className = "media-body">
					<div className = "media-heading">{title}</div>
				</div>
			</div>
		</li>
		);

};

export default VideoListItem;
