import React from "react";
import CaredDetail from "./CaredDetail";
import HabitCard from "./HabitCard";
import NewHabitFooter from "./NewHabitFooter";

export default function HabitTrackerApp(props) {
  // this is the main page at rout "/" here we render all the card added by user and a footer by which
  // user can add new Habit to the list
  return (
    <div>
      {/* if ant habit card is clicked this props.viewCard become false and start render Card detail*/}
      {props.viewCard ? (
        <>
          <div style={{ marginBottom: "60px" }}>
            {/* all the habit card render her from the list of habit add edd by the newHabitFooter */}
            {props.habitList.map((habit, index) => (
              <HabitCard
                habit={habit}
                key={index}
                dispatch={props.dispatch}
                index={index}
              />
            ))}
          </div>
          <div>
            {/* here NewHabitFooter is render and inside we can add new Habit to our page */}
            <NewHabitFooter dispatch={props.dispatch} />
          </div>
        </>
      ) : (
        // this is render when any habit card is click on the main page which is on rout "/"
        <CaredDetail
          dispatch={props.dispatch}
          habit={props.habitList}
          index={props.viewCardIndex}
        />
      )}
    </div>
  );
}
