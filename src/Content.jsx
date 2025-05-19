import './Content.css'
import React, { useState } from 'react';

function Home() {
    return (
        <main id="homeContent">
            <section id="homeLeft">
            <p>Hi, I am</p>
            <p class="name">Nathan</p>
            <p class="name">Kirby</p>
            <p>Full Stack Developer</p>
            </section>
            <section id="homeRight">
            right
            </section>
            
        </main>
    );
}

function About() {
    return <div>About</div>;
}

function Projects() {
    return <div>Project</div>;
}

function Content() {
    const [currentComponent, setCurrentComponent] = useState("home");

    const renderComponent = () => {
        switch (currentComponent) {
            case "home":
                return <Home />;
            case "about":
                return <About />;
            case "projects":
                return <Projects />;
            default:
                return <Home />;
        }
    };


    return (
        <main>
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
            <section id="Page">
                {renderComponent()}
            </section>
        </main>
    )
}

export default Content