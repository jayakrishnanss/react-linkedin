import React from 'react'
import ReactDOM from 'react-dom'

export default class Skills extends React.Component {
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
