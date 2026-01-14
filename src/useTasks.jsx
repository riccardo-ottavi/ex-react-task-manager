import { useEffect, useState } from "react"
import axios from "axios";

function useTasks() {
    const [tasks, setTasks] = useState()

    async function getTasks() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
        console.log(response.data)
        setTasks(response.data);
    }

    function addTask(){

    }

    function removeTask(){

    }

    function updateTask(){


    }

    useEffect(() => {
        getTasks();
    }, [])

    return {
    tasks,
    getTasks,
    addTask,
    removeTask,
    updateTask,
  };

}

export default useTasks;