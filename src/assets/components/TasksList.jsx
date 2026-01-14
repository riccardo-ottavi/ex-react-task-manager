import { useGlobal } from "../../contexts/GlobalContext";
import TaskRow from "./TaskRow";

export default function TaskList() {
  const { tasks } = useGlobal();

  return (
    <div className="container">
      {tasks?.map(task => (
        <TaskRow
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}