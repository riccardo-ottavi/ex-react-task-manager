import { useGlobal } from "../../contexts/GlobalContext";
import TaskRow from "./TaskRow";

export default function TaskList() {

    const { tasks, getTasks } = useGlobal();

    return (
        <div className="container">
            {tasks.map(task => (
                <TaskRow 
                    task={task}
                />
            ))}
        </div>
    )
}