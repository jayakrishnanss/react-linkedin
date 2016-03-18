import React from 'react'
import ReactDOM from 'react-dom'

import AddSKill from '../profileComponents/addSkills.jsx'

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChangeLink: false,
            showAddSkill: false
        };
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.addSkillToProfile = this.addSkillToProfile.bind(this);
    }

    mouseOver(){
      this.setState({ showChangeLink: true })
    }
    mouseOut() {
      this.setState({ showChangeLink: false })
    }
    addSkillToProfile(){
      this.setState({ showAddSkill: true })
    }
  render() {
     let styleObj = {
       "display": this.state.showChangeLink ? 'block' : 'none'
     }
     let skill = {
       "display": this.state.showChangeLink ? 'inline-block' : 'none'
     }
     let add = {
       "display": this.state.showAddSkill ? 'block' : 'none'
     }
    return (
        <div className="skill card" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <div className="skillHead">
            Skills
            <button className="addButton" style={skill} onClick={this.addSkillToProfile}>Add skill</button>
          </div>
        <div className="skillAdd" style={add}>
          <AddSKill/>
        </div>
      </div>
    );
    }
};
