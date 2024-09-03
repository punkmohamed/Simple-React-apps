import { useEffect, useRef } from "react";

import { gsap } from "gsap";
const useAnimation = () => {
    const qrContainerRef = useRef(null);
    const scanContainerRef = useRef(null);
    const titleRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 3.5, ease: 'power3.out' }
        );

        gsap.fromTo(
            qrContainerRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 3.5, ease: 'power3.out', delay: 1 }
        );

        gsap.fromTo(
            scanContainerRef.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 3.5, ease: 'power3.out', delay: 1 }
        );
    }, []);
    return { titleRef, scanContainerRef, qrContainerRef }
}

export default useAnimation