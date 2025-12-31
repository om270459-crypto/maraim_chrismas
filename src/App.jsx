import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AudioProvider } from './context/AudioContext';
import Snow from './components/Snow';
import Header from './components/Header';
import Home from './pages/Home';
import Countdown from './pages/Countdown';
import Memories from './pages/Memories';
import Messages from './pages/Messages';
import MessageExperience from './pages/MessageExperience';
import GamesIndex from './pages/Games/GamesIndex';
import MemoryGame from './pages/Games/MemoryGame';
import CatchMoment from './pages/Games/CatchMoment';
import LoveWheel from './pages/Games/LoveWheel';
import HeartPulse from './pages/Games/HeartPulse';
import LovePuzzle from './pages/Games/LovePuzzle';
import StarryNight from './pages/Games/StarryNight';
import PromiseGarden from './pages/Games/PromiseGarden';

function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Snow />
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countdown" element={<Countdown />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:id" element={<MessageExperience />} />
            <Route path="/games" element={<GamesIndex />} />
            <Route path="/games/memory" element={<MemoryGame />} />
            <Route path="/games/catch" element={<CatchMoment />} />
            <Route path="/games/wheel" element={<LoveWheel />} />
            <Route path="/games/pulse" element={<HeartPulse />} />
            <Route path="/games/puzzle" element={<LovePuzzle />} />
            <Route path="/games/stars" element={<StarryNight />} />
            <Route path="/games/garden" element={<PromiseGarden />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
