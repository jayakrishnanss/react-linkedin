import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../modules/Header.jsx';
import MessageArea from '../modules/MessageArea.jsx'
class HomePage extends React.Component {

	render() {

      return (
      	
	      	<div>
	      		<Header/>
	      		<MessageArea/>
	      	</div>
      );
   }
}

export default HomePage;
