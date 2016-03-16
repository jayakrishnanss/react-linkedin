import React from 'react';
import AppStores from '../stores/AppStores';
import AppActions from '../actions/AppActions';
class Login extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    
	    this.state = {username: null, password: null};
	    this.userNameChanged = this.userNameChanged.bind(this);
    	this.passwordChanged = this.passwordChanged.bind(this);
	}
	userNameChanged(event) {
	    let username = event.target.value;
	      this.setState({
	        username
	    });
  	}
  	passwordChanged(event) {
	    let password = event.target.value;
	      this.setState({
	        password
	    });
  	}
  	buttonDisabled() {
  		return (this.state.username === null || this.state.username === '') ||
  		 (this.state.password === null || this.state.password === '');
	}
	onChange() {
		this.onChange.bind(this)	
	}

	componentDidMount() {
	  AppStores.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
	  AppStores.removeChangeListener(this.onChange);
	}

	render() {

      return (
          <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>Login Form</h4>
                            <input type="text" id="userName"  
                            className="form-control input-sm chat-input setHeight" placeholder="username" value={this.state.username}
                            onChange={this.userNameChanged}/>
                            <input type="password" id="userPassword" className="form-control input-sm chat-input setHeight" 
                            placeholder="password" value={this.state.password} onChange={this.passwordChanged}/>
                            <div className="wrapper">
                                <span className="group-btn">     
                                    <button onClick={this.login} disabled={this.buttonDisabled()} className="btn btn-primary btn-md">Login <i className="fa fa-sign-in"></i></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      );
   }

   login() {
    console.log('inside login action')
  }
}

export default Login;