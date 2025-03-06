//// filepath: /Users/alilholt/lilholt-cafe-site/src/components/MirasAgenda.jsx
import React, { useState } from 'react';

const MirasAgenda = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    setItems([...items, { text: newItem.trim(), done: false }]);
    setNewItem('');
  };

  const toggleItem = (index) => {
    const updated = [...items];
    updated[index].done = !updated[index].done;
    setItems(updated);
  };

  return (
    <div className="agenda">
      <h2>Mira's Agenda</h2>
      <form onSubmit={handleAddItem} className="agenda-form">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add an item..."
        />
        <button type="submit">Add</button>
      </form>
      <ul className="agenda-list">
        {items.map((item, idx) => (
          <li key={idx}>
            <label>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggleItem(idx)}
              />
              <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                {item.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MirasAgenda;