import React from 'react';
import PropTypes from "prop-types";

class MyClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.names = ['Jim', 'Toby', 'Dwight', 'Pam'];
    this.state = {
      name: '',
      count: 0,
      date: new Date(),
      stateName: this.props.propName,
    }
    //this.shuffle = this.shuffle.bind(this); Arrow functions are a cleaner way to do this; see below shuffle().
  }

  // Lifecycle Method
  componentDidMount() {
    // this.timerId = setInterval(() => this.tick(), 1000);
    // so API call => result
    // this.setState({ data: result });
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick = () => this.setState({ date: new Date() });

  shuffle = () => {
    const i = Math.floor(Math.random() * this.names.length);
    this.setState({
      name: this.names[i],
      stateName: this.names[i],
      count: this.state.count + 1,
    })
  }

  render() {
    const { name, date } = this.state;
    return (
      <div>
        <h2>Hello, {name}👋</h2>
        <h2>It is {date.toLocaleTimeString()}</h2>
        <button onClick={this.shuffle}>Click Me</button>
      </div>
    )
  }
}

MyClassComp.propTypes = {
  propName: PropTypes.any.isRequired,
  anotherProp: PropTypes.any.isRequired,
}

export default MyClassComp;