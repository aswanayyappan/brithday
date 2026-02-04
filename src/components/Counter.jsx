import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Counter = ({ onNext }) => {
    const [count, setCount] = useState(0);
    const backgroundControls = useAnimation();

    useEffect(() => {
        // Count Logic
        const duration = 4000;
        const endValue = 19;
        const startTime = Date.now();

        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * endValue));

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setTimeout(onNext, 1000);
            }
        };
        requestAnimationFrame(updateCount);

        // Tunnel Animation
        backgroundControls.start({
            scale: [1, 50],
            opacity: [1, 0],
            transition: { duration: 5, ease: "easeIn" }
        });
    }, []);

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden relative perspective-1000">

            {/* Tunnel Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 20, opacity: [0, 1, 0] }}
                        transition={{
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-[200px] h-[200px] border border-retro-gold/30 rounded-full"
                    />
                ))}
            </div>

            {/* Main Counter */}
            <div className="z-10 text-center mix-blend-difference">
                <motion.div
                    className="text-[15rem] leading-none font-serif text-white font-bold tracking-tighter"
                    animate={{ scale: [1, 1.2] }}
                    transition={{ duration: 4 }}
                >
                    {count}
                </motion.div>
                <div className="text-2xl text-retro-gold tracking-[1em] uppercase mt-4">
                    Years
                </div>
            </div>

        </div>
    );
};

export default Counter;
