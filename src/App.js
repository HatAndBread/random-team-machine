import React, { useState } from 'react';
import Nav from './components/Nav';
import { TeamMembersInput } from './components/TeamMembersInput';
import TeamDisplayBox from './components/TeamDisplayBox';
import TeamBoxesScreen from './components/TeamBoxesScreen';
import RandomPeopleDisplay from './components/RandomPeopleDisplay';

import './App.css';

function App() {
  const [teams, setTeams] = useState([]);
  const [randomPeopleDisplay, setRandomPeopleDisplay] = useState(false);
  const [randomPerson, setRandomPerson] = useState(null);
  const [lastList, setLastList] = useState(null);
  const teamBoxes = [];
  for (let i = 0; i < teams.length; i++) {
    teamBoxes.push(<TeamDisplayBox key={i.toString()} team={teams[i]} />);
  }
  const goBack = () => {
    setTeams([]);
    setRandomPeopleDisplay(false);
  };
  return (
    <div className="App">
      <Nav />
      {teams.length === 0 && !randomPeopleDisplay && (
        <TeamMembersInput
          setTeams={setTeams}
          setRandomPeopleDisplay={setRandomPeopleDisplay}
          setRandomPerson={setRandomPerson}
          lastList={lastList}
          setLastList={setLastList}
        />
      )}
      {randomPeopleDisplay && (
        <RandomPeopleDisplay randomPerson={randomPerson} setRandomPerson={setRandomPerson} goBack={goBack} />
      )}
      {teams.length > 0 && !randomPeopleDisplay && (
        <div>
          <TeamBoxesScreen teamBoxes={teamBoxes} goBack={goBack} />
        </div>
      )}
    </div>
  );
}

export default App;
