import React from 'react'
import ReactDOM from 'react-dom'

export default class Education extends React.Component {
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
  render() {
     let styleObj = {
       "display": this.state.showChangeLink ? 'block' : 'none'
     }

    return (
      <div className="education card" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <div className="eduHead">
          Education
          <button className="addButton" style={styleObj}>Add education</button>
        </div>
        <div className="edu_list">
          <div>Institution Name</div>
          <div>Passout Year</div>
        </div>
      </div>
    );
    }
};
