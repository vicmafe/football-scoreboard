import React, { Component } from 'react';
import CounterGoal from './CounterGoal';

class VisitorTeam extends Component {
  render() { 
    return (
      <div>
        <h1>Visitor Team</h1>
        {<CounterGoal />}
      </div>
    );
  }
}
 
export default VisitorTeam;
