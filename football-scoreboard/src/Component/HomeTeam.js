import React, { Component } from 'react';
import CounterGoal from './CounterGoal';

class HomeTeam extends Component {
  render() { 
    return (
      <div>
        <h1>Home Team</h1>
        {<CounterGoal />}
      </div>
    );
  }
}
 
export default HomeTeam;
