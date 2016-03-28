import React from 'react'
import ReactDOM from 'react-dom'
import Profile from '../profileComponents/profileHeader.jsx'
import Skills from '../profileComponents/skills.jsx'
import Education from '../profileComponents/education.jsx'

export default class ProfileWrapper extends React.Component {
  render() {
    return(
      <div className= "mainContainer">
        <Profile/>
        <Skills/>
        <Education/>
      </div>
    );
  }
}
