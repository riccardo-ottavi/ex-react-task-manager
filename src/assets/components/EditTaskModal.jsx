import useTasks from "../../useTasks";
import Modal from "./Modal";
import { useRef, useState, useEffect } from "react";

export default function EditTaskModal({ show, onClose, task, onSave }) {

    const editFormRef = useRef(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("To do");


    // sincronizza stato locale quando cambi il form onChange
    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setStatus(task.status);
        }
    }, [task]);

    function handleSubmit(e) {
        e.preventDefault();

        const updatedTask = {
            ...task,
            title,
            description,
            status,
        };

        onSave(updatedTask);
    }

    return (
        <Modal
            title={"Modifica task"}
            content={
                <div>
                    <form
                        ref={editFormRef} onSubmit={handleSubmit}
                    >
                        <input type="text" value={title} placeholder="Titolo Task" onChange={(e) => setTitle(e.target.value)} />
                        <textarea name="" value={description} id="" onChange={(e) => setDescription(e.target.value)}></textarea>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </form>
                </div>}
            confirmText={"Salva"}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit()}
            show={show}
        />
    )

}









