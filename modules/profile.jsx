import React from 'react'
import ReactDOM from 'react-dom'

class Profile extends React.Component {
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
          </div>
        </div>
      </div>
    );
  }
};

class Skills extends React.Component {
    render() {
    return (
      <div className="skill card">
        <div className="skillHead">Skills</div>
        <div>
          <p className="skills">skill1</p>
          <p className="skills">skill2</p>
        </div>
      </div>
    );
    }
};

class Education extends React.Component {
    handlClick() {
      debugger;
    }
    render() {
    return (
      <div className="education card">
        <div className="eduHead" onClick={this.handlClick}>Education</div>
        <div className="edu_list">
          <div>Institution Name</div>
          <div>Passout Year</div>
        </div>
      </div>
    );
    }
};

export default class ProfileWrapper extends React.Component {
  render() {
    return(
      <div className= "container">
        <Profile/>
        <Skills/>
        <Education/>
      </div>
    );
  }
}
