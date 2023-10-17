"use client"
import { useState, useContext, createContext } from "react";
import React from "react";
import { navLinks } from "@/lib/data";

type SectionType = (typeof navLinks)[number]["name"];

type ActivePageProviderProps = {
  children: React.ReactNode;
};
type ActivePageType = {
  activePage: SectionType;
  setActivePage: React.Dispatch<React.SetStateAction<SectionType>>;
  timeDeplay: number;
  setTimeDeplay: React.Dispatch<React.SetStateAction<number>>
};

export const ActivePageContext = createContext<ActivePageType | null>(null);

const ActivePageProvider = ({ children }: ActivePageProviderProps) => {
  const [activePage, setActivePage] = useState<SectionType>("Home");
  const [timeDeplay, setTimeDeplay] = useState(0); // for disable observer 

  return (
    <ActivePageContext.Provider value={{activePage, setActivePage, timeDeplay, setTimeDeplay }}>
      {children}
    </ActivePageContext.Provider>
  );
};

export default ActivePageProvider;


export const useActivePageContext = () => {
  const context = useContext(ActivePageContext);

  if(context === null) {
    throw new Error("Error! ")
  }

  return context;
}