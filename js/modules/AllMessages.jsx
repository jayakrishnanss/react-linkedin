import React,{ PropTypes } from 'react'
import ReactDOM from 'react-dom'
import AllMessageAside from './AllMessageAside.jsx'
import AllMessagePresenter from './AllMessagePresenter.jsx'

class AllMessages extends React.Component{
	constructor(props, context) {
	    super(props, context)
	}

	render(){
		return(
			<div className="message_detailed">
				<AllMessageAside msgId={this.props.params.messageId}/>
				<AllMessagePresenter msgId={this.props.params.messageId}/>
			</div>
		)
	}
}

AllMessages.propTypes = {
	 params: PropTypes.shape({
	 	messageId:PropTypes.string.isRequired
	 }).isRequired
}

export default AllMessages