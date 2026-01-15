import { useEffect, useState } from "react"
import axios from "axios";

function useTasks() {
    const [tasks, setTasks] = useState([])

    //fetch delle task
    async function getTasks() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
        console.log(response.data)
        setTasks(response.data);
    }

    //aggiungi task
    async function addTask(taskTitle, taskDesc, taskStatus) {

        //costruzione oggetto 
        const newTask = {
            title: taskTitle,
            description: taskDesc,
            status: taskStatus
        }

        console.log(newTask);

        //chiamata POST con gestione errori
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/tasks`,
                newTask,
                //header esplicito
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            //destrutturazione risposta del BE
            const { success, data, message } = response.data;

            if (!success) {
                throw new Error(message);
            }

            //aggiornamento stato (aggiungi task nuova all'arrray)
            setTasks(prev => [...prev, data]);
            return data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    function removeTask() {

    }

    function updateTask() {


    }

    //fetch automatico all'avvio
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