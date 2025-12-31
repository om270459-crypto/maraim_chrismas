import { createContext, useContext, useRef, useEffect, useState } from 'react';

const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => setIsLoaded(true);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Load audio if not loaded yet
    if (!audio.src) {
      audio.src = '/assets/audio/last_chrismtas.mp3';
    }

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(console.error);
  };

  const pause = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  // Auto-play on first user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!isPlaying) {
        play();
      }
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    return () => document.removeEventListener('click', handleInteraction);
  }, [isPlaying]);

  return (
    <AudioContext.Provider value={{ play, pause, toggle, isPlaying, isLoaded }}>
      <audio ref={audioRef} loop preload="none" />
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};

export default AudioProvider;
