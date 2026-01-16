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
    async function removeTask(taskId) {
        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/tasks/${taskId}`
            );

            const { success, message } = response.data;

            if (!success) {
                throw new Error(message || "Errore nella rimozione della task");
            }

            setTasks(prev => prev.filter(t => t.id !== taskId));

            return taskId;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async function updateTask(updatedTask) {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/tasks/${updatedTask.id}`,
                updatedTask
            );

            const { success, task, message } = response.data;

            if (!success) {
                throw new Error(message);
            }

            // aggiorna la task nello stato globale
            setTasks((prevTasks) =>
                prevTasks.map((t) =>
                    t.id === task.id ? task : t
                )
            );

            return task;
        } catch (error) {
            // se l'errore viene dal backend
            if (error.response?.data?.message) {
                throw new Error(error.response.data.message);
            }

            // errore generico
            throw error;
        }
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