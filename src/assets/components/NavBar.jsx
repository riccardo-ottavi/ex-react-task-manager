import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <NavLink
                    to={"/tasks"}
                >
                    Lista
                </NavLink>
                <NavLink
                    to={"/new-task"}
                >
                    Aggiungi
                </NavLink>
            </nav>
        </div>

    )
}