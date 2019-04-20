import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import InputSection from "./components/InputSection";
import ResultSection from "./components/ResultSection";
import { TabsContext, useTabs, initialTabs } from "./contexts/TabsContext";

/**
 * TODO
 * - useContext global store
 */
function App() {
  const { tabs, addTab, removeTab } = useTabs(initialTabs);
  return (
    <TabsContext.Provider
      value={{ state: tabs, actions: { addTab, removeTab } }}
    >
      <div className="flex">
        <Sidebar />
        <div style={{ flex: 1, height: "100vh" }}>
          <Header />
          <div className="flex">
            <InputSection />
            <ResultSection />
          </div>
        </div>
      </div>
    </TabsContext.Provider>
  );
}

export default App;
