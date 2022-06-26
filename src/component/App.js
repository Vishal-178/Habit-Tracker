import NavBar from "./NavBar";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HabitTrackerApp from "./HabitTrackerApp";
import ViewAllHabit from "./ViewAllHabit";
export default class App extends Component {
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  render() {
    //parsing store and all three state which is coming from the reducer.
    const { habitList, viewCard, viewCardIndex } = this.props.store.getState();
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            {/* react rout for main/ Home page */}
            <Route
              path="/"
              element={
                <HabitTrackerApp
                  viewCard={viewCard}
                  habitList={habitList}
                  dispatch={this.props.store.dispatch}
                  viewCardIndex={viewCardIndex}
                />
              }
            />
            {/* React Rout for viewing all the Habit add in one place in path "/view" */}
            <Route
              path="/view"
              element={
                <ViewAllHabit
                  viewCard={viewCard}
                  habitList={habitList}
                  dispatch={this.props.store.dispatch}
                  viewCardIndex={viewCardIndex}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
