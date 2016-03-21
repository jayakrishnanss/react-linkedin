import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../modules/Header.jsx';
import BodyContainer from '../modules/BodyContainer.jsx';

class HomePage extends React.Component {
	
	constructor(props, context) {
	    super(props, context);
	    this.onChange = this.onChange.bind(this);
	}
	onChange(selectedMenu) {
		this.onChange.bind(this);
	}

	render() {
      return (
      	<div>
      		<Header/>
      		<BodyContainer/>
      	</div>
      );
   }
}

export default HomePage;
