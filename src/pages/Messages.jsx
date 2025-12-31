import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Messages.css';

const Messages = () => {
  return (
    <motion.main
      className="messages-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="messages-container">
        <motion.div 
          className="envelope"
          initial={{ rotateY: 0 }}
          whileHover={{ rotateY: 10, scale: 1.05 }}
        >
          <span className="envelope-icon"><i className="fa-solid fa-envelope-open-text"></i></span>
        </motion.div>

        <h1 className="messages-title">Messages for You</h1>
        <p className="messages-subtitle">
          I've written some special words just for you...
        </p>
        
        <div className="message-preview">
          <p>"Every love story is beautiful, but ours is my favorite..."</p>
        </div>

        <Link to="/messages/1" className="messages-start-btn">
          <span>Open My Heart</span>
          <span className="btn-heart"><i className="fa-solid fa-heart"></i></span>
        </Link>

        <div className="message-count">
          <i className="fa-solid fa-envelope"></i> 4 love letters waiting for you
        </div>
      </div>
    </motion.main>
  );
};

export default Messages;
