import React from 'react'
import ReactDOM from 'react-dom';
import MessageArea from '../modules/MessageArea.jsx'

export default class ShowMessageArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessageArea: false
        };
        this.show = this.show.bind(this);
    }
    show(){
      this.setState({ showMessageArea: true })
    }
    hide(){
      this.setState({ showMessageArea: false })
    }
    render() {
        let show = {
            "display": this.state.showMessageArea ? 'block' : 'none'
        }
        return (
            <div>
                <button className="btn btn-info" onClick={this.show}>Post Something</button>
                <div className="showMsgArea" style={show}>
                   <MessageArea />
                </div>
            </div>
        );
    }
};