import React, { Component } from 'react';
import './Styles/MatchInfo.css'

class HomeTeam extends Component {
  render() { 
    return (
      <div className="MatchDados">
        <h3>Rodada - Turno</h3>
        <h4>Nome do estádio</h4>
        <h4>Cidade - Estado</h4>
        <h4>Data - Horário</h4>
      </div>
    );
  }
}
 
export default HomeTeam;
