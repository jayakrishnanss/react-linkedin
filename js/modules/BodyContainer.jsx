import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../modules/login.jsx';
import Header from '../modules/Header.jsx';
import ContactWrapper from '../modules/contact.jsx';
import LoginError from '../modules/loginError.jsx';
import HeaderMenuStore from '../stores/HeaderActionStore';
import ContactStore from '../stores/contactStore';
import LoginStore from '../stores/LoginStores';
import MessageArea from '../modules/MessageArea.jsx';

class BodyContainer extends React.Component {

	constructor(props, context) {

	    super(props, context);
	    this.onChange = this.onChange.bind(this);
	    this.onLogin = this.onLogin.bind(this);
		this.onGetAllUser = this.onGetAllUser.bind(this);
	    this.state = {view: <Login/>};
	}
	onChange(selectedMenu) {
		this.onChange.bind(this);
	}
	onLogin(userObj) {
		this.onLogin.bind(this);
		if(userObj && userObj.length)
		{
			this.setState({view: <MessageArea/>, error: ''});
		} else {
			this.setState({view: <Login/>, error: <LoginError/>});

		}
	}
	onGetAllUser() {
		this.onGetAllUser.bind(this);
		this.setState({view: <ContactWrapper />});
	}
	componentDidMount() {
	  HeaderMenuStore.addChangeListener(this.onChange);
	  LoginStore.addChangeListener(this.onLogin);
	  ContactStore.addGetAllUserListener(this.onGetAllUser);
	}
	componentWillUnmount() {
	  HeaderMenuStore.removeChangeListener(this.onChange);
	  LoginStore.removeChangeListener(this.onLogin);
	  ContactStore.removeGetAllUserListenerr(this.onGetAllUser);
	}
	render() {
      return (
      	<div>
	      	{this.state.error}
	      	{this.state.view}
      	</div>
      );
   }
}

export default BodyContainer;
