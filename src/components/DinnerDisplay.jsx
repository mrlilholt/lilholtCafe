import React, { useState } from 'react';

// Define the days of the week
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DinnerDisplay = () => {
  // Use an object to store dinner values for each day
  const [dinners, setDinners] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: '',
  });

  const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]);
  const [dinnerInput, setDinnerInput] = useState('');

  // When the form is submitted, update the dinner for the selected day
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dinnerInput.trim()) return;
    setDinners({
      ...dinners,
      [selectedDay]: dinnerInput.trim(),
    });
    setDinnerInput('');
  };

  return (
    <div className="dinner-display">
      <h2>Weekly Dinner Menu</h2>
      <ul className="dinner-list">
        {daysOfWeek.map((day) => (
          <li key={day}>
            <strong>{day}</strong>: {dinners[day] || 'No dinner planned'}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="dinner-form">
        <label>
          Day:
          <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>
        <label>
          Dinner:
          <input
            type="text"
            value={dinnerInput}
            onChange={(e) => setDinnerInput(e.target.value)}
            placeholder="Enter dinner"
          />
        </label>
        <button type="submit">Add Dinner</button>
      </form>
    </div>
  );
};

export default DinnerDisplay;