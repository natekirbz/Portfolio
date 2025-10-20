import React from 'react';
import './Home.css';

function Home() {
    return (
        <main id="homeContent">
            <section id="homeLeft">
                <p>Hi, I am</p>
                <p className="name" id="top">Nathan</p>
                <p className="name" id="bottom">Kirby</p>
                <p>Full Stack Developer</p>
            </section>
            <section id="homeRight">
                <span className="photo"></span>
            </section>
        </main>
    );
}

export default Home;
