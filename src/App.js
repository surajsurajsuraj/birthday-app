import React from "react";
import Birthdays from "./personDetails";

//css
import "./App.css";

const noOfPersons = Birthdays.length;

const BirthdayTag = (props) => {
  const { name, age } = props.birthday;
  return (
    <div>
      <p>{name}</p>
      <p>{age} years</p>
    </div>
  );
};

const BirthdayList = () => {
  return (
    <section className="BirthdayList">
      {Birthdays.map((birthday) => {
        return <BirthdayTag birthday={birthday} />;
      })}
    </section>
  );
};

const Main = () => {
  return (
    <div className="main">
      <p>{noOfPersons} birthday today</p>
      <BirthdayList />
    </div>
  );
};

export default Main;
