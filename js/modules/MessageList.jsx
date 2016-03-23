import React from 'react'
import ReactDOM from 'react-dom'
import AppActions from '../actions/AppActions';
import PostMessageStore from '../stores/PostMessageStores';

 class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    AppActions.getMessage();
    this.state = {messageList: []}
  }
  componentDidMount(){
    PostMessageStore.addLoadListener(this.onLoad);
  }
  componentWillUnmount() {
    PostMessageStore.removeLoadListener(this.onLoad);
  }
  onLoad(){
    let getMessage = PostMessageStore.getMessageList();
    this.setState({messageList: getMessage});
  }
  render() {
     let createmessageList = function(data, i) {
         return <div key={i}>
                    <div className="messageBox">
                        <div className="title"><strong>{data.title}</strong></div>
                        <div className="messageBody">{data.message}</div>
                        <div className="messageFooter">
                          <div className="username">Posted by <strong> username </strong></div>
                          <div className="time">Posted on <strong> {data.time}</strong></div>
                        </div>
                    </div>
                </div>
          };
    
     return <div  className="messageContainer">{this.state.messageList.map(createmessageList)}</div>;
   }
}
export default MessageList;