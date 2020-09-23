import React from 'react';
import styles from './NumberSelect.module.css';

export default function NumberSelect(props) {
  for (let i = 0; i < props.options.length; i++) {
    props.options[i] = i + 1;
  }
  let options = props.options.map((num) => {
    return (
      <option key={num.toString()} value={num}>
        {num}
      </option>
    );
  });
  const handleChange = (e) => {
    props.setMembersPerTeam(e.target.value);
  };
  return (
    <div>
      <label htmlFor="member-num" className={styles.label}>
        Minimum members per team:
      </label>
      <select name="member-num" onChange={handleChange} value={props.membersPerTeam}>
        {options}
      </select>
    </div>
  );
}
