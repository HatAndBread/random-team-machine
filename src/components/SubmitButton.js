import React from 'react';
import styles from './SubmitButton.module.css';

export default function SubmitButton(props) {
  const handleClick = () => {
    props.handleClick();
  };
  return (
    <div>
      <button onClick={handleClick} className={styles.button}>
        {props.text}
      </button>
    </div>
  );
}
