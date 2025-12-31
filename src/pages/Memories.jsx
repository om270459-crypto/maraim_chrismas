import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Memories.css";

const memories = [
  {
    id: 1,
    date: "2025",
    title: "Our First Chat",
    icon: "fa-solid fa-heart",
    description: "The day That I Chated You and everything changed...",
  },
  {
    id: 2,
    date: "2025",
    title: "First Message",
    icon: "fa-solid fa-champagne-glasses",
    description: "Butterflies in my stomach, joy in my heart...",
  },
  {
    id: 3,
    date: "2025",
    title: 'First "I Love You"',
    icon: "fa-solid fa-comment-dots",
    description: "Three words that meant everything...",
  },
  {
    id: 4,
    date: "2025",
    title: "Our First Call",
    icon: "fa-solid fa-plane",
    description: "Every moment with you is an adventure...",
  },
  {
    id: 5,
    date: "2025",
    title: "It's Will Our Memories Will Grow Together",
    icon: "fa-solid fa-seedling",
    description: "Building our dreams, side by side With Each Other...",
  },
];

const Memories = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <motion.main
      className="memories-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="memories-container">
        <h1 className="memories-title">
          <i className="fa-solid fa-heart"></i> Our Memories
        </h1>
        <p className="memories-subtitle">Click on a memory to relive it</p>

        <div className="memories-timeline">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="memories-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              onClick={() => setSelectedMemory(memory)}
            >
              <span className="memories-item-icon">
                <i className={memory.icon}></i>
              </span>
              <div className="memories-item-info">
                <span className="memories-item-date">{memory.date}</span>
                <h3 className="memories-item-title">{memory.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMemory && (
            <motion.div
              className="memory-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMemory(null)}
            >
              <motion.div
                className="memory-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="modal-icon">
                  <i className={selectedMemory.icon}></i>
                </span>
                <h2>{selectedMemory.title}</h2>
                <p className="modal-date">{selectedMemory.date}</p>
                <p className="modal-description">
                  {selectedMemory.description}
                </p>
                <button
                  className="close-btn"
                  onClick={() => setSelectedMemory(null)}
                >
                  Close <i className="fa-solid fa-heart"></i>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="add-memory">
          <p>
            <i className="fa-solid fa-star"></i> More memories to come...{" "}
            <i className="fa-solid fa-star"></i>
          </p>
        </div>
      </div>
    </motion.main>
  );
};

export default Memories;
