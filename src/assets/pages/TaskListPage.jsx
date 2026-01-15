import { NavLink } from "react-router-dom"
import TaskList from "../components/TasksList"

export default function TaskListPage(){
    return(
        <NavLink>
            <TaskList /> 
        </NavLink>
        
    )
}