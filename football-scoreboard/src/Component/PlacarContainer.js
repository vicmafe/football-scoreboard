import React, { Component } from 'react';
import HomeTeam from './HomeTeam';
import VisitorTeam from './VisitorTeam';
import MatchInfo from './MatchInfo';
import './Styles/PlacarContainer.css';

class PlacarContainer extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <div>
          <HomeTeam />
        </div>
        <div>
          <h3>VS</h3>
        </div>
        <div>
          <VisitorTeam />
        </div>
        <div>
          <MatchInfo />
        </div>
      </div>
    );
  }
}
 
export default PlacarContainer;
