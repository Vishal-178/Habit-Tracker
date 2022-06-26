import React from "react";
import WeaklyMarkDetail from "./WeaklyMarkDetail";
import WeeklyHabitGroup from "./WeeklyHabitGroup";
import WeeklyHead from "./WeeklyHead";

export default function CaredDetail(props) {
  //  after clicking on ony habit card this is rendered
  return (
    <div>
      {/* this WeeklyHead is the heading which contain back current date */}
      <WeeklyHead
        dispatch={props.dispatch}
        habit={props.habit}
        index={props.index}
      />
      {/* WeeklyHabitGroup is rendered which groups all the habit weekly card */}

      <WeeklyHabitGroup
        weeklyDate={props.habit[props.index].weeklyDate}
        index={props.index}
        dispatch={props.dispatch}
      />

      {/* its shows the color meaning  */}
      <WeaklyMarkDetail />
    </div>
  );
}
