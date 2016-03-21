import React from 'react'
import ReactDOM from 'react-dom'

export default class Profile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          showChangeLink: false
      };

      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOut = this.mouseOut.bind(this);
  }
  mouseOver(){
    this.setState({ showChangeLink: true })
  }
  mouseOut() {
    this.setState({ showChangeLink: false })
  }
  render() {
     let styleObj = {
       "display": this.state.showChangeLink ? 'block' : 'none'
     }

    return(
      <div className="profile_header card" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <div className="pro_pic">
          <img src="../assets/images/runner.png" width="150" height="150"/>
          <span className="changeProfile" style={styleObj}>Change your picture</span>
        </div>
        <div className="nameWrapper">
          <div className="name">
            Name
          </div>
          <div className="name">
            Designation
            <span className="editIcon" style={styleObj}><img src="/assets/images/edit.png"/></span>
          </div>
        </div>
      </div>
    );
  }
};
