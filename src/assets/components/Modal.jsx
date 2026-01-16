import ReactDOM from "react-dom";

export default function Modal({ title, content, show, onClose, onConfirm, confirmText }){
    
    
    return show && ReactDOM.createPortal(
        <div className="container-modal">
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onClose}>Chiudi</button>
            <button onClick={onConfirm}>Conferma</button>
        </div>,
        document.body
    )
}









