import { useGlobal } from "../../contexts/GlobalContext";
import TaskRow from "./TaskRow";
import { Link } from "react-router-dom";

export default function TaskList() {
  const { tasks } = useGlobal();

  return (
    <div className="container">
      {tasks?.map(task => (
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