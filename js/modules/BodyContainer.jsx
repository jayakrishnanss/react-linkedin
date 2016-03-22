import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../modules/login.jsx';
import LoginError from '../modules/loginError.jsx';
import HeaderMenuStore from '../stores/HeaderActionStore';
import LoginStore from '../stores/LoginStores';
import ProfileWrapper from '../modules/profileComponents/profile.jsx'
import MessageArea from '../modules/MessageArea.jsx';


class BodyContainer extends React.Component {

	constructor(props, context) {

	    super(props, context);
	    this.onChange = this.onChange.bind(this);
	    this.onLogin = this.onLogin.bind(this);
	    this.state = {view: <Login/>, error: ''};
	}
	onChange(selectedMenu) {
		this.onChange.bind(this);
		if (selectedMenu == 'Profile') {
			this.setState({view: <ProfileWrapper/>});
		}
		if (selectedMenu == 'Home') {
			this.setState({view: <MessageArea/>});
		}
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
      	<div>
	      	{this.state.error}
	      	{this.state.view}
      	</div>

      );
   }
}

export default BodyContainer;
