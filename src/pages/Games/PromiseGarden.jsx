import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PromiseGarden.css';

const promises = [
  { id: 1, text: "I promise to love you forever 💕", flower: "🌹" },
  { id: 2, text: "I promise to always make you laugh 😊", flower: "🌷" },
  { id: 3, text: "I promise to hold your hand through everything 🤝", flower: "🌸" },
  { id: 4, text: "I promise to support your dreams ✨", flower: "🌻" },
  { id: 5, text: "I promise to cherish every moment 💝", flower: "🌺" },
];

const PromiseGarden = () => {
  const [plantedFlowers, setPlantedFlowers] = useState([]);
  const [currentPromise, setCurrentPromise] = useState(0);

  const plantFlower = () => {
    if (currentPromise >= promises.length) return;
    
    setPlantedFlowers([...plantedFlowers, promises[currentPromise]]);
    setCurrentPromise(c => c + 1);
  };

  return (
    <motion.div
      className="garden-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>🌹 Promise Garden</h1>
      <p className="instruction">Plant flowers of promises in your garden!</p>

      <div className="garden">
        {plantedFlowers.map((flower, idx) => (
          <motion.div
            key={flower.id}
            className="planted-flower"
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="flower-icon">{flower.flower}</span>
            <span className="flower-promise">{flower.text}</span>
          </motion.div>
        ))}
      </div>

      {currentPromise < promises.length ? (
        <button className="plant-btn" onClick={plantFlower}>
          🌱 Plant a Promise
        </button>
      ) : (
        <div className="garden-complete">
          <h2>🎉 Your garden is blooming! 🎉</h2>
          <p>All promises planted with love</p>
        </div>
      )}

      <Link to="/games" className="back-link">← Back to Games</Link>
    </motion.div>
  );
};

export default PromiseGarden;
