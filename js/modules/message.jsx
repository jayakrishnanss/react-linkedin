import React from 'react'
import MessageBody from './messageBody.jsx'
import MessageStore from '.js/stores/MessageStore'

class Message extends React.Component {

	constructor(props){
		super(props)
		this.state = {hover:false, timer:1000}
	}

   onHover(){
      this.onHover.bind(this)
      messages = MessageStore.getMessages()
   }

   componentDidMount() {
     MessageStore.addChangeListener(this.onHover)
   }

   componentWillUnmount() {
     MessageStore.removeChangeListener(this.onHover)
   }

	show(){
		// this.setState({hover: true, timer:null})
	}

	hide(){
		// this.setState({hover: false, timer:1000})
	}

   	render() {
      var messageBody
      if(this.state.hover)
      	messageBody = <MessageBody />
      else
      	messageBody = "" 
      return (
         <div className="message_container">
         	<div className="message_icon">
            	<i className="fa fa-envelope"></i>
            </div>
           	{messageBody}
         </div>
      	);
   	}
}

export default Message;