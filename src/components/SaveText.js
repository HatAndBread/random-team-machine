import React from 'react';
import styles from './SubmitButton.module.css';
import { saveAs } from 'file-saver';

export default function OpenText(props) {
  const handleClick = () => {
    const blob = new Blob([props.text.join()], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${props.text[0]}.txt`);
  };
  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        <span role="img" aria-label="save">
          💾
        </span>
        Save this group
        <span role="img" aria-label="save">
          ✨
        </span>
      </button>
    </div>
  );
}
