import "../css/habitCard.css";
import React, { useState } from "react";
import {
  changeStatusAction,
  viewCardDetailOn,
  deleteHabitAction,
} from "../actioin";

export default function HabitCard(props) {
  // state used for dropdown menu in card to select from the drop down menu
  const [menu, setMenu] = useState(false);
  //   use to view the card detail, it will set the index in reducer state viewCardIndex
  // and also set the viewCard to false in reducer State which help to see the detail of the page
  const openCard = () => {
    props.dispatch(viewCardDetailOn(props.index));
  };
  // here complete notComplete notSet function are use to set the current/ todays state(complete notComplete notSet) Habit
  const complete = () => {
    const temp = {
      status: "complete",
      index: props.index,
    };
    props.dispatch(changeStatusAction(temp));
    setMenu(false);
  };
  const notComplete = () => {
    const temp = {
      status: "notComplete",
      index: props.index,
    };
    props.dispatch(changeStatusAction(temp));
    setMenu(false);
  };
  const notSet = () => {
    const temp = {
      status: "notSet",
      index: props.index,
    };
    props.dispatch(changeStatusAction(temp));
    setMenu(false);
  };
  //   if button is clicked menu open and when clicked agin it will close
  const openMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  //   based on status it will change the color of the check box
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
  //   when delete button is clicked it will call the action reducer which delete the habit card
  const deleteHabit = () => {
    props.dispatch(deleteHabitAction(props.index));
  };
  return (
    // this is the each Habit card in this habit card we have symbol for habit option to if --
    // is the habit is complete notComplete or notSate yet and also to the habit there is habit button.
    <div className="habitCard">
      <div className="habitCardContainer">
        <div className="habitCardLeft">
          {/* symbol for where the task is complete notComplete or notSate in left side of card */}
          <span
            className="habitCardStatus"
            style={colorChange(props.habit.weeklyDate[6].status)}
          ></span>
          {/* Title/Name of the card */}
          <span className="habitCardTitle hand" onClick={openCard}>
            {props.habit.habit}
          </span>
        </div>
        {/* Button to select  where the task is complete notComplete or notSate */}
        <div className="habitCardButton">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={openMenu}
          >
            Select
          </button>
          <div className="habitCardDropDown">
            {/* when select Button clicked this dropdown appears */}
            {menu ? (
              <ul className="item">
                <li>
                  <span className="dropdown-item hand" onClick={complete}>
                    Complete
                  </span>
                </li>
                <li>
                  <span className="dropdown-item hand" onClick={notComplete}>
                    Not Complete
                  </span>
                </li>
                <li>
                  <span className="dropdown-item hand" onClick={notSet}>
                    Not Set
                  </span>
                </li>
              </ul>
            ) : (
              <span />
            )}
          </div>
          {/* delete button to delete the Habit Card */}
          <div className="deleteContainer">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
              className="deleteImage hand"
              onClick={deleteHabit}
              alt="delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
