import React from 'react';

export default class LoginPage extends React.Component {
 
  render() {
    return (  
        <form>  
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>Login Form</h4>
                            <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username" />
                            <br></br>
                            <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password" />
                            <br></br>
                            <div className="wrapper">
                                <span className="group-btn">     
                                    <button type="submit" className="btn btn-primary btn-md">login <i className="fa fa-sign-in"></i></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );    
  }

}