import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import './MessageExperience.css';

const messages = [
  { id: 1, title: 'A Letter of Love', content: 'Every moment with you is a treasure I hold close to my heart Just Be With Me Forever I Love You Maryomty...' },
  { id: 2, title: 'Our Journey', content: 'From the first day we met, I knew you were special Specail In Every Moment With You You Are Apart Of My Heart Maryomty...' },
  { id: 3, title: 'Dreams Together', content: 'In my dreams, we walk hand in hand through endless fields of flowers Just You And Me No One Else Watching Sunrise In This Feilds Between Flowers...' },
  { id: 4, title: 'Forever Yours', content: 'With every sunrise, my love for you grows stronger Being Bigger Day By Day...' },
];

const MessageExperience = () => {
  const { id } = useParams();
  const messageIndex = parseInt(id) - 1;
  const message = messages[messageIndex] || messages[0];
  const nextId = messageIndex < messages.length - 1 ? parseInt(id) + 1 : null;
  const prevId = messageIndex > 0 ? parseInt(id) - 1 : null;

  return (
    <motion.main
      className="message-experience"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="message-card">
        <h1 className="message-title">{message.title}</h1>
        <p className="message-content">{message.content}</p>
        
        <div className="message-nav">
          {prevId && (
            <Link to={`/messages/${prevId}`} className="message-btn prev">
              ← Previous
            </Link>
          )}
          {nextId ? (
            <Link to={`/messages/${nextId}`} className="message-btn next">
              Next →
            </Link>
          ) : (
            <Link to="/" className="message-btn finish">
              ❤️ Finish
            </Link>
          )}
        </div>
      </div>
    </motion.main>
  );
};

export default MessageExperience;
