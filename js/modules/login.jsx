import React from 'react';

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
                            className="form-control input-sm chat-input" placeholder="username" value={this.state.username}
                            onChange={this.userNameChanged}/>
                            <br></br>
                            <input type="text" id="userPassword" className="form-control input-sm chat-input" 
                            placeholder="password" value={this.state.password} onChange={this.passwordChanged}/>
                            <br></br>
                            <div className="wrapper">
                                <span className="group-btn">     
                                    <button onClick={this.getInputValue} disabled={this.buttonDisabled()} className="btn btn-primary btn-md">Login <i className="fa fa-sign-in"></i></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      );
   }

   getInputValue() {
    console.log('Login Clicked')
  }
}

export default Login;