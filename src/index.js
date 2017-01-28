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
class App extends Component {

	constructor(props) {
     super(props);

     this.state  = { videos: [] };
     /* This is going to be the default front page, whenver uses enters he will see a list of vidoes on his page b4 his query.*/
     YTSearch({key: API_KEY, term: `Kylie Minogue`}, (videos)=>{this.setState({videos});});
     /* This syntax is applicable only for same key and same value ie. its samee as {videos: videos} */


    }

   render() {
   return (
             <div>
             <SearchBar />
             <VideoDetails video ={this.state.videos[0]} />
             <VideoList videos={this.state.videos}/>  
         {/* videos is a property defined on the jsx tag VideoList, this kind of passing data is called passing props*/}
           </div>
   		) ;
	}
};

//Show it on page
ReactDOM.render(<App></App>,document.querySelector('.container'));
                
                