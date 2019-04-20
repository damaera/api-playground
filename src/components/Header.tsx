import React, { useContext } from "react";

import "./Header.css";
import { Method, TabsContext, Tab as TabType } from "../contexts/TabsContext";
import Tab from "./Header/Tab";
import NewTab from "./Header/NewTab";

/**
 * TODO
 * - add tab
 * - remove tab
 */
function Header() {
  const { state, actions } = useContext(TabsContext);

  const initNewTab: TabType = {
    title: "",
    method: Method.GET,
    url: ""
  };

  return (
    <header className="Header">
      <div className="flex">
        {state.map((tab, i) => (
          <Tab
            title={tab.title}
            closeTab={() => actions.removeTab(i)}
            key={i}
          />
        ))}
        <NewTab createNewTab={() => actions.addTab(initNewTab)} />
      </div>
    </header>
  );
}

export default Header;
