// Doesnt require state based component as it doesnt render on user interaction or re rerender itself
import React from 'react';
//props is videos from the index.js that we will collect here.
//Whenver we refactor a fn based comp to a class based component props(arguement in fn based) get changed to this.props
const VideoList = (props) => { 
	return (
			<ul className='col-md-4 list-group'>
			   { /* This will print number of videos searched */ }
				{props.videos.length}
			   
			</ul>
		);
};

export default VideoList;
