import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="clock">
            <h2>{time.toLocaleTimeString('en-US', { hour12: true })}</h2>
        </div>
    );
};

export default Clock;