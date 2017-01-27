//First import REACT and REACTDOM from the react and react-dom files.
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar.js';

//step1: utube data api key
const API_KEY = `AIzaSyA5qDp0aoDSVjTuMSXhd2A86tueIai608g`;
//step2: dwld and install a npm package which will enable us to search from utube. do it using npm in the project directory. use this code " npm install --save youtube-api-search " --save will save it in the package.json file. 

YTSearch({key: API_KEY, term: `Kylie Minogue`}, function(data){console.log(data);});
//Create a component
//Next we'll refactor this app from a fucntional component to a class based component
const App = () => {
   return (
           <div>
             <SearchBar />  
           </div>
   ) ;
};

//Show it on page
ReactDOM.render(<App></App>,document.querySelector('.container'));
                
                