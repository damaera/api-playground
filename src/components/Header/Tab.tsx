import React from "react";

import "./Tab.css";
interface TabProps {
  title: string;
  closeTab: () => void;
}

function Tab(props: TabProps) {
  return (
    <button className="Tab">
      <span className="Tab-text">
        {props.title === "" ? "New Tab" : props.title}
      </span>
      <span className="Tab-close" onClick={props.closeTab}>
        &times;
      </span>
    </button>
  );
}

export default Tab;
