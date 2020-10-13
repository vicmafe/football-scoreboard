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
    if (this.state.score >= 1) {
      this.setState({
        score: this.state.score - 1
      });
    }
  }

  render() {
    const { score } = this.state;
    const { handleClickPlus, handleClickLess } = this;
    return (
      <div>
        <div>{score}</div>
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickLess}>-</button>
      </div>
    );
  }
}

export default counter;
