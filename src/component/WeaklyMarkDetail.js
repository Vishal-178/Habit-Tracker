import "../css/weeklyMarkDetail.css";
import React from "react";

export default function WeaklyMarkDetail() {
  // this component is use to display detail of marked color.
  return (
    <div className="weaklyMarkDetail">
      <div className="detailContainer">
        <div className="markDetail">
          <div>
            <span className="habitCardStatus complete"></span>
          </div>
          <span> Complete</span>
        </div>
        <div className="markDetail">
          <div>
            <span className="habitCardStatus notComplete"></span>
          </div>
          <span>Not Complete</span>
        </div>
        <div className="markDetail">
          <div>
            <span className="habitCardStatus"></span>
          </div>
          <span> Not Marked</span>
        </div>
      </div>
    </div>
  );
}
