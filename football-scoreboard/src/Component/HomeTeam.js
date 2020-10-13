import React, { Component } from 'react';
import Counter from './Counter';

class HomeTeam extends Component {
  render() { 
    return (
      <div>
        <h1>Gremio</h1>
        {<Counter />}
      </div>
    );
  }
}
 
export default HomeTeam;
