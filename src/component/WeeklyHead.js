import "../css/weeklyHead.css";
import React from "react";
import { viewCardDetailOff } from "../actioin";

export default function WeeklyHead(props) {
  console.log(props);
  const habitTracker = () => {
    props.dispatch(viewCardDetailOff());
  };
  //  this is the heading of the habit card detail when click on any habit card on the main/Home page
  // new page arrive where the heading is render by this
  // in the heading Home button is present and current date is present
  return (
    <div className="weeklyHead">
      <div className="WeeklyHeadContainer">
        {/* back home button */}
        <div className="weeklyHeadBox hand" onClick={habitTracker}>
          <span>Home</span>
        </div>
        {/* title of open card for weekly detail */}
        <div className="weeklyHeadBox">
          <span>{props.habit[props.index].habit}</span>
        </div>
        {/* current day date */}
        <div className="weeklyHeadBox">
          <span>{props.habit[props.index].date}</span>
        </div>
      </div>
    </div>
  );
}
