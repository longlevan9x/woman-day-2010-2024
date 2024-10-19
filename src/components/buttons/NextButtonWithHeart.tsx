import { useState } from "react";
import { HeartSvg } from "../hearts/Heart";

export function NextButtonWithHeart({ onClick, text, className = '' }) {
    const [heartIcons] = useState(Array.from(Array(6).keys()));

    return (<>
        <button onClick={onClick} className={"flex items-center gap-2 bg-red-500 bg-opacity-80 opacity-0 text-white font-bold text-xl px-6 py-3 rounded-full hover:bg-rose-600 next-step-btn " + className}>
            <HeartSvg color="#fff" size={20}></HeartSvg>
            {text}
            {heartIcons.map((h, i) => (
                <div key={i} className={" absolute top-0 left-4 opacity-0 heart-fly-" + (i + 1)}>
                    <HeartSvg color="#ff6e6f" size={20}></HeartSvg>
                </div>
            ))}
        </button>
    </>);
}