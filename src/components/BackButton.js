import React from 'react';
import styles from './BackButton.module.css';

export default function BackButton(props) {
  return (
    <div style={{ width: '100vw' }}>
      <button onClick={props.handleClick} className={styles.button}>
        ⏮GO BACK
      </button>
    </div>
  );
}
