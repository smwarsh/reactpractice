import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    
    if(!this.state.firstName || !this.state.lastName) { // Make sure user has filled out both first and last name
      alert('Fill out your first and last name please!');
    } else if(this.state.password.length < 6) { // Make sure password is at least 6 characters long
      alert(`Choose a more secure password, ${this.state.firstName} ${this.state.lastName}`);
    } else if(this.state.password.substring(15)) { // Make sure password is not longer than 15 characters long
      alert('Your password may not be longer than 15 characters');
    } else { // Everything is ok!
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      // Clear the input for password too
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      this.setState({ // Reset fields to be blank after successful submission
        firstName: "",
        lastName: "",
        password: ""
      });
    }


  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
