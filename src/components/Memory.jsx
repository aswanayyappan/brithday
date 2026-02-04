import React, { useRef, useState, useEffect } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';

import mem1 from '../assets/memories/memory-1.jpg';
import mem2 from '../assets/memories/memory-2.jpg';
import mem3 from '../assets/memories/memory-3.webp';
import mem4 from '../assets/memories/memory-4.webp';
import mem5 from '../assets/memories/memory-5.mp4';
import mem6 from '../assets/memories/memory-6.mp4';
import mem7 from '../assets/memories/memory-7.mp4';
import mem8 from '../assets/memories/memory-8.mp4';
import mem9 from '../assets/memories/memory-9.mp4';
import mem10 from '../assets/memories/memory-10.mp4';
import mem11 from '../assets/memories/memory-11.mp4';
import mem12 from '../assets/memories/memory-12.mp4';
import mem13 from '../assets/memories/memory-13.jpg';
import mem14 from '../assets/memories/memory-14.jpg';
import mem15 from '../assets/memories/memory-15.jpg';
import mem16 from '../assets/memories/memory-16.jpg';
import mem17 from '../assets/memories/memory-17.jpg';
import mem18 from '../assets/memories/memory-18.jpg';
import mem19 from '../assets/memories/memory-19.jpg';

const Memory = ({ onNext }) => {
    // Detect mobile size
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Infinite canvas logic: we just allow dragging a large container
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

    const bind = useDrag(({ offset: [ox, oy] }) => {
        if (!isMobile) {
            api.start({ x: ox, y: oy });
        }
    });

    const memories = [
        { type: 'photo', id: 1, src: mem1, caption: 'First Meeting', x: 100, y: 100, rot: -5 },
        { type: 'photo', id: 2, src: mem2, caption: 'Football Game', x: 400, y: -50, rot: 3 },
        { type: 'photo', id: 3, src: mem3, caption: 'Random Walks', x: -200, y: 200, rot: -2 },
        { type: 'photo', id: 4, src: mem4, caption: 'Classroom Fun', x: -300, y: -100, rot: -4 },
        { type: 'video', id: 5, src: mem5, caption: 'Reel: Dance', x: 150, y: 500, rot: 5 },
        { type: 'video', id: 6, src: mem6, caption: 'Reel: Crazy Moments', x: 0, y: -300, rot: 6 },
        { type: 'video', id: 7, src: mem7, caption: 'Reel: Travel', x: 300, y: 700, rot: -5 },
        { type: 'video', id: 8, src: mem8, caption: 'Reel: Birthday Prep', x: 700, y: 100, rot: 3 },
        { type: 'video', id: 9, src: mem9, caption: 'Reel: Gang Fits', x: -400, y: 50, rot: 4 },
        { type: 'video', id: 10, src: mem10, caption: 'Reel: Lunch Breaks', x: 200, y: -400, rot: -1 },
        { type: 'video', id: 11, src: mem11, caption: 'Reel: Good Times', x: 500, y: 300, rot: 2 },
        { type: 'video', id: 12, src: mem12, caption: 'Reel: More Fun', x: -500, y: -200, rot: -3 },
        { type: 'photo', id: 13, src: mem13, caption: 'Candid Shot', x: 600, y: -300, rot: 5 },
        { type: 'photo', id: 14, src: mem14, caption: 'Group Selfie', x: -600, y: 200, rot: -4 },
        { type: 'photo', id: 15, src: mem15, caption: 'Smile', x: 0, y: 600, rot: 1 },
        { type: 'photo', id: 16, src: mem16, caption: 'Laughter', x: 400, y: 500, rot: 3 },
        { type: 'photo', id: 17, src: mem17, caption: 'Besties', x: -200, y: -500, rot: -2 },
        { type: 'photo', id: 18, src: mem18, caption: 'Memories', x: 300, y: -600, rot: 4 },
        { type: 'photo', id: 19, src: mem19, caption: 'Forever', x: -500, y: 500, rot: -3 },
    ];

    return (
        <div className="w-full h-screen bg-[#050505] overflow-hidden relative cursor-grab active:cursor-grabbing touch-none font-sans text-gray-900">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            {/* Header */}
            <div className="absolute top-0 left-0 w-full text-center z-50 pt-8 pb-4 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none">
                <h2 className="text-retro-gold font-serif text-2xl md:text-3xl opacity-80 tracking-widest uppercase">
                    Memories
                </h2>
                <p className="text-white/50 text-sm md:text-base">
                    {isMobile ? "Scroll to explore" : "Drag to explore"}
                </p>
            </div>

            {/* Main Content Area */}
            {isMobile ? (
                <div className="absolute inset-0 overflow-y-auto pt-32 pb-32 px-4 md:px-10 scrollbar-hide">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {memories.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-3 md:p-4 shadow-xl transform transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl rotate-0 hover:rotate-2 group"
                            >
                                <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative border border-gray-200">
                                    {item.type === 'video' ? (
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.caption}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <animated.div
                    {...bind()}
                    style={{ x, y }}
                    className="absolute top-1/2 left-1/2 w-0 h-0" // Center origin
                >
                    {memories.map((item) => (
                        <div
                            key={item.id}
                            className="absolute bg-white p-3 shadow-2xl transition-transform hover:z-50 hover:scale-110 duration-300 w-64"
                            style={{
                                transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rot}deg)`,
                            }}
                        >
                            <div className="aspect-[4/5] bg-gray-200 flex items-center justify-center overflow-hidden relative">
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover pointer-events-none"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.caption}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </animated.div>
            )}

            {/* Continue Button */}
            <div className="absolute bottom-0 left-0 w-full z-50 pb-8 pt-4 bg-gradient-to-t from-[#050505] to-transparent flex justify-end px-10 pointer-events-none">
                <button
                    onClick={onNext}
                    className="pointer-events-auto px-8 py-3 bg-white text-black font-bold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-retro-gold hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2"
                >
                    Continue <span>&rarr;</span>
                </button>
            </div>
        </div>
    );
};
export default Memory;
