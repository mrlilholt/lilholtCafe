import React from 'react';
import { createRoot } from 'react-dom/client';
import Clock from './components/Clock.jsx';
import DinnerDisplay from './components/DinnerDisplay.jsx';
import Weather from './components/Weather.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import MirasAgenda from './components/MirasAgenda.jsx';
import SheasAgenda from './components/SheasAgenda.jsx';
import DaddysAgenda from './components/DaddysAgenda.jsx';
import MommysAgenda from './components/MommysAgenda.jsx';
import './styles/main.css';

const App = () => {
    return (
        <div className="app">
            <img src="/images/lilholtCafe.png" alt="Lilholt Cafe" className="cafe-logo" />
            <div className="cards">
                <div className="card clock-card"><Clock /></div>
                <div className="card"><DinnerDisplay /></div>
                <div className="card"><Weather /></div>
                <div className="card"><AudioPlayer /></div>
                <div className="card"><MirasAgenda /></div>
                <div className="card"><SheasAgenda /></div>
                <div className="card"><DaddysAgenda /></div>
                <div className="card"><MommysAgenda /></div>
            </div>
        </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);