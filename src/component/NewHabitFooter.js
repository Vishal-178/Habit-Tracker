import "../css/newHabitFooter.css";
import React, { useState } from "react";
import { addNewHabitAction } from "../actioin";

export default function NewHabitFooter(props) {
  // this enteredText state is used to take the input from the user and when submitted clear the state
  // so the input field is cleared on each submit
  const [enteredText, setEnteredText] = useState("");
  // this message state is used to popup message when user wants to submit the habit input without filling
  const [message, setMessage] = useState(false);
  // on every key press in the input field it will update the enteredText state.
  const handleChange = (e) => {
    setEnteredText(e.target.value);
  };
  // on clicking the plus button in footer this function add the text from the enteredText state and
  // after sending date to action reducer it will set the setEnteredText state as blank so the input field get blank
  const handleAdd = () => {
    if (enteredText !== "") {
      props.dispatch(addNewHabitAction(enteredText));
      setEnteredText("");
    } else {
      setMessage(true);
      const time = setTimeout(() => {
        setMessage(false);
        clearTimeout(time);
      }, 1000);
    }
  };
  //   footer on the main page "/" in the footer we can add new habit
  return (
    <div className="newHabitFooter">
      {/* message when the field is empty "Please Enter Habit" */}
      {message ? (
        <span className="footerButtonPopup">Please Enter Habit</span>
      ) : (
        <span />
      )}
      {/* input box for Habit */}
      <div className="newHabitContainer">
        <input
          className="newHabitInput"
          onChange={handleChange}
          value={enteredText}
          placeholder="Enter Habit"
        ></input>
        {/* Button to add the new Habit to the list */}
        <button className="newHabitButton" onClick={handleAdd}>
          ➕
        </button>
      </div>
    </div>
  );
}
