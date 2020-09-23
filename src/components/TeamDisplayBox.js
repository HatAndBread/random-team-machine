import React from 'react';
import styles from './TeamDisplayBox.module.css';

export default function TeamDisplayBox(props) {
  const listItems = props.team.members.map((el, index) => {
    return <li key={`${index}`}>{el}</li>;
  });
  return (
    <div className={styles.teambox}>
      <div>
        <h2>{props.team.name}</h2>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
