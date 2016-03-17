import React from 'react';
import AppActions from './js/actions/AppActions';
import AppStores from './js/stores/AppStores';

var users = ['000000','no name'];
class App extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    this.onChange = this.onChange.bind(this);
	    this.state = {username: 'no name'};
	}
	onChange() {
		this.onChange.bind(this)
    	users = AppStores.getUser();
    	this.setState({username: 'Welcome, '+users[1]});
	}

	componentDidMount() {
	  AppStores.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
	  AppStores.removeChangeListener(this.onChange);
	}

	render() {

      return (
         <div>
          <button onClick={this.getInputValue}>Login</button>
          <h3 id="user-name">{this.state.username}</h3>
         </div>
      );
   }

   getInputValue() {
    AppActions.clickLogin('login');
  }
}

export default App;
