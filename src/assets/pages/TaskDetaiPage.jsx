import { useParams } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";
import useTasks from "../../useTasks";

export default function TaskDetailPage() {
    const { id } = useParams();
    {/*Promemoria: risolvi useTask e useGlobal mischiati (o uno o l'altro) e aggiungi un h2 se non trova task */}
    const { tasks, removeTask } = useGlobal();

    const [showRemove, setShowRemove] = useState(false)
    const [showEdit, setShowEdit] = useState(false);

    const { updateTask } = useTasks()

    // hook navigazione
    const navigate = useNavigate();

    const task = tasks?.find(t => t.id === Number(id));

    function handleRemove() {
        try {
            alert("Task rimossa con successo!")
            removeTask(task?.id)
            navigate("/tasks")
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <p>{task?.title}</p>
            <p>{task?.description}</p>
            <p>{task?.status}</p>
            <p>{task?.createdAt}</p>
            <button onClick={() => setShowRemove(true)}>Elimina Task</button>
            <button onClick={() => setShowEdit(true)}>Aggiorna Task</button>
            <Modal
                title={"Remove task?"}
                content={"Se confermi, la task verrà rimossa definitivamente."}
                show={showRemove}
                onClose={() => setShowRemove(false)}
                onConfirm={handleRemove}
            />
            <EditTaskModal
                show={showEdit}
                onClose={() => setShowEdit(false)}
                task={task}
                onSave={async (updatedTask) => {
                    {/*Potrebbe diventare handleUpdate */}
                    try {
                        await updateTask(updatedTask);      
                        alert("Task modificata con successo!");
                        setShowEdit(false);               
                    } catch (err) {
                        alert("Errore durante la modifica: " + err.message); 
                    }
                }}
            />
        </div>
    );
}