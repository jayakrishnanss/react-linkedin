import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../modules/Header.jsx';
import ShowMessageArea from '../modules/ShowMessageArea.jsx'
class HomePage extends React.Component {

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
