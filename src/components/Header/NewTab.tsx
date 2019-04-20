import React from "react";

import "./Tab.css";

interface NewTabProps {
  createNewTab: () => void;
}

function NewTab(props: NewTabProps) {
  return (
    <button className="Tab Tab-new" onClick={props.createNewTab}>
      +
    </button>
  );
}

export default NewTab;
