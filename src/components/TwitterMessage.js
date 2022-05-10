import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        Character: ""
    };
  }
maxChars = (event) => {
  this.setState({
    Character: event.target.value
  })
}
  render() {
    let CharNum = this.props.maxChars - this.state.Character.length;
    return (
      <div>
        <strong>Your message:{CharNum}</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.Character} 
        onChange={this.maxChars} />
      </div>
    );
  }
}

export default TwitterMessage;
