import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../modules/login.jsx';
import Header from '../modules/Header.jsx';
import HeaderMenuStore from '../stores/HeaderActionStore';
import LoginStore from '../stores/LoginStores';

class BodyContainer extends React.Component {
	
	constructor(props, context) {

	    super(props, context);
	    this.onChange = this.onChange.bind(this);
	    this.onLogin = this.onLogin.bind(this);
	    this.state = {view: <Login/>};
	}
	onChange(selectedMenu) {
		this.onChange.bind(this);
		
	}
	onLogin(userObj) {
		this.onLogin.bind(this);
		if(userObj && userObj.length)
		{
			this.setState({view: <Header/>});
		}
	}
	componentDidMount() {
	  HeaderMenuStore.addChangeListener(this.onChange);
	  LoginStore.addChangeListener(this.onLogin);
	}

	componentWillUnmount() {
	  HeaderMenuStore.removeChangeListener(this.onChange);
	  LoginStore.removeChangeListener(this.onLogin);
	}

	render() {

      return (
      	<div>{this.state.view}</div>
         
      );
   }
}

export default BodyContainer;