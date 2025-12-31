import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HeartPulse.css';

const HeartPulse = () => {
  const [beats, setBeats] = useState(0);
  const [isBeating, setIsBeating] = useState(false);
  const [message, setMessage] = useState('');

  const messages = [
    "I love you! 💕",
    "You're amazing! ✨",
    "Forever yours! 💝",
    "My heart beats for you! 💗",
    "You complete me! 💞",
  ];

  const handleBeat = () => {
    setIsBeating(true);
    setBeats(b => b + 1);
    
    if (beats > 0 && beats % 10 === 9) {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }
    
    setTimeout(() => setIsBeating(false), 300);
  };

  return (
    <motion.div
      className="pulse-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Heart Pulse</h1>
      <p className="instruction">Tap the heart to feel the love!</p>
      
      <div className="beat-counter">
        Beats: {beats}
      </div>

      <div 
        className={`heart-btn ${isBeating ? 'beating' : ''}`}
        onClick={handleBeat}
      >
        ❤️
      </div>

      {message && (
        <motion.div 
          className="love-message"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          key={beats}
        >
          {message}
        </motion.div>
      )}

      <Link to="/games" className="back-link">← Back to Games</Link>
    </motion.div>
  );
};

export default HeartPulse;
