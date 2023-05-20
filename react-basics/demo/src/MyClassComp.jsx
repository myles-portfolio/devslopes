import React from 'react';

class MyClassComp extends React.Component {
  constructor() {
    super();
    this.name = 'Dude';
    // Init State
  }

  // Lifecycle Hooks
  popup() {
    alert('Hello World!');
  }

  render() {
    const word = 'cool';
    return (
      <div>
        <div>Sup {this.name}! You are {word}!</div>
        <button onClick={this.popup}>Click Me</button>
      </div>

    )
  }
}

export default MyClassComp;