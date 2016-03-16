import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import ContactWrapper from './modules/contact.jsx';


var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(<ContactWrapper data={data} />, document.getElementById('app'));
