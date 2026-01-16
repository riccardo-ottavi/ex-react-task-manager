import { useGlobal } from "../../contexts/GlobalContext";
import TaskRow from "./TaskRow";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

export default function TaskList() {
    const { tasks } = useGlobal();

    const [sortBy, setSortBy] = useState("createdAt");
    const [sortOrder, setSortOrder] = useState(1);


    function handleSort(column) {
        if (sortBy === column) {
            setSortOrder(sortOrder * -1);
        } else {
            setSortBy(column);
            setSortOrder(1);
        }
    }

    //algoritmo ordinamento tasks
    const sortedTasks = useMemo(() => {
       
        const statusOrder = ["To do", "Doing", "Done"];

        const tasksCopy = [...tasks];

        // Ordinamento
        tasksCopy.sort((taskA, taskB) => {
            let result = 0; 

            if (sortBy === "title") {

                if (taskA.title < taskB.title) {
                    result = -1;
                } else if (taskA.title > taskB.title) {
                    result = 1;
                } else {
                    result = 0;
                }
            } else if (sortBy === "status") {

                const indexA = statusOrder.indexOf(taskA.status);
                const indexB = statusOrder.indexOf(taskB.status);

                if (indexA < indexB) {
                    result = -1;
                } else if (indexA > indexB) {
                    result = 1;
                } else {
                    result = 0;
                }
            } else if (sortBy === "createdAt") {
        
                const timeA = new Date(taskA.createdAt).getTime();
                const timeB = new Date(taskB.createdAt).getTime();

                if (timeA < timeB) {
                    result = -1;
                } else if (timeA > timeB) {
                    result = 1;
                } else {
                    result = 0;
                }
            }

            return result * sortOrder;
        });

        return tasksCopy;
    }, [tasks, sortBy, sortOrder]);

    return (
        <div className="container">
            <div className="row">
                {/*promemoria: Fai refactoring usando i tag giusti */}
                <span onClick={() => handleSort("title")}>Titolo</span>
                <span onClick={() => handleSort("status")}>Status</span>
                <span onClick={() => handleSort("createdAt")}>Data Creazione</span>
            </div>
            {sortedTasks?.map(task => (
                <Link key={task.id} to={`/tasks/${task.id}`} >
                    <TaskRow
                        key={task.id}
                        task={task}
                    />
                </Link>
            ))}
        </div>
    );
}