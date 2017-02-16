import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//This:
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

//and this:

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

//are equivalent. Use the latter in this app.

class AddressField extends React.Component {
  render() {
    return (
      <div>
        <form action={this.props.formAction}>
          {this.props.formLabel} <input type="text" name="fname"/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Be an Austin Biker</h2>
        </div>
        <p className="App-intro">
          Austin, Texas has many wonderful urban trails perfect for biking. Enter your current location below and we'll find the trail nearest you.
        </p>
        <AddressField formAction="#" formLabel="Address: " />
      </div>
    );
  }
}

export default App;
