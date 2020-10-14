import React, { Component } from 'react';
import CounterGoal from './CounterGoal';

class Team extends Component {
  render() { 
    return (
      <div>
        <h1>{this.props.nome}</h1>
        {<CounterGoal />}
      </div>
    );
  }
}
 
export default Team;
