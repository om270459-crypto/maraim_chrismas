import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './StarryNight.css';

const StarryNight = () => {
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [lines, setLines] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 50 + Math.random() * 300,
      y: 50 + Math.random() * 300,
    }));
    setStars(newStars);
  }, []);

  const handleStarClick = (star) => {
    if (lines.length === 0 || lines[lines.length - 1].to) {
      // Start new line
      setLines([...lines, { from: star, to: null }]);
    } else {
      // Complete line
      const newLines = [...lines];
      newLines[newLines.length - 1].to = star;
      setLines(newLines);

      if (newLines.length >= 5) {
        setMessage("✨ You've drawn your constellation of love! ✨");
      }
    }
  };

  return (
    <motion.div
      className="starry-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>⭐ Starry Night</h1>
      <p className="instruction">Connect the stars to draw your love constellation!</p>
      
      <div className="star-canvas">
        <svg width="400" height="400">
          {/* Draw lines */}
          {lines.map((line, idx) => (
            line.to && (
              <line
                key={idx}
                x1={line.from.x}
                y1={line.from.y}
                x2={line.to.x}
                y2={line.to.y}
                stroke="#ffd700"
                strokeWidth="2"
              />
            )
          ))}
        </svg>
        
        {/* Draw stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{ left: star.x, top: star.y }}
            onClick={() => handleStarClick(star)}
          >
            ⭐
          </div>
        ))}
      </div>

      {message && (
        <motion.div
          className="constellation-message"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          {message}
        </motion.div>
      )}

      <button 
        className="reset-btn"
        onClick={() => { setLines([]); setMessage(''); }}
      >
        Reset
      </button>

      <Link to="/games" className="back-link">← Back to Games</Link>
    </motion.div>
  );
};

export default StarryNight;
