//First import REACT and REACTDOM from the react and react-dom files.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar.js';
import VideoList from './components/videoList.js';
import VideoDetails from './components/videoDetail.js';
//step1: utube data api key
const API_KEY = `AIzaSyA5qDp0aoDSVjTuMSXhd2A86tueIai608g`;
//step2: dwld and install a npm package which will enable us to search from utube. do it using npm in the project directory. use this code " npm install --save youtube-api-search " --save will save it in the package.json file. 

//Create a component
//Next we'll refactor this app from a fucntional component to a class based component

/* FLow:->
1.app boots up videos is empty and selectedVideo null
2.we go in VideoDetail which has no video so we get loading..
3.At the same time we make a request for the defualt page(grab list of vids(5)), which is passed to this.setState and the first video is set.
4.Since we have changed the state, its gonna rerender the page with the first video */

//Line50:onVideoSelect we pass a function which takes a newVedio and updates the apps state to that video.
//WE ARE PASSING THIS AS A PROPERTY TO VideoList.
class App extends Component {

	constructor(props) {
     super(props);

     this.state  = { 
     	             videos: [],
     				 selectedVideo: null
     			  };
     /* This is going to be the default front page, whenver uses enters he will see a list of vidoes on his page b4 his query.*/
     YTSearch({key: API_KEY, term: `Kylie Minogue`}, (videos)=>{

     	this.setState( 
     		{//{videos}/* This syntax is applicable only for same key and same value ie. its samee as {videos: videos} */
     		videos: videos,
     		selectedVideo: videos[0]
     });
     
	});
 }

   render() {
   return (
             <div>
             <SearchBar />
             <VideoDetails video ={this.state.selectedVideo} />
             <VideoList 
             onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
             videos={this.state.videos}/>  
         {/* videos is a property defined on the jsx tag VideoList, this kind of passing data is called passing props*/}
           </div>
   		) ;
	}
};

//Show it on page
ReactDOM.render(<App></App>,document.querySelector('.container'));
                
                