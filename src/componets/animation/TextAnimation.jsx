import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoopingTextAnimation = ({ words }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        words.forEach((word, index) => {
            tl.to(containerRef.current.children[index], {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        });

        return () => {
            tl.kill();
        };
    }, [words]);

    return (
        <div ref={containerRef} style={{ display: 'flex', gap: '10px', marginTop: '50px' }}>
            {words.map((word, index) => (
                <h1 key={index} style={{ opacity: 0, transform: 'translateX(-20px)' }}>
                    {word}
                </h1>
            ))}
        </div>
    );
};

export default LoopingTextAnimation;
