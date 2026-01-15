import { useParams } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Modal from "../components/Modal";

export default function TaskDetailPage() {
  const { id } = useParams();
  const { tasks, removeTask } = useGlobal();

  const [show, setShow] = useState(false)
  
  // hook navigazione
  const navigate = useNavigate(); 

  const task = tasks?.find(t => t.id === Number(id));

  function handleRemove(){
    try{
        alert("Task rimossa con successo!")
        removeTask(task?.id)       
        navigate("/tasks")
    }catch(err){
        alert(err)
    }
    
  }

  return (
    <div>
      <p>{task?.title}</p>
      <p>{task?.description}</p>
      <p>{task?.status}</p>
      <p>{task?.createdAt}</p>
      <button onClick={() => setShow(true)}>Elimina Task</button>
      <Modal 
        title={"Remove task?"}
        content={"Se confermi, la task verrà rimossa definitivamente."}
        show={show}
        onClose={() => setShow(false)}
        onConfirm={handleRemove}
      />
    </div>
  );
}