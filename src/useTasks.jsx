import { useEffect, useState } from "react"
import axios from "axios";

function useTasks() {
    const [tasks, setTasks] = useState([])

    async function getTasks() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
        console.log(response.data)
        setTasks(response.data);
    }


    async function addTask(taskTitle, taskDesc, taskStatus) {

        const newTask = {
            title: taskTitle,
            description: taskDesc,
            status: taskStatus
        }

        console.log(newTask);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/tasks`,
                newTask,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            const { success, data, message } = response.data;

            if (!success) {
                throw new Error(message);
            }

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