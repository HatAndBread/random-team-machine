import React, { useRef } from 'react';
import styles from './SubmitButton.module.css';

export default function OpenText(props) {
  const files = useRef(null);
  const handleClick = () => {
    files.current.click();
  };
  const handleChange = (e) => {
    const file = files.current.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      console.log(reader.result);
      props.setDroppedText(reader.result);
      props.change(reader.result);
    };
    reader.readAsText(file);
  };
  return (
    <div>
      <input
        ref={files}
        type="file"
        accept=".txt"
        className={styles.button}
        onChange={handleChange}
        style={{ display: 'none' }}
      ></input>
      <button className={styles.button} onClick={handleClick}>
        <span role="img" aria-label="open">
          📂
        </span>
        Open from file
        <span role="img" aria-label="open">
          ✨
        </span>
      </button>
    </div>
  );
}
