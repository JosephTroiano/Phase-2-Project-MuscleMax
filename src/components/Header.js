import React from "react";
import { Link } from "react-router-dom"



function Header() {
    return (
        <header>
            <h1 id="title">MuscleMax</h1>
            <Link to="/" className="nav-links">
                Home
            </Link>
            <Link to="/workouts" className="nav-links">
                Workouts
            </Link>
            <Link to="/progress" className="nav-links">
                Progress
            </Link>
            <Link to="/settings" className="nav-links">
                Settings
            </Link>
        </header>
    )
}

export default Header;