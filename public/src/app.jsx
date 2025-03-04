import React from 'react';
import { createRoot } from 'react-dom/client';
import Clock from './components/Clock.jsx';
import DinnerDisplay from './components/DinnerDisplay.jsx';
import YouTubePlayer from './components/YouTubePlayer.jsx';
import Weather from './components/Weather.jsx';
import './styles/main.css';

const dinners = [
    'Spaghetti Bolognese',
    'Chicken Tacos',
    'Vegetable Stir Fry',
    'Beef Stew',
    'Grilled Salmon',
    'Pasta Primavera',
    'Stuffed Peppers'
];

const App = () => {
    return (
        <div className="app">
            <img src="/images/lilholtCafe.png" alt="Lilholt Cafe" className="cafe-logo" />
            <div className="cards">
                <div className="card clock-card">
                    <Clock />
                </div>
                <div className="card">
                    <DinnerDisplay dinners={dinners} />
                </div>
                <div className="card youtube-card">
                    <YouTubePlayer playlistId="PLjwiCt7m0sVp186Ox3eKijOO2xBHMYAbE" />
                </div>
                <Weather />
            </div>
        </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);