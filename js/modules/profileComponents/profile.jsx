import React from 'react'
import ReactDOM from 'react-dom'

import Profile from '../profileComponents/profileHeader.jsx'
import Skills from '../profileComponents/skills.jsx'
import Education from '../profileComponents/education.jsx'

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
