import React from 'react'
import ReactDOM from 'react-dom'

class AddSkill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className="addSKill">
        <input type="text"/>
      </form>
    );
  }
}


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
            <span className="editIcon" style={styleObj}><img src="/assets/images/edit.png"/></span>
          </div>
        </div>
      </div>
    );
  }
};

class Skills extends React.Component {
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
    addSkillToProfile(){
      debugger;
    }
  render() {
     let styleObj = {
       "display": this.state.showChangeLink ? 'block' : 'none'
     }
     let skill = {
       "display": this.state.showChangeLink ? 'inline-block' : 'none'
     }
    return (
        <div className="skill card" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <div className="skillHead">
            Skills
            <span className="addButton" style={skill} onClicke={this.addSkillToProfile}>Add skill</span>
          </div>
        <div className="skillList">
          <p className="skills">skill1</p>
          <span className="editIcon editSkill" style={styleObj}><img src="/assets/images/edit.png"/></span>
        </div>
      </div>
    );
    }
};
class Education extends React.Component {
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

    return (
      <div className="education card" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <div className="eduHead">
          Education
          <span className="addButton" style={styleObj}>Add education</span>
        </div>
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
