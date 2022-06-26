import React, { useState } from "react";
import { changeWeekStatusAction } from "../actioin";

export default function WeeklyHabit(props) {
  // this status is used to open and close the menu
  const [menu, setMenu] = useState(false);
  //   complete notComplete notSet function to change the status of each day of week
  const complete = () => {
    const temp = {
      status: "complete",
      weekIndex: props.weekIndex,
      cardIndex: props.cardIndex,
    };
    props.dispatch(changeWeekStatusAction(temp));
    setMenu(false);
  };
  const notComplete = () => {
    const temp = {
      status: "notComplete",
      weekIndex: props.weekIndex,
      cardIndex: props.cardIndex,
    };
    props.dispatch(changeWeekStatusAction(temp));
    setMenu(false);
  };
  const notSet = () => {
    const temp = {
      status: "notSet",
      weekIndex: props.weekIndex,
      cardIndex: props.cardIndex,
    };
    props.dispatch(changeWeekStatusAction(temp));
    setMenu(false);
  };
  const openMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  //   change color based on status when status is changed from the menu
  const colorChange = (status) => {
    let backgroundColor = "white";
    if (status === "complete") {
      backgroundColor = "aqua";
    } else if (status === "notComplete") {
      backgroundColor = "red";
    }
    return {
      backgroundColor: backgroundColor,
    };
  };
  // single week daily container it contain the status and date of each past 7 day
  // we can also change the each day status
  return (
    <div>
      <div className="weeklyHabitContainer">
        <div>
          {/* display date */}
          <div className="weeklyHabitBox">{props.daily.date}</div>
          <div className="weeklyHabitBox">
            {/* color symbol */}
            <div>
              <span
                className="habitCardStatus hand"
                style={colorChange(props.daily.status)}
                onClick={openMenu}
              ></span>
              {/* menu on each weekly status to change the status of the single day of past 7 day */}
            </div>
            {menu ? (
              <ul className="item weeklyHabitDropDown">
                <li>
                  <span className="dropdown-item hand" onClick={complete}>
                    <span
                      className="habitCardStatus hand"
                      style={colorChange("complete")}
                      onClick={openMenu}
                    ></span>
                    Complete
                  </span>
                </li>
                <li>
                  <span className="dropdown-item hand" onClick={notComplete}>
                    <span
                      className="habitCardStatus hand"
                      style={colorChange("notComplete")}
                      onClick={openMenu}
                    ></span>
                    Not Complete
                  </span>
                </li>
                <li>
                  <span className="dropdown-item hand" onClick={notSet}>
                    <span
                      className="habitCardStatus hand"
                      style={colorChange("notStatus")}
                      onClick={openMenu}
                    ></span>
                    Not Set
                  </span>
                </li>
              </ul>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
