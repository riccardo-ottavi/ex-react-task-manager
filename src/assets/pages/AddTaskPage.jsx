import { useState, useRef, useMemo } from "react";
import useTasks from "../../useTasks";

export default function AddTask() {

    const { addTask } = useTasks()

    const [title, setTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef("To do");

    const symbols = "!@#$%,.^&*()-_=\\<>?/'`~+[]{}|;:";

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
            descriptionRef.current.value = "";
            statusRef.current.value = "";
        } catch (err) {
            alert(err.message)
        }
    }

    //use memo calcola l’errore del titolo solo quando cambia title
    const taskTitleError = useMemo(() => {
        if (title.trim().length === 0) {
            return "Il titolo è obbligatorio!";
        }

        if (!isTitleValid(title)) {
            return "Il titolo contiene caratteri non validi";
        }

        return null;
    }, [title]);

    function isTitleValid(title) {
        if (title.length === 0) {
            return false
        }

        //spezzetto il titolo in caratteri e confronto
        if([...title].some((char) => symbols.includes(char))) return false
        
        return true
    }

    return (
        <div className="container">
            <h2>Aggiungi nuova task</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Titolo Task: 
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {taskTitleError &&
                        <p style={{"color":"red"}}>{taskTitleError}</p>
                    }
                </label>
                <label>
                    Descrizione:
                    <textarea
                        ref={descriptionRef}
                    >
                    </textarea>
                </label>
                <label>
                    Status:
                    <select
                        ref={statusRef}
                        defaultValue={"To do"}
                    >
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