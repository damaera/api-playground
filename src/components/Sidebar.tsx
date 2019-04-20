import React, { useContext } from "react";
import "./Sidebar.css";
import { TabsContext, useTabs } from "../contexts/TabsContext";

function Sidebar() {
  const tabs = useContext(TabsContext);
  return (
    <div className="Sidebar">
      <button className="Button">button</button>
    </div>
  );
}

export default Sidebar;
