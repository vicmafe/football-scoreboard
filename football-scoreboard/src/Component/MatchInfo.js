import React, { Component } from 'react';
import './Styles/MatchInfo.css'

class MatchInfo extends Component {
  render() {
    const { round: { turno, rodada }, estadio, cidade, data, horario } = this.props;
    return (
      <div className="MatchDados">
        <h3>{`Rodada: ${rodada}`}</h3>
        <h3>{`Turno: ${turno}`}</h3>
        <h4>{estadio}</h4>
        <h4>{cidade}</h4>
        <h4>{data}</h4>
        <h4>{horario}</h4>
      </div>
    );
  }
}
 
export default MatchInfo;
