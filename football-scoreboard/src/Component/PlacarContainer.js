import React, { Component } from 'react';
import MatchInfo from './MatchInfo';
import './Styles/PlacarContainer.css';
import Team from './Team';

class PlacarContainer extends Component {
  render() {
    const { partida: { estadio, cidade, data, horario }, round, homeTeam ,visitorTeam } = this.props;
    return (
      <div className="Placar">
        <h1 className="Championship">CAMPEONATO BRASILEIRO</h1>
        <div className="Match">
          <MatchInfo
            estadio={estadio} cidade={cidade}
            data={data} horario={horario} round={round}/>
        </div>
        <div className="Confrontation">
          <div className="TeamA">
            <Team nome={homeTeam.nome} />
          </div>
          <div>
            <h3 className="Versus">VS</h3>
          </div>
          <div className="TeamB">
            <Team nome={visitorTeam.nome}/>
          </div>
        </div>  
      </div>
    );
  }
}
 
export default PlacarContainer;
