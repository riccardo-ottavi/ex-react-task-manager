import ReactDOM from "react-dom";

export default function Modal({ title, content, show, onClose, onConfirm, confirmText }){
    
    return show && ReactDOM.createPortal(
        <div className="container-modal">
            {/*Promemoria: inserisci stile modale e usa confirmText */}
            <h2>{title}</h2>
            <span>{content}</span>
            <button onClick={onClose}>Chiudi</button>
            <button onClick={onConfirm}>Conferma</button>
        </div>,
        document.body
    )
}









