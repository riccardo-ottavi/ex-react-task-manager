import { useState, useRef } from "react";

export default function AddTask() {

    const [title, setTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef("To do");

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() === "") {
            alert("Compila tutti i campi!")
            return
        }
        console.log("title", title);
        console.log("description", descriptionRef.current.value);
        console.log("status", statusRef.current.value);
    }

    function isTitleValid(title) {
        const symbols = "!@#$%,.^&*()-_=\\<>?/'`~+[]{}|;:";

        if(title.length === 0){
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
            <h1>Sono la pagina Add Task</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" id="" ref={descriptionRef}></textarea>
                <select name="" id="" ref={statusRef}>
                    <option value="To Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <button type="submit">Aggiungi Task</button>
            </form>
            {!isTitleValid(title) ? "Titolo non valido" : "Titolo valido"}
        </div>
    )
}