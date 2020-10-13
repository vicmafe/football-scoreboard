import React, { Component } from 'react';
import Counter from './Counter';

class VisitorTeam extends Component {
  render() { 
    return (
      <div>
        <h1>Flamerda</h1>
        {<Counter />}
      </div>
    );
  }
}
 
export default VisitorTeam;
