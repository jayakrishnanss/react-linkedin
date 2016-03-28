import React,{ PropTypes } from 'react'
import ReactDOM from 'react-dom'

class AllMessageAside extends React.Component{
	constructor(props, context) {
	    super(props, context)
	}
	render(){
		var asideBar = [], _messages = JSON.parse(sessionStorage.getItem("messages"))
		for(var i=0,j=_messages.length;i<j;i++){
			asideBar.push(
					<div className="aside_message">
						<div className="aside_profilepic">
							<img src="../../assets/images/ghost_person.png"/>
						</div>
						<div className="aside_content">
							<div className="aside_timestamp"></div>
							<div className="aside_head"></div>
							<div classNema="aside_body"></div>
						</div>
					</div>
				)
		}
		return(
			<aside className="side_bar">
				<div className="side_bar_head">
					<label>All Messages</label>
					<i className="fa fa-chevron-down"></i>
					<div className="send"><i className="fa fa-pencil-square-o"></i></div>
				</div>
				<div className="side_bar_body">
					{asideBar}
				</div>
			</aside>
		)
	}
}

AllMessageAside.propTypes = {
	msgId: PropTypes.string.isRequired
}

export default AllMessageAside