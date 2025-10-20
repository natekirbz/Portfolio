import React, { useState } from 'react';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import './Content.css';

function Content() {
    const [currentComponent, setCurrentComponent] = useState("home");

    const renderComponent = () => {
        switch (currentComponent) {
            case "home":
                return <Home />;
            case "about":
                return <div></div>;
            case "projects":
                return <div></div>;
            default:
                return <Home />;
        }
    };

    return (
        <main id="Page">
            <Header 
                currentComponent={currentComponent} 
                setCurrentComponent={setCurrentComponent} 
            />
            <section id="content">
                {renderComponent()}
            </section>
        </main>
    );
}

export default Content;
