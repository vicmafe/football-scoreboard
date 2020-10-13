import React, { Component } from 'react';

class counter extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.score}</div>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}
 
export default counter;