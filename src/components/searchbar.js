//include react in all the components to convert the jsx to vanilla js. 
//import React from 'react'
import React, { Component } from 'react'; 
//this import is same as --->  const React.Component = Component

/*
1.App starts up.
2.index.js file renders an instance of SearchBar
3.We get the new instance in SearchBar so the constructor is called.
4.And this.state is set to an empty string.
5.Then the component renders.
6.The value of the <input /> is set to an empty string(this.state.term).
7.When user inputs some text, the state is updated but the value of the <input /> hasnt changed yet.
8.Event handler(onChange) runs updating the value of the state. 
9.And as setState is called the component rerenders.
10.Finally the input is rendered and the new value is visible on the screen.
key---> when the input types, he doesnt actually change the <input /> value but only triggers an event. And then we make the state to change the value of <input />
*/


/*const SearchBar = () => {
 return <input />;
};*/

//Es6 class with extends React.component so our searchbar gets additional funcunalities from React.Component class.
//class SearchBar extends React.Component{ 
 class SearchBar extends Component{
 /*State is a plane js object that exists on any component which is class based. */

  constructor(props){
   super(props); /*the parent(Compnonent) class has its own constructor fn. We defined a method which is already defined in the parent class(Component). We can call that parent method on a parent class using Super(). */

   this.state = {term : ''};

  }

 /* Every class must have a render method defined for display. */
 render(){
 	{/*Add an event handler to the input elemnt. onChange is an event and onInputChange is a callback.
 	dont put a semicolon after consle.log else it wont work at all. */}
    {/* A CONTROLLED form element input field etc is something whose value is set by the state and not the other way around 
        Cos input tells the state what the value should be but ideally we need the state to control the input 
        so below we change the value of input by setting it to the term of state */}
 	return  ( 
 		     <div className="search-bar">
 		     {/* input onChange = {event => console.log(event.target.value)} /> */}
 		     <input
 		     value ={this.state.term} 
 		     onChange = {event => this.onInputChange(event.target.value)} />
 		     {/*value of input: {this.state.term}*/} 
  		     </div>
 		    ); 
 	} 
  //variables should be put inside curly braces in jsx and no semicolons. 
     onInputChange(term) {
         this.setState({term});
         this.props.onSearchTermChange(term);
     }
 

// onInputChange(event){ replaced this function in one line above using es6.

/*Q: I just log event the value for target is null?? 

  A: If I add event.persist(); just before console.log(event);  then the target is shown.
  I think it's related to this: https://github.com/facebook/react/pull/5840 
  also see the second note here: https://facebook.github.io/react/docs/events.html*/	
   
   //event.persist(); //use this when we want only event to be seen in console.
   //console.log(event.target.value);
 //} 
}

export default SearchBar;