import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LoveWheel.css';

const prizes = [
  'A Kiss 💋',
  'A Hug 🤗',
  'Movie Night 🎬',
  'Dinner Date 🍝',
  'Love Letter 💌',
  'Surprise! 🎁',
  'Dance Together 💃',
  'Stargazing ⭐',
];

const LoveWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);

  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    setResult(null);
    
    const spins = 5 + Math.random() * 5; // 5-10 full rotations
    const extraDegrees = Math.random() * 360;
    const totalRotation = rotation + (spins * 360) + extraDegrees;
    
    setRotation(totalRotation);
    
    setTimeout(() => {
      const normalizedRotation = totalRotation % 360;
      const prizeIndex = Math.floor((360 - normalizedRotation + 22.5) / 45) % 8;
      setResult(prizes[prizeIndex]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <motion.div
      className="wheel-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>🎡 Love Wheel</h1>
      <p className="instruction">Spin to see what love brings!</p>

      <div className="wheel-container">
        <div 
          className="wheel"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {prizes.map((prize, index) => (
            <div 
              key={index}
              className="wheel-section"
              style={{ transform: `rotate(${index * 45}deg)` }}
            >
              <span>{prize}</span>
            </div>
          ))}
        </div>
        <div className="wheel-pointer">▼</div>
      </div>

      <button 
        className="spin-btn"
        onClick={spinWheel}
        disabled={spinning}
      >
        {spinning ? 'Spinning...' : 'Spin! 💝'}
      </button>

      {result && (
        <div className="result">
          <h2>You Won: {result}</h2>
        </div>
      )}

      <Link to="/games" className="back-link">← Back to Games</Link>
    </motion.div>
  );
};

export default LoveWheel;
