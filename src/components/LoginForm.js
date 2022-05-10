import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      UserName: "",
      PassWord: ""
    };
  }
handleUsername = (event) => {
  this.setState({
    UserName: event.target.value
  })
}
handlePassword = (event) =>{
  this.setState({
    PassWord: event.target.value
  })
}
handleSubmit = (e) => {
    e.preventDefault()

    if(!this.state.UserName || !this.state.PassWord) return 
    
    this.props.handleLogin(this.state)
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text"
            value={this.state.UserName}
            onChange={this.handleUsername}
            required />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.PassWord}
            onChange={this.handlePassword}
            required/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
