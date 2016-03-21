import React from 'react';
import LoginStore from '../stores/LoginStores';
import AppActions from '../actions/AppActions';

var loggedUser = [];
var login;
class Login extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    this.onChange = this.onChange.bind(this);
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
      this.onChange.bind(this);
      loggedUser = LoginStore.getLoggedUser();
    }

    componentDidMount() {
      LoginStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
      LoginStore.removeChangeListener(this.onChange);
    }

  	render() {
        login = {
             uname : this.state.username,
             pword : this.state.password
         };
        return (
            <div className="container">
                  <div className="row">
                      <div className="col-md-offset-5 col-md-3">
                          <div className="form-login">
                              <h4>Login Form</h4>
                              <input type="text" autofocus id="userName" className="form-control input-sm chat-input setHeight" placeholder="username" value={this.state.username} onChange={this.userNameChanged}/>
                              <input type="password" id="userPassword" className="form-control input-sm chat-input setHeight"
                              placeholder="password" value={this.state.password} onChange={this.passwordChanged}/>
                              <div className="wrapper">
                                  <span className="group-btn">
                                      <button onClick={this.login.bind(this,login)} disabled={this.buttonDisabled()}
                                      className="btn btn-primary btn-md">Login<i className="fa fa-sign-in"></i></button>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        );
     }

   login(data) {
    AppActions.login(data);
  }
}

export default Login;
