import React, { Component } from 'react';
import './Styles/CounterGoal.css';

class CounterGoal extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    }
    this.handleClickGol = this.handleClickGol.bind(this);
  }

  handleClickGol() {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    const { score } = this.state;
    const { handleClickGol } = this;
    return (
      <div>
        <div className="Gols">{score}</div>
        <button onClick={handleClickGol}>GOL</button>
      </div>
    );
  }
}

export default CounterGoal;
