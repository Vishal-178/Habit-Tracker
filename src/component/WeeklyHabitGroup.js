import React from "react";
import WeeklyHabit from "./WeeklyHabit";

export default function WeeklyHabitGroup(props) {
  return (
    // this will render each day habit in group
    // this group all past 7 days by sending each day data in WeeklyHabit
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {props.weeklyDate.map((daily, index) => (
        <div style={{ display: "flex" }}>
          <WeeklyHabit
            dispatch={props.dispatch}
            daily={daily}
            index={props.index}
            key={index}
            weekIndex={index}
            cardIndex={props.index}
          />
        </div>
      ))}
    </div>
  );
}
