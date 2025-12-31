import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import './GameDetail.css';

const gamesData = {
  1: { name: 'Memory Hearts', icon: '💕', description: 'Match the hearts to reveal lovely messages!' },
  2: { name: 'Love Match', icon: '💘', description: 'Find the matching pairs of love symbols!' },
  3: { name: 'Our Year Together', icon: '📅', description: 'Celebrate our special moments!' },
  4: { name: 'Promise Garden', icon: '🌹', description: 'Plant seeds of promises and watch them bloom!' },
  5: { name: 'Starry Night', icon: '⭐', description: 'Connect the stars to draw our constellation!' },
  6: { name: 'Forever Puzzle', icon: '🧩', description: 'Piece together our beautiful memories!' },
  7: { name: 'Heart Pulse', icon: '❤️', description: 'Feel the rhythm of our love!' },
};

const GameDetail = () => {
  const { id } = useParams();
  const game = gamesData[id] || gamesData[1];
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handlePlay = () => {
    // Simple game simulation
    setScore(prev => prev + 10);
    if (score >= 40) {
      setCompleted(true);
    }
  };

  return (
    <motion.main
      className="game-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="game-container">
        <span className="game-icon-large">{game.icon}</span>
        <h1 className="game-title">{game.name}</h1>
        <p className="game-description">{game.description}</p>
        
        {!completed ? (
          <>
            <div className="game-score">Score: {score}</div>
            <button className="game-play-btn" onClick={handlePlay}>
              Click to Play! 💖
            </button>
          </>
        ) : (
          <div className="game-complete">
            <h2>🎉 You Win! 🎉</h2>
            <p>Your love score: {score}</p>
            <Link to="/games" className="back-btn">
              Back to Games
            </Link>
          </div>
        )}
        
        <Link to="/games" className="game-back-link">
          ← Back to all games
        </Link>
      </div>
    </motion.main>
  );
};

export default GameDetail;
