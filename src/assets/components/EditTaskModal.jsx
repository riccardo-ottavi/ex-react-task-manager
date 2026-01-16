import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onSave }) {

    return show && ReactDOM.createPortal(
        <Modal
            title={"Modifica task"}
            content={updateTaskForm}
            confimText={"Salva"}
            onConfirm={
                <form>
                    <input type="text" value={title} placeholder="Titolo Task" />
                    <textarea name="" value={description} id=""></textarea>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </form>
            }
        />,
        document.body
    )

}









