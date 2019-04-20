import React, { useState } from "react";

export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
  OPTIONS = "options"
}

export interface Tab {
  title: string;
  method: Method;
  url: string;
}

export type Tabs = [Tab];

export const initialTabs: Tabs = [
  {
    title: "",
    method: Method.GET,
    url: ""
  }
];

export interface TabsContextType {
  state: Tabs;
  actions: {
    addTab: (tab: Tab) => void;
    removeTab: (index: number) => void;
  };
}

export const TabsContext = React.createContext<TabsContextType>({
  state: initialTabs,
  actions: {
    addTab: () => {},
    removeTab: () => {}
  }
});

export function useTabs(value: Tabs) {
  const [tabs, setTabs] = useState<Tabs>(value);

  function addTab(tab: Tab = { title: "", method: Method.GET, url: "" }) {
    setTabs([...tabs, tab] as Tabs);
  }

  function removeTab(index: number) {
    tabs.splice(index, 1);
    setTabs([...tabs] as Tabs);
  }

  return { tabs, addTab, removeTab };
}
