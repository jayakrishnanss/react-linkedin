import React from 'react'
import ReactDOM from 'react-dom'

export class Profile extends React.Component {
   render() {
    return(
      <div className="profile_header">
        <div className="pro_pic">
          <img src="../assets/images/runner.png" width="100" height="100"/>
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

export class Skills extends React.Component {
render() {
return (
  <div className="skill">
    <div className="skillHead">Skills</div>
    <div>
      <p className="skills">skill1</p>
      <p className="skills">skill2</p>
    </div>
  </div>
);
}
};

export class Education extends React.Component {
render() {
return (
  <div className="education">
    <div className="eduHead">Education</div>
    <div className="edu_list">
      <div>Institution Name</div>
      <div>Passout Year</div>
    </div>
  </div>
);
}
};
