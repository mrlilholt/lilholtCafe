import React from 'react';

const DinnerDisplay = ({ dinners }) => {
    return (
        <div className="dinner-display">
            <h2>Dinners for the Week</h2>
            <ul>
                {dinners.map((dinner, index) => (
                    <li key={index}>{dinner}</li>
                ))}
            </ul>
        </div>
    );
};

export default DinnerDisplay;