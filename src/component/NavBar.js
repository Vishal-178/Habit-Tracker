import "../css/navBar.css";
import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navContainer">
        <Link to={"/"} className="navBarView">
          <span className="nabBarTitle">Habit Tracker</span>
        </Link>

        <Link to={"/view"} className="navBarView">
          <span className="navBarView">View All</span>
        </Link>
      </div>
    </div>
  );
}
