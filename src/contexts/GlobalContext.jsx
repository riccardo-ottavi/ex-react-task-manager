import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import useTasks from '../useTasks'

const GlobalContext = createContext();

function ContextProvider({ children }){
    
    const {
    tasks,
    getTasks,
    addTask,
    removeTask,
    updateTask,
  } = useTasks();

  

    return (
    <GlobalContext.Provider value={{ tasks, getTasks }}>
      {children}
    </GlobalContext.Provider>
  );

}

const useGlobal = () => {
  return useContext(GlobalContext);
};

export { ContextProvider, useGlobal, GlobalContext }