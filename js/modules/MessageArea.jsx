import React from 'react'
import ReactDOM from 'react-dom';
import AppActions from '../actions/AppActions';

var message;
class messageArea extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    //this.onChange = this.onChange.bind(this);
	    this.state = {title: null, message: null};
	    this.titleChanged = this.titleChanged.bind(this);
    	this.messageChanged = this.messageChanged.bind(this);
	}
	titleChanged(event) {
	    let title = event.target.value;
	      this.setState({
	        title
	    });
  	}
  	messageChanged(event) {
	    let message = event.target.value;
	      this.setState({
	        message
	    });
  	}
	buttonDisabled() {
  		return (this.state.message === null || this.state.message === '');
	}
	render() {
		message = {
				message : this.state.message,
				title : this.state.title
		};												
		return (
				<div className="container">
				    <div className="row">
						<div className="col-sm-8 col-md-8">
				            <div className="panel panel-default">
				                <div className="panel-body">                
				                    	<input type="text" className="form-control counted messageArea" placeholder="Title"
				                    	value={this.state.title} onChange={this.titleChanged}/>
				                        <textarea className="form-control counted messageArea" name="message" placeholder="Type in your message" 
				                        value={this.state.message} onChange={this.messageChanged} rows="5" ></textarea>
				                        <button onClick={this.postMessage.bind(this,message)}className="btn btn-info" disabled= {this.buttonDisabled()}>Post New Message</button>
				                </div>
				        	</div>
				    	</div>
					</div>
			</div>
		);
   }
   postMessage(data){
   	console.log(data);
	console.log('inside post message method');
	AppActions.postMessage(data);
   }
}

export default messageArea;