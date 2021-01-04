import React, { useState } from "react";
import personDetails from "./personDetails";

//css
import "./App.css";

const BirthdayTag = (props) => {
  const { src, name, age } = props.birthday;
  return (
    <div className="birthday">
      <img className="image" src={src} alt="people  " />
      <p className="name">{name}</p>
      <p className="age">{age} years</p>
    </div>
  );
};

const BirthdayList = () => {
  const [Birthdays, setBirthdays] = useState(personDetails);
  const [totalBirthdays, setTotalBirthdays] = useState(Birthdays.length);
  const clearBirthdayList = () => {
    setBirthdays([]);
    setTotalBirthdays(0);
  };

  const ClearAll = () => (
    <button className="btn" onClick={clearBirthdayList}>
      Clear All
    </button>
  );
  return (
    <section className="BirthdayList">
      <p>{totalBirthdays} birthday today</p>
      {Birthdays.map((birthday) => (
        <BirthdayTag key={birthday.id} birthday={birthday} />
      ))}
      <ClearAll />
    </section>
  );
};

const Main = () => (
  <div className="main">
    <BirthdayList />
  </div>
);

export default Main;
