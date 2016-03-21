import React from 'react';

export default class LoginError extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-offset-4 col-md-4">
					<div className="alert alert-danger">
						<strong>Error !</strong> Incorrect username or password.
					</div>
				</div>
			</div>
			);
	}
};