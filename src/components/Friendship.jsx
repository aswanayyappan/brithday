import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Friendship = ({ onNext }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNext, setShowNext] = useState(false);

    const fullText = `I person i saw in a randomly in Idec, later again and again, one evening we just had played a football game, that the started our friendship in a different experience, later we chat with instagram, like hi , do you like demon slayer, do you watch demon slayer etc , but one day you asked me that "is I am love with you" , due the misunderstand of me and approach, she asked me . That question and answer made our friendship more deeply, now we are speaking about the everything like culture,  perspective, idealogy etc ,  you are good being with good deeds, you are not  always perfect to everyone means everything is  not perfect like some truth issue etc in your life, but you trying perfect in inform them that I am always happy 😁, your always be a silent motivate, care , kind , and angry etc , you always to complete you favourite task very deeply, you always choose to do something perfect not to bad  One, I am grateful to become your best friend`;

    return (
        <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden perspective-1000">

            <AnimatePresence>
                {!isOpen ? (
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="w-64 h-40 bg-retro-gold/20 border-2 border-retro-gold flex items-center justify-center cursor-pointer shadow-[0_0_50px_rgba(255,215,0,0.3)] hover:scale-105 transition-transform"
                    >
                        <div className="text-retro-gold font-serif text-xl tracking-widest">OPEN ME</div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ rotateX: 90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative bg-[#1a1a1a] p-4 md:p-12 max-w-2xl w-[90%] md:w-full mx-auto shadow-2xl border-t-4 border-retro-pink"
                        onAnimationComplete={() => setShowNext(true)}
                    >
                        {/* Paper texture overlay could go here */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 2 }}
                            className="font-serif text-gray-300 leading-relaxed text-sm md:text-lg lg:text-xl h-[60vh] md:h-auto overflow-y-auto"
                        >
                            {fullText}
                        </motion.div>

                        {showNext && (
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onClick={onNext}
                                className="mt-8 px-6 py-2 border border-white/20 text-white/60 hover:text-white hover:border-white transition-colors text-sm uppercase tracking-widest"
                            >
                                Turn Page
                            </motion.button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Friendship;
