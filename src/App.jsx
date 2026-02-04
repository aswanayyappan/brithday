import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Landing from './components/Landing';
import Friendship from './components/Friendship';
import Memory from './components/Memory';
import Counter from './components/Counter';

import Final from './components/Final';
import audioSrc from './assets/audio.mp3';

function App() {
  const [stage, setStage] = useState('landing');

  useEffect(() => {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.volume = 0.4;
      const playAudio = () => {
        audio.play().catch(err => console.log("Audio play failed:", err));
      };

      playAudio();

      // Fallback for browsers blocking autoplay
      document.addEventListener('click', playAudio, { once: true });
    }
  }, []);

  const renderStage = () => {

    switch (stage) {
      case 'landing':
        return <Landing onNext={() => {
          setStage('friendship');
        }} />;

      case 'friendship':
        return <Friendship onNext={() => setStage('memory')} />;
      case 'memory':
        return <Memory onNext={() => setStage('counter')} />;
      case 'counter':
        return <Counter onNext={() => setStage('final')} />;

      case 'final':
        return <Final />;
      default:
        return <Landing onNext={() => {
          setStage('friendship');
        }} />;

    }
  };

  return (
    <div className="min-h-screen bg-retro-black font-serif text-retro-gold relative overflow-hidden">
      {/* Film Grain Overlay */}
      <div className="film-grain"></div>

      {/* Global Audio - Hidden */}
      {/* Global Audio - Hidden */}
      <audio id="bg-music" loop>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>

      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          {renderStage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
