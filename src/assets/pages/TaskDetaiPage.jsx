import { useParams } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

export default function TaskDetailPage() {
    const { id } = useParams();
    const { tasks, removeTask, updateTask } = useGlobal();

    const [showRemove, setShowRemove] = useState(false)
    const [showEdit, setShowEdit] = useState(false);


    // hook navigazione
    const navigate = useNavigate();

    const task = tasks?.find(t => t.id === Number(id));

    if(!task){
        return(
            <h2>Task non trovata</h2>
        )
    }

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