import React, { useState, useEffect } from 'react';
import SubmitButton from './SubmitButton';
import NumberSelect from './NumberSelect';
import OpenText from './OpenText';
import SaveText from './SaveText';
import randumb from 'no-duplicates';
import RandomPerson from './RandomPerson';
import getTeamNames from './TeamNames';
import styles from './TeamMembersInput.module.css';

export let randomPersonGenerator;

export function TeamMembersInput(props) {
  const [groupArr, setGroupArr] = useState([]);
  const [droppedText, setDroppedText] = useState(null);
  const handleChange = (e) => {
    const reg = /\n|,/;
    let val;
    e.target ? (val = e.target.value.split(reg)) : (val = e.split(reg));
    for (let i = 0; i < val.length; i++) {
      val[i] = val[i].trim();
    }
    const noEmpties = val.filter((value) => {
      return value !== '';
    });
    setGroupArr(noEmpties);
    randomPersonGenerator = randumb(noEmpties);
  };
  const makeGroups = (arr) => {
    let teams = [];
    const randomize = randumb(arr);
    const randomizedGroup = randomize(true);
    let modulo = groupArr.length % props.membersPerTeam;
    for (let i = 0; i < Math.floor(groupArr.length / props.membersPerTeam); i++) {
      let members = randomizedGroup.splice(0, props.membersPerTeam);
      if (modulo > 0) {
        members.push(randomizedGroup.splice(0, 1)[0]);
        modulo -= 1;
      }
      const team = { name: getTeamNames(), members: members };
      teams.push(team);
    }
    props.setTeams(teams);
  };

  const useComponentDidMount = (func) => useEffect(func, []); // trigger only once. Not doing this directly tricks esList!
  useComponentDidMount(function () {
    if (props.lastList) {
      setGroupArr(props.lastList);
    }
  });

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = [...e.dataTransfer.files];
    const reader = new FileReader();
    reader.onload = function (e) {
      setDroppedText(reader.result);
      handleChange(reader.result);
    };
    reader.readAsText(file[0]);
  };
  const handleClick = () => {
    if (groupArr.length < 2) {
      alert('Please enter at least two names before creating teams✨❤️');
    } else {
      makeGroups(groupArr);
      props.setLastList(groupArr);
    }
  };
  const handleRandomPersonClick = () => {
    if (groupArr.length > 1) {
      props.setLastList(groupArr);
      props.setRandomPeopleDisplay(true);
      props.setRandomPerson(randomPersonGenerator());
    } else {
      alert('Please enter at least two names before selecting random people✨❤️');
    }
  };
  const getNum = (num) => {
    if (num / 2 > 0) {
      return Math.floor(num / 2);
    } else {
      return 1;
    }
  };

  return (
    <div className={styles.mainInput}>
      <div className={styles.topPart}>
        <div className={styles.leftPart}>
          {droppedText && (
            <textarea
              className={styles.input}
              placeholder="Separate the names of the people you want to split into teams by commas or on separate lines. You can also drag and drop a plain text file formatted in the same way."
              onChange={handleChange}
              onDrop={handleDrop}
              defaultValue={droppedText}
            ></textarea>
          )}
          {props.lastList && !droppedText && (
            <textarea
              className={styles.input}
              placeholder="Separate the names of the people you want to split into teams by commas or on separate lines. You can also drag and drop a plain text file formatted in the same way."
              onChange={handleChange}
              onDrop={handleDrop}
              defaultValue={groupArr}
            ></textarea>
          )}
          {!droppedText && !props.lastList && (
            <textarea
              className={styles.input}
              placeholder="Separate the names of the people you want to split into teams by commas or on separate lines. You can also drag and drop a plain text file formatted in the same way."
              onChange={handleChange}
              onDrop={handleDrop}
            ></textarea>
          )}
        </div>
        <div className={styles.rightPart}>
          <p>
            Welcome to the Random Team Machine! The goal of the Random Team Machine is to make the process of splitting
            groups of people into teams easy and painless
            <span role="img" aria-label="!">
              ❣️
            </span>
            <br></br>
            To begin, enter the names of the people you would like to split into teams in the textfield to the left.
            <span role="img" aria-label="arrow">
              👈
            </span>
          </p>
          <OpenText setDroppedText={setDroppedText} change={handleChange} />
          <SaveText text={groupArr} />
          <RandomPerson handleClick={handleRandomPersonClick} />
          <SubmitButton text="✨MAKE RANDOM TEAMS✨" handleClick={handleClick} />
          <NumberSelect
            options={new Array(getNum(groupArr.length))}
            membersPerTeam={props.membersPerTeam}
            setMembersPerTeam={props.setMembersPerTeam}
          />
        </div>
      </div>
    </div>
  );
}
