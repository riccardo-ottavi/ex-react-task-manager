import { createContext, useContext } from "react";
import useTasks from '../useTasks'

//crea un contenitore vuoto con scope globale (verrà poi popolato dal provider)
const GlobalContext = createContext();

//componente wrapper per dare accesso al context ai children
function ContextProvider({ children }){
    

    //attivazione custom hook recuperando funzioni gestione tasks
    const {
    tasks,
    getTasks,
    addTask,
    removeTask,
    updateTask,
  } = useTasks();

  

    return (
    <GlobalContext.Provider
      value={{
        tasks,
        getTasks,
        addTask,
        removeTask, 
        updateTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );

}

//scorciatoia per accedere al context
const useGlobal = () => {
  return useContext(GlobalContext);
};

export { ContextProvider, useGlobal, GlobalContext }