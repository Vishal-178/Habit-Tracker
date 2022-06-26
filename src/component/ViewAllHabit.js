import React from "react";
import WeaklyMarkDetail from "./WeaklyMarkDetail";
import WeeklyHabitGroup from "./WeeklyHabitGroup";

export default function ViewAllHabit(props) {
  // render all day using weeklyHabitGroup
  //  send each habit in weeklyHabitGroup to render the weekly data
  return (
    <div>
      {props.habitList.map((habit, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "50px",
          }}
        >
          <h3>{habit.habit}</h3>
          <WeeklyHabitGroup
            weeklyDate={habit.weeklyDate}
            index={index}
            dispatch={props.dispatch}
          />
        </div>
      ))}
      <WeaklyMarkDetail />
    </div>
  );
}
