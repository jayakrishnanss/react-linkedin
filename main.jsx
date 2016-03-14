import React from 'react';
import ReactDOM from 'react-dom';

import {Profile, Skills, Education} from './modules/profile.jsx';


ReactDOM.render(<Profile />, document.getElementById('profile'))
ReactDOM.render(<Skills />, document.getElementById('skills'))
ReactDOM.render(<Education />, document.getElementById('edu'))
