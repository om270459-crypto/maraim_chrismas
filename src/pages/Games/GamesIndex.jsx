import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './GamesIndex.css';

const games = [
  { id: 'memory', name: 'Memory Hearts', icon: 'fa-solid fa-heart', desc: 'Match the pairs!' },
  { id: 'catch', name: 'Catch Moments', icon: 'fa-solid fa-hand-holding-heart', desc: 'Catch falling hearts!' },
  { id: 'wheel', name: 'Love Wheel', icon: 'fa-solid fa-dharmachakra', desc: 'Spin for prizes!' },
  { id: 'pulse', name: 'Heart Pulse', icon: 'fa-solid fa-heartbeat', desc: 'Feel the beat!' },
  { id: 'puzzle', name: 'Love Puzzle', icon: 'fa-solid fa-puzzle-piece', desc: 'Piece it together!' },
  { id: 'stars', name: 'Starry Night', icon: 'fa-solid fa-star', desc: 'Connect the stars!' },
  { id: 'garden', name: 'Promise Garden', icon: 'fa-solid fa-seedling', desc: 'Grow your love!' },
];

const GamesIndex = () => {
  return (
    <motion.main
      className="games-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="games-container">
        <h1 className="games-title">
          <i className="fa-solid fa-gamepad"></i> Romantic Games
        </h1>
        <p className="games-subtitle">Pick a game to play together!</p>
        
        <div className="games-grid">
          {games.map((game) => (
            <Link key={game.id} to={`/games/${game.id}`} className="game-card">
              <span className="game-icon"><i className={game.icon}></i></span>
              <span className="game-name">{game.name}</span>
              <span className="game-desc">{game.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default GamesIndex;
