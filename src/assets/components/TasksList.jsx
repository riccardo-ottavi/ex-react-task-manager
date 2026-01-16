import { useGlobal } from "../../contexts/GlobalContext";
import TaskRow from "./TaskRow";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TaskList() {
  const { tasks } = useGlobal();
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);


  return (
    <div className="container">
        <div className="row">
      <span>Titolo</span>
      <span>Status</span>
      <span>Data Creazione</span>
    </div>
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