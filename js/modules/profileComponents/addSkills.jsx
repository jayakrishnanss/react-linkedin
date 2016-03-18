import React from 'react'
import ReactDOM from 'react-dom'

import ProfileStore from '../../stores/ProfileStore';
import AppActions from '../../actions/AppActions';
var test=[];
class ShowSkill extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
     let createSkill = function(skill) {
         return <div>{skill}</div>
     };
     return <div>{this.props.items.map(createSkill)}</div>;
   }
}

export default class AddSkill extends React.Component {

    constructor(props) {
      super(props);
      AppActions.fetchProfile('items');
      this.state = {text: '', skills: []};
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
      let userSkills = ProfileStore.getUser();
      this.setState({skills: userSkills});
    }
    onChange(e){
      this.setState({text: e.target.value});
    }
    handleSubmit(e){
      var nextItems = this.state.skills.concat([this.state.text]);
      var nextText = '';
      this.setState({skills: nextItems,  text: nextText});
    }
    render() {
      return(
        <div>
          <input type="text" onChange={this.onChange} value={this.state.text}/>
          <button onClick={this.handleSubmit}>Add</button>
          <ShowSkill items={this.state.skills}/>
        </div>
      )
    }
}
