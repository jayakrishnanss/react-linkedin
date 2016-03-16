import React from 'react';
import Message from './modules/message.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
            Hi, Header
            <Message />
         </div>
      );
   }
}

export default App;