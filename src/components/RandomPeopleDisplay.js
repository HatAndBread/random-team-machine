import React from 'react';
import RandomPerson from './RandomPerson';
import { randomPersonGenerator } from './TeamMembersInput';
import styles from './RandomPersonDisplay.module.css';
import ranButtStyle from './RanButtStyle.module.css';
import BackButton from './BackButton';

export default function RandomPeopleDisplay(props) {
  const handleRandomPersonClick = () => {
    props.setRandomPerson(randomPersonGenerator());
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.randomPerson}>{props.randomPerson}</div>
      </div>
      <br></br>
      <div className={ranButtStyle.ranButt}>
        <RandomPerson handleClick={handleRandomPersonClick} />
      </div>
      <BackButton handleClick={props.goBack} />
    </div>
  );
}
