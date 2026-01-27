import { useParams } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

export default function TaskDetailPage() {

    //promemoria: evita ripetimento logica assegnamento colori
    const STATUS_STYLE = {
    "To do": {
      backgroundColor: "#fef3c7",
      color: "#92400e",
    },
    Doing: {
      backgroundColor: "#dbeafe",
      color: "#1e40af",
    },
    Done: {
      backgroundColor: "#d1fae5",
      color: "#065f46",
    },
  };

    const { id } = useParams();
    const { tasks, removeTask, updateTask } = useGlobal();

    const [showRemove, setShowRemove] = useState(false)
    const [showEdit, setShowEdit] = useState(false);


    // hook navigazione
    const navigate = useNavigate();

    const task = tasks?.find(t => t.id === Number(id));

    if (!task) {
        return (
            <h2>Task non trovata</h2>
        )
    }

    function handleRemove() {
        try {
            alert("Task rimossa con successo!")
            removeTask(task?.id)
            navigate("/tasks")
        } catch (err) {
            alert(err.message)
        }
    }

    async function handleUpdate(updatedTask) {
        try {
            await updateTask(updatedTask);
            alert("Task modificata con successo!");
            setShowEdit(false);
        } catch (err) {
            alert("Errore durante la modifica: " + err.message);
        }
    }

    return (
        <div className="task-card">
            <p>Titolo: {task?.title}</p>
            <p>Descrizione: {task?.description}</p>
            <p className="status-label cell" style={STATUS_STYLE[task.status]}>{task?.status}</p>
            <p>Aggiunta il: {new Date (task?.createdAt).toLocaleDateString()}</p>
            <button onClick={() => setShowRemove(true)}>Elimina Task</button>
            <button onClick={() => setShowEdit(true)}>Aggiorna Task</button>
            <Modal
                title={"Cancella task"}
                content={"Se confermi, la task verrà rimossa definitivamente."}
                show={showRemove}
                onClose={() => setShowRemove(false)}
                onConfirm={handleRemove}
            />
            <EditTaskModal
                show={showEdit}
                onClose={() => setShowEdit(false)}
                task={task}
                onSave={handleUpdate}
            />
        </div>
    );
}