import { useGlobal } from "../../contexts/GlobalContext";

export default function TaskList() {

    const { tasks, getTasks } = useGlobal();

    return (
        <div className="container">
            <h2>Sono la lista delle task</h2>
            {tasks.map(task => (
                <div className="card">
                    <span>{task.title}</span>
                    <span>{task.status}</span>
                    <span>{task.createdAt}</span>
                </div>
            ))}
        </div>
    )
}