import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Final = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const colors = ['#FFD700', '#FF69B4', '#FFF'];

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.life = 100;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life--;
                this.size *= 0.95;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const handleMove = (e) => {
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(e.clientX, e.clientY));
            }
        };

        window.addEventListener('mousemove', handleMove);

        function animate() {
            ctx.fillStyle = 'rgba(0,0,0,0.1)'; // Trail effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                if (particles[i].life <= 0 || particles[i].size <= 0.2) {
                    particles.splice(i, 1);
                    i--;
                }
            }
            requestAnimationFrame(animate);
        }
        animate();

        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-black" />

            <div className="z-10 text-center pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="text-5xl md:text-6xl lg:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-retro-gold via-white to-retro-pink drop-shadow-[0_0_30px_rgba(255,105,180,0.5)] leading-tight px-4"
                >
                    Happy<br />Birthday<br />Jhanvi
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}
                    className="mt-12 text-white/50 tracking-[0.5em] text-sm"
                >
                    MOVE CURSOR / TAP TO CELEBRATE
                </motion.p>
            </div>

        </div>
    );
};

export default Final;
