import React from 'react'
import ReactDOM from 'react-dom'


export default class AddSkill extends React.Component {

    constructor(props) {
      super(props);
      this.state = {items: [], text: ''};
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange(e){
      this.setState({text: e.target.value});
    }
    handleSubmit(e){

      let nextItems = this.state.items.concat([this.state.text]);
      let nextText = '';
      this.setState({items: nextItems,  text: nextText})
    }
    render() {
      return(
        <div>
          <input type="text" onChange={this.onChange} value={this.state.text}/>
          <button onClick={this.handleSubmit}>Add</button>
        </div>
      )
    }
}
