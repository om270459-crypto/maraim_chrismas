import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LovePuzzle.css';

const puzzlePieces = [
  { id: 1, correct: 0 },
  { id: 2, correct: 1 },
  { id: 3, correct: 2 },
  { id: 4, correct: 3 },
  { id: 5, correct: 4 },
  { id: 6, correct: 5 },
  { id: 7, correct: 6 },
  { id: 8, correct: 7 },
  { id: 9, correct: 8 },
];

const LovePuzzle = () => {
  const [pieces, setPieces] = useState([]);
  const [selected, setSelected] = useState(null);
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    // Shuffle pieces
    const shuffled = [...puzzlePieces].sort(() => Math.random() - 0.5);
    setPieces(shuffled);
  }, []);

  const handleClick = (index) => {
    if (solved) return;
    
    if (selected === null) {
      setSelected(index);
    } else {
      // Swap pieces
      const newPieces = [...pieces];
      [newPieces[selected], newPieces[index]] = [newPieces[index], newPieces[selected]];
      setPieces(newPieces);
      setMoves(m => m + 1);
      setSelected(null);

      // Check if solved
      const isSolved = newPieces.every((piece, idx) => piece.correct === idx);
      if (isSolved) {
        setSolved(true);
      }
    }
  };

  return (
    <motion.div
      className="puzzle-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>🧩 Love Puzzle</h1>
      <p className="instruction">Swap pieces to reveal the heart!</p>
      <div className="stats">Moves: {moves}</div>

      {solved ? (
        <div className="win-message">
          <h2>💝 Perfect! 💝</h2>
          <p>Completed in {moves} moves!</p>
          <Link to="/games" className="back-btn">Back to Games</Link>
        </div>
      ) : (
        <div className="puzzle-grid">
          {pieces.map((piece, index) => (
            <div
              key={piece.id}
              className={`puzzle-piece ${selected === index ? 'selected' : ''}`}
              onClick={() => handleClick(index)}
              style={{
                background: `hsl(${piece.correct * 40}, 70%, 60%)`,
              }}
            >
              {piece.id}
            </div>
          ))}
        </div>
      )}

      <Link to="/games" className="back-link">← Back to Games</Link>
    </motion.div>
  );
};

export default LovePuzzle;
