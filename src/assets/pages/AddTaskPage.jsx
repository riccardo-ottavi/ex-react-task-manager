import { useState, useRef } from "react";
import useTasks from "../../useTasks";

export default function AddTask() {

    const { addTask } = useTasks()

    const [title, setTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef("To do");

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() === "") {
            alert("Compila tutti i campi!")
            return
        }
        try {
            addTask(title, descriptionRef.current.value, statusRef.current.value)
            console.log("title", title);
            console.log("description", descriptionRef.current.value);
            console.log("status", statusRef.current.value);

            alert("Task inserita con successo ✅");
            setTitle(""); 
        }catch(err) {
            alert(err.message)
        }
    }

    function isTitleValid(title) {
        {/* Promemoria: gestisci invece con useMemo */}
        const symbols = "!@#$%,.^&*()-_=\\<>?/'`~+[]{}|;:";

        if (title.length === 0) {
            return false
        }

        for (let i = 0; i < title.length; i++) {
            if (symbols.includes(title[i])) {
                return false
            } else if (title[i] === " ") {
                return false
            }
        }
        return true
    }

    return (
        <div className="container">
            {/* Promemoria: migliora form aggiungendo le label e defaultValue = "To do" */}
            <h2>Aggiungi nuova task</h2>
            <form action="" onSubmit={handleSubmit}>
                <label>
                    Titolo Task
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {!isTitleValid(title) ? "Titolo non valido" : "Titolo valido"}
                </label>
                <label>
                    Descrizione:
                    <textarea name="" id="" ref={descriptionRef}></textarea>
                </label>
                
                <label>
                    Status:
                    <select name="" id="" ref={statusRef}>
                    <option value="To do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                </label>
                <button type="submit">Aggiungi Task</button>
            </form>  
        </div>
    )
}