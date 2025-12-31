import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MemoryGame.css';

const initialCards = [
  { icon: 'fa-heart', id: 1 },
  { icon: 'fa-heart', id: 1 },
  { icon: 'fa-star', id: 2 },
  { icon: 'fa-star', id: 2 },
  { icon: 'fa-gem', id: 3 },
  { icon: 'fa-gem', id: 3 },
  { icon: 'fa-gift', id: 4 },
  { icon: 'fa-gift', id: 4 },
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    // Shuffle cards
    const shuffled = [...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
    setCards(shuffled);
  }, []);

  const handleCardClick = (uniqueId) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(uniqueId)) return;
    if (matchedPairs.includes(cards.find(c => c.uniqueId === uniqueId)?.id)) return;

    const newFlipped = [...flippedCards, uniqueId];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      const firstCard = cards.find(c => c.uniqueId === first);
      const secondCard = cards.find(c => c.uniqueId === second);

      if (firstCard.id === secondCard.id) {
        setMatchedPairs(prev => [...prev, firstCard.id]);
        setFlippedCards([]);
        
        if (matchedPairs.length + 1 === 4) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const isFlipped = (uniqueId) => {
    return flippedCards.includes(uniqueId) || 
           matchedPairs.includes(cards.find(c => c.uniqueId === uniqueId)?.id);
  };

  return (
    <motion.div
      className="memory-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>💕 Memory Hearts</h1>
      <p className="instruction">Find the matching pairs!</p>
      <div className="stats">Attempts: {moves}</div>

      {gameWon ? (
        <div className="win-message">
          <h2>🎉 You Win! 🎉</h2>
          <p>Completed in {moves} moves!</p>
          <Link to="/games" className="back-btn">Back to Games</Link>
        </div>
      ) : (
        <div className="memory-grid">
          {cards.map((card) => (
            <div
              key={card.uniqueId}
              className={`memory-card ${isFlipped(card.uniqueId) ? 'flipped' : ''}`}
              onClick={() => handleCardClick(card.uniqueId)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>
                <div className="card-back">❤️</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link to="/games" className="back-link">← Back to Games</Link>
    </motion.div>
  );
};

export default MemoryGame;
