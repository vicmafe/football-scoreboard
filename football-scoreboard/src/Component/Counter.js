import React, { Component } from 'react';

class counter extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    }
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickLess = this.handleClickLess.bind(this);
  }

  handleClickPlus() {
    this.setState({
      score: this.state.score + 1
    });
  }

  handleClickLess() {
    this.setState({
      score: this.state.score - 1
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.score}</div>
        <button onClick={this.handleClickPlus}>+</button>
        <button onClick={this.handleClickLess}>-</button>
      </div>
    );
  }
}
 
export default counter;