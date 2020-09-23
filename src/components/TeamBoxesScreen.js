import React from 'react';
import BackButton from './BackButton';
import styles from './TeamBoxesScreen.module.css';

export default function TeamBoxesScreen(props) {
  return (
    <div className={styles.teamBoxesScreen}>
      <div className={styles.boxes}>
        {props.teamBoxes}
        <BackButton handleClick={props.goBack} />
      </div>
    </div>
  );
}
