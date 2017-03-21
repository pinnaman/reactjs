// src/greet.js

var moment = require('moment'); 
var React = require('react'); 
var ReactDOM = require('react-dom'); 


function greet(who) {
    console.log('Hello ' + who + ', it\'s ' + moment().format('h:mm:ss a') + '!');
};

// Stateless component
//export const Greet = (props) => {
//  return <h3>Hello {this.props.message}!!!</h3>
//}

export class Greet extends React.Component {
  constructor (props) {
    super()

    this.state = {
      name: props.user.name
    }
  }

  render() {

	    return (
        <div>
       <h1>Hello, {this.props.user.name}!</h1>
       <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>

      );

  }

}


