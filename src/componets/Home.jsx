import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import LoopingTextAnimation from "./animation/TextAnimation";
const Home = () => {
    const words = ['Welcome', 'To', 'My', 'Website', 'Enjoy', 'Your', 'These', 'Simple', 'React', 'Apps'];
    return (
        <div className="d-flex  justify-content-center align-items-center">
            <LoopingTextAnimation words={words} />
        </div>
    )
}

export default Home