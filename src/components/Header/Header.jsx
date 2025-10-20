import React from 'react';
import './Header.css';

function Header({ currentComponent, setCurrentComponent }) {
    return (
        <header id="TopBar">
            <button onClick={() => setCurrentComponent("home")}>
                Home
            </button>
            <button onClick={() => setCurrentComponent("projects")}>
                Projects
            </button>
            <button onClick={() => setCurrentComponent("about")}>
                About
            </button>
        </header>
    );
}

export default Header;
