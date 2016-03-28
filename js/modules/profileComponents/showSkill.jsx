import React from 'react'
import ReactDOM from 'react-dom'

import ProfileStore from '../../stores/ProfileStore';
import AppActions from '../../actions/AppActions';

export default class ShowSkill extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this)
    AppActions.fetchProfile('items');
    this.state = {skillSet: []}
  }

  fetch(){
    this.fetch.bind(this)
    var userSkills = ProfileStore.getUser();
    this.setState({skillSet: userSkills});
  }

  componentDidMount() {
    ProfileStore.addFetchListener(this.fetch);
  }

  componentWillUnmount() {
    ProfileStore.removeFetchListener(this.fetch);
  }

  render() {
     var createSkill = function(skill) {
         return <div>{skill}</div>
     };
     return <div>{this.state.skillSet.map(createSkill)}</div>;
   }
}
