import React from 'react';

class Header extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    this.onChange = this.onChange.bind(this);
	}
	onChange() {
		this.onChange.bind(this);
	}
   	render() {
      return (
        <div >
        	<div id="header">
	            <a id="test_logo" href="/">
	                <img src="/assets/images/Linkedin-icon.png" 
	                alt="APIO logo" width="36" height="36" />
	            </a>
            </div>
            <div id="header-sub"></div>
        </div>
      );
   	}
}

export default Header;