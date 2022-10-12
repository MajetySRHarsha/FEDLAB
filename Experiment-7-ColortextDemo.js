import React, {Component} from 'react';

class TextColorDemo extends Component {
	constructor(props)
    {
        super(props);
		this.state = {
		color : "#FF00FF"
	   }
	}
	
    setRed = (e) => {
		this.setState({color: "#FF0000"});
    }
    setGreen = (e) => {
		this.setState({color: "#00FF00"});
    }
    setBlue = (e) => {
		this.setState({color: "#0000FF"});
    }
	render () {
		return(
			<div>
			<h1 style={{color:this.state.color}}>
			This is CSE B class room 
			</h1>
			<button onClick = {this.setRed}>Red</button>
            		<button onClick = {this.setGreen}>Green</button>
            		<button onClick = {this.setBlue}>Blue</button>
			</div>
		);
	}
}

export default TextColorDemo;