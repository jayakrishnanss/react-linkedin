import React from 'react'
import MessageStore from '../stores/MessageStore.js'
import AppActions from '../actions/AppActions'

var messages = []

class Message extends React.Component {

	constructor(props){
		super(props)
		this.state = {hover:false}
	}

   onHover(){
      messages = MessageStore.getMessages()
   }

   componentDidMount() {
     MessageStore.addHoverListener(this.onHover)
   }

   componentWillUnmount() {
     MessageStore.removeHoverListener(this.onHover)
   }

	show(){
      AppActions.hover()
		this.setState({hover: true})
	}

	hide(){
      setTimeout(function(){
         this.setState({hover: false})
      }.bind(this),1000)
	}

   render() {
      var messageBody
      if(this.state.hover)
      	messageBody = <div className="message_body" onMouseEnter={this.show.bind(this)} onMouseLeave={this.hide.bind(this)}><div>{messages}</div></div>
      else
         messageBody = null
      return (
         <div className="message_container">
         	<div className="message_icon" onMouseEnter={this.show.bind(this)} onMouseLeave={this.hide.bind(this)}>
            	<i className="fa fa-envelope"></i>
            </div>
           	{messageBody}
         </div>
      	);
   }
}

export default Message;