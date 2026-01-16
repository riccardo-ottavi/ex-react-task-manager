import { useGlobal } from "../../contexts/GlobalContext";
import TaskRow from "./TaskRow";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TaskList() {
  const { tasks } = useGlobal();

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);


  function handleSort(column){
    if (sortBy === column) {
    setSortOrder(sortOrder * -1);
  } else {
    setSortBy(column);
    setSortOrder(1);
  }
  }

  //algoritmo ordinamento tasks
  const sortedTasks = [...tasks].sort((a, b) => {
  if (!sortBy) return 0; 
  if (a[sortBy] < b[sortBy]) return -1 * sortOrder;
  if (a[sortBy] > b[sortBy]) return 1 * sortOrder;
  return 0;
});

  return (
    <div className="container">
        <div className="row">
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