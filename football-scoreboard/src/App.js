import React from 'react';
import PlacarContainer from './Component/PlacarContainer';
import data from './Data'

function App() {
  const { match, homeTeam, visitorTeam, round } = data;
  return (
    <div>
      <PlacarContainer
        partida={match} homeTeam={homeTeam}
        visitorTeam={visitorTeam} round={round} />
    </div>
  );
}

export default App;
