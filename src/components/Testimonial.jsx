import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Testimonial = ({ onNext }) => {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 60,
            colors: ['#FFD700', '#FF69B4']
        });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-retro-black to-pink-900/20 p-4 md:p-6">
            <div className="bg-black/80 border-2 border-retro-gold/50 p-6 md:p-10 rounded-xl max-w-3xl w-full relative shadow-2xl backdrop-blur-sm mt-10 md:mt-0">

                {/* Quote Icon */}
                <div className="absolute -top-6 left-10 text-6xl text-retro-gold background-black px-2">"</div>

                <h3 className="text-2xl text-retro-gold font-serif mb-6 text-center italic">
                    Words from a Friend
                </h3>

                <div className="text-white/80 text-lg leading-loose text-center min-h-[150px] flex items-center justify-center border border-dashed border-white/20 rounded p-6">
                    [Vignesh's birthday message will appear here]
                </div>

                <div className="mt-6 text-right text-retro-pink font-bold text-xl">
                    - Vignesh
                </div>

                <button
                    onClick={onNext}
                    className="mt-8 md:mt-12 w-full py-3 md:py-4 bg-retro-gold text-black font-bold text-base md:text-lg rounded 
                     hover:bg-white transition-colors shadow-lg"
                >
                    See Final Message
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
