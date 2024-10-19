import { HeartModel } from "@/models/heart.model";
import { getRandomNum, getRandomNumberInt } from "@/utils/util";
import { useState, useEffect } from "react";

function HeartSvg({ size = 50, color = '#d7443e' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size} x="0" y="0" viewBox="0 0 391.837 391.837">
            {/* <defs>
                <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="pink" />
                    <stop offset="25%" stopColor="#d37571" />
                    <stop offset="40%" stopColor="#d7443e" />
                    <stop offset="60%" stopColor="#d7443e" />
                    <stop offset="75%" stopColor="#d37571" />
                    <stop offset="100%" stopColor="pink" />
                </linearGradient>
            </defs> */}
            <g>
                <path d="M285.257 35.528c58.743.286 106.294 47.836 106.58 106.58 0 107.624-195.918 214.204-195.918 214.204S0 248.165 0 142.108c0-58.862 47.717-106.58 106.58-106.58a105.534 105.534 0 0 1 89.339 48.065 106.578 106.578 0 0 1 89.338-48.065z"
                    fill={color}
                    // fill="url(#grad1)"
                    data-original={color} opacity="1">
                </path>
            </g>
        </svg>
    );
}

function Heart({ heart, directionY = 'rise', color = '#FB5879' }) {
    return (
        <>
            <div className={`absolute z-10 `} style={{ transform: `rotate(${heart.rotate}deg)`, opacity: heart.opacity, top: heart.top + '%', bottom: heart.bottom + '%', left: heart.left + '%', animationDuration: `${heart.animationDuration}s` }}>
                <HeartSvg size={heart.size} color={heart.color}></HeartSvg>
            </div>
        </>
    );
}

export function BackgroundHearts() {
    const _numHeart = 35;
    const [hearts, setHearts] = useState([] as HeartModel[]);
    const [colors, setColors] = useState([]);
    useEffect(() => {
        setColors(['#FB5879', '#FC879F', '#F92A53', '#FA4166', '#F23057', '#B56C7B']);
        const _hearts = [];

        for (let i = 0; i < _numHeart; i++) {
            const heart = {
                id: Date.now(),
                left: getRandomNum(5, 95, 100),
                top: getRandomNum(5, 95, 100),
                size: getRandomNum(10, 45, 100),
                active: true,
                animationDuration: getRandomNum(6, 9, 10),
                opacity: getRandomNum(0.3, 1, 1),
                rotate: getRandomNum(1, 360, 1000),
                color:  colors[getRandomNumberInt(0, 6, 10)]
            };

            _hearts.push(heart);
        }

        setHearts([..._hearts])

    }, []);
    
    return (<>
        {hearts.map((h, i) => (
            <Heart key={i} heart={h}></Heart>
        ))}
    </>);
}