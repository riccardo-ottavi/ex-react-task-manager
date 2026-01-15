export default function Modal({ title, content, show, onClose, onConfirm, confirmText }){
    
    
    return show && (
        <div className="container-modal">
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onClose}>Close</button>
        </div>
    )
}









