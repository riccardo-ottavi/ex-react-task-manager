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

        axios.post(`${import.meta.env.VITE_API_URL}/tasks`, newTask, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                const result = { success: true, task: newTask }
                console.log(result)
            })
            .catch((err) => console.log({ success: false, message: "Messaggio di errore" }))

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