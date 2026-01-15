import { useParams } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";

export default function TaskDetailPage() {
  const { id } = useParams();
  const { tasks } = useGlobal();

  const task = tasks.find(t => t.id === Number(id));

  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
    </div>
  );
}