import React from 'react';



//key and video were the self created props we built in videoList.js
// we refer to those props in here as props.key or props.video
//so here we can get it as const video = props.video OR we 
//we can just use es6 new feature and pass in video as props cos we only need that and key prop is unused.
const VideoListItem = (props) => {
  return <li>Video</li>
};

export default VideoListItem;
