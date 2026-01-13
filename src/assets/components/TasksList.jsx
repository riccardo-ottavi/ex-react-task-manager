import { useGlobal } from "../../contexts/GlobalContext";
import TaskRow from "./TaskRow";

export default function TaskList() {

    const { tasks, getTasks } = useGlobal();

    const STATUS_STYLE = {
  "To do": {
    backgroundColor: "#fef3c7",
    color: "#92400e",
  },
  "Doing": {
    backgroundColor: "#dbeafe",
    color: "#1e40af",
  },
  "Done": {
    backgroundColor: "#d1fae5",
    color: "#065f46",
  },
};

    return (
        <div className="container">
            <TaskRow />
            {tasks.map(task => (
                <div className="card">
                    <span>{task.title}</span>
                    <span
                        style={STATUS_STYLE[task.status]}
                    >{task.status}</span>
                    <span>{task.createdAt}</span>
                </div>
            ))}
        </div>
    )
}