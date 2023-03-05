import { useState, useEffect } from "react";
import anime from "animejs";

export const Stars = () => {
    const [num, setNum] = useState(30);
    const [vw, setVw] = useState(
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    );
    const [vh, setVh] = useState(
        Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    );

    useEffect(() => {
        starryNight();
    }, []);

    const starryNight = () => {
        anime({
            targets: ["#sky .star"],
            opacity: [
                {
                    duration: 2000,
                    value: "0",
                },
                {
                    duration: 3000,
                    value: "1",
                },
            ],
            easing: "linear",
            loop: true,
            delay: (el, i) => 50 * i,
        });
    };

    const randomRadius = () => {
        return Math.random() * 0.7 + 0.6;
    };

    const getRandomX = () => {
        return Math.floor(Math.random() * Math.floor(vw)).toString();
    };

    const getRandomY = () => {
        return Math.floor(Math.random() * Math.floor(vh)).toString();
    };

    return (
        <div className="w-full h-screen absolute top-0 left-0 z-0 max-sm:hidden">
            <svg id="sky" className="h-screen m-0 overflow-hidden p-0 absolute w-full">
                {[...Array(num)].map((x, y) => (
                    <circle
                        cx={getRandomX()}
                        cy={getRandomY()}
                        r={randomRadius()}
                        stroke="none"
                        strokeWidth="0"
                        fill="white"
                        key={y}
                        className="star"
                    />
                ))}
            </svg>
        </div>
    );
};
