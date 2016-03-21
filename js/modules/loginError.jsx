import React from 'react';

export default class LoginError extends React.Component {
	render() {
		return (
			<div className="alert alert-danger">
			 <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
			<strong>Error !</strong> Incorrect username or password.
			</div>
			);
	}
};