import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../modules/Header.jsx';
import ShowMessageArea from '../modules/ShowMessageArea.jsx'
import HeaderMenuStore from '../stores/HeaderActionStore';

class HomePage extends React.Component {
	
	constructor(props, context) {

	    super(props, context);
	    this.onChange = this.onChange.bind(this);
	}
	onChange(selectedMenu) {
		this.onChange.bind(this);
	}
	componentDidMount() {
	  HeaderMenuStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
	  HeaderMenuStore.removeChangeListener(this.onChange);
	}

	render() {

      return (
      	
	      	<div>
	      		<Header/>
	      		<ShowMessageArea/>
	      	</div>
      );
   }
}

export default HomePage;
