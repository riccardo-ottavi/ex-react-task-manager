import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <NavLink
                to={"/"}
            >
                Lista
            </NavLink>
            <NavLink
                to={"/new"}
            >
                Aggiungi
            </NavLink>
        </nav>
    )
}