import React,{ PropTypes } from 'react'
import MessageStore from '../stores/MessageStore.js'
import AppActions from '../actions/AppActions'
import { Link } from 'react-router'

var messages = []

class Message extends React.Component {  

	constructor(props,context){
		super(props,context)
    this.onHover = this.onHover.bind(this)
		this.state = {hover:false}
	}

  onHover(){
    this.onHover.bind(this)
    messages = MessageStore.getMessages()
    this.setState({messages: messages})
  }

  componentDidMount() {
    MessageStore.addHoverListener(this.onHover)
  }

  componentWillUnmount() {
    MessageStore.removeHoverListener(this.onHover)
  }

  showBody(){
    this.setState({hoverBody: true})
  }

  hideBody(){
    this.setState({hoverBody: false})
  }

	show(){
    AppActions.hover()
		this.setState({hover: true})
	}

	hide(){
      setTimeout(function(){
        this.setState({hover: false})
      }.bind(this),500)
	}

   render() {
      var messageBody=[],msgDiv=[]
      if(this.state.hover||this.state.hoverBody){
        if(this.state.messages){
          for(var i=0,j=this.state.messages.length;i<j;i++){
            msgDiv.push(<Link to={`/messages/${this.state.messages[i].id}`}>
                        <div className="message_row">
                          <div className="profilePic">
                            <img src="../../assets/images/ghost_person.png"/>
                          </div>
                          <div className="content">
                            <div className="head_time">
                              <div className="head">{this.state.messages[i].head}</div>
                              <div className="time">{this.state.messages[i].timestamp}</div>
                            </div>
                            <div className="message">
                              {this.state.messages[i].message}
                            </div>
                          </div>
                        </div>
                        </Link>)
          }
        }
        else{
          msgDiv.push(<div className="spinner"><img src="../../assets/images/rolling.gif"/></div>)
        }
      	messageBody = <div className="message_body" onMouseEnter={this.showBody.bind(this)} onMouseLeave={this.hideBody.bind(this)}>
                            <div className="message_head">
                              <span>Messages(0)</span>
                              <span className="caret_msg"><i className="fa fa-caret-right"></i></span>
                              <span className="edit"><i className="fa fa-pencil-square-o"></i></span>
                            </div>
                            <div className="message_nested_body">
                              <div>{msgDiv}</div>
                            </div>
                      </div>
      }
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