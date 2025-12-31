import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CatchMoment.css';

const CatchMoment = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [hearts, setHearts] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef(null);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (gameOver) return;

    const spawnHeart = () => {
      const id = Date.now();
      const x = Math.random() * 80 + 10; // 10-90%
      setHearts(prev => [...prev, { id, x, y: -10 }]);

      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id));
      }, 3000);
    };

    const interval = setInterval(spawnHeart, 800);
    return () => clearInterval(interval);
  }, [gameOver]);

  const catchHeart = (id) => {
    setScore(s => s + 1);
    setHearts(prev => prev.filter(h => h.id !== id));
  };

  return (
    <motion.div
      className="catch-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={gameRef}
    >
      <div className="game-header">
        <h1>💘 Catch the Moments</h1>
        <div className="game-stats">
          <span>Score: {score}</span>
          <span>Time: {timeLeft}s</span>
        </div>
      </div>

      {gameOver ? (
        <div className="game-over">
          <h2>Time's Up!</h2>
          <p>You caught {score} hearts!</p>
          <Link to="/games" className="back-btn">Back to Games</Link>
        </div>
      ) : (
        <div className="catch-area">
          {hearts.map(heart => (
            <div
              key={heart.id}
              className="falling-heart"
              style={{ left: `${heart.x}%` }}
              onClick={() => catchHeart(heart.id)}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <Link to="/games" className="back-link">← Back to Games</Link>
    </motion.div>
  );
};

export default CatchMoment;
