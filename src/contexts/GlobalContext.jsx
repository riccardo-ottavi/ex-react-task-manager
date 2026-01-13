import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

function ContextProvider({ children }){
    const [tasks, setTasks] = useState([])

    async function getTasks(){
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
        console.log(response.data)
        setTasks(response.data);
    }

    useEffect(() => {
        getTasks()
    },[])

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