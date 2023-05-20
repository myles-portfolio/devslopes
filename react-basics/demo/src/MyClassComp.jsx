import React from 'react';
import PropTypes from "prop-types";

class MyClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.names = ['Jim', 'Toby', 'Dwight', 'Pam'];
    this.state = {
      name: '',
      count: 0,
      stateName: this.props.propName,
    }
    //this.shuffle = this.shuffle.bind(this); Arrow functions are a cleaner way to do this; see below shuffle().
  }

  // Lifecycle Hooks
  popup() {
    alert('Hello World!');
  }

  shuffle = () => {
    const i = Math.floor(Math.random() * this.names.length);
    this.setState({
      name: this.names[i],
      stateName: this.names[i],
      count: this.state.count + 1,
    })
  }

  increment = () => this.setState({count: this.state.count + 1});

  render() {
    const { name, count, stateName } = this.state;
    const { anotherProp } = this.props;
    return (
      <div>
        <div>Hello, {name}👋</div>
        <div>{stateName}</div>
        <div>{anotherProp}</div>
        <h2>{count}</h2>
        <button onClick={this.shuffle}>Click Me</button>
        <button onClick={this.increment}>Count Up</button>
      </div>

    )
  }
}

MyClassComp.propTypes = {
  propName: PropTypes.any.isRequired,
  anotherProp: PropTypes.any.isRequired,
}

export default MyClassComp;