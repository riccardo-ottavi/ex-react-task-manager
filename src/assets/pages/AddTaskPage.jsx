import { useState, useRef } from "react";

export default function AddTask() {

    const [title, setTitle] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("submit", title);
    }

    return (
        <div className="container">
            <h1>Sono la pagina Add Task</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" id=""></textarea>
                <select name="" id="">
                    <option value="">To Do</option>
                    <option value="">Doing</option>
                    <option value="">Done</option>
                </select>
                <button type="submit">Aggiungi Task</button>
            </form>
        </div>
    )
}