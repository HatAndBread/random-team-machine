import React from 'react';
import styles from './SubmitButton.module.css';

export default function RandomPerson(props) {
  const handleClick = () => {
    props.handleClick();
  };
  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        <span role="img" aria-label="random">
          🙋‍♂️
        </span>
        GET RANDOM PERSON
        <span role="img" aria-label="random">
          🙋‍♀️
        </span>
      </button>
    </div>
  );
}
