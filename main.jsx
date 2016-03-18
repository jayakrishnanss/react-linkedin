import React from 'react';
import ReactDOM from 'react-dom';
import ProfileWrapper from './js/modules/profileComponents/profile.jsx';
import Home from './js/modules/HomePage.jsx';


ReactDOM.render(<ProfileWrapper />, document.getElementById('profile'))

ReactDOM.render(<Home />, document.getElementById('app'))
