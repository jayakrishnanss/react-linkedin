import React from 'react'
import ReactDOM from 'react-dom'

import ProfileStore from '../../stores/ProfileStore';
import AppActions from '../../actions/AppActions';

export default class ShowSkill extends React.Component {
  constructor(props) {
    super(props);
    AppActions.fetchProfile('items');
    this.state = {skillSet: []}
  }
  componentWillMount(){
    let userSkills = ProfileStore.getUser();
    this.setState({skillSet: userSkills});
  }
  render() {
     let createSkill = function(skill) {
         return <div>{skill}</div>
     };
     return <div>{this.state.skillSet.map(createSkill)}</div>;
   }
}
