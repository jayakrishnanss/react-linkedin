import React from 'react'
import ReactDOM from 'react-dom'


import ProfileStore from '../../stores/ProfileStore';
import AppActions from '../../actions/AppActions';

export default class AddSkill extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        text: '',
        skills: []
      };

      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange(e){
      this.setState({text: e.target.value});
    }
    handleSubmit(e){
      var nextItems = this.state.skills.concat([this.state.text]);
      var nextText = '';
      this.setState({skills: nextItems,  text: nextText});
      AppActions.insertSkills(nextItems);
    }
    render() {
      return(
        <div>
          <div>
            <input type="text" id="tags" onChange={this.onChange} value={this.state.text}/>
            <button onClick={this.handleSubmit}>Add</button>
          </div>
          <div className="skillBox">
            <ul className="skillList">
              <li className="items">
                <span className="left">Video editing</span>
                <span className="right"><i className="fa fa-times"></i></span>
              </li>
            </ul>
            <div>
            <button>Save</button>
            <button>Cancel</button>
            </div>
          </div>
        </div>
      )
    }
}
