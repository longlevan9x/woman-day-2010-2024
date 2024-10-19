import '@/styles/loading.module.scss';

import { useEffect, useState } from "react";
import { HeartSvg } from '../hearts/Heart';
import { NextButtonWithHeart } from '../buttons/NextButtonWithHeart';

export function Loading({ onStepChange, nextStep }) {
    const [backgrounds] = useState(Array.from(Array(8).keys()));
    const [frames] = useState(Array.from(Array(8).keys()));
    const [particles] = useState(Array.from(Array(8).keys()));
    const [particleChilds] = useState(Array.from(Array(12).keys()));
    const [texts] = useState(['I', 'L', 'O', 'V', 'E', 'Y', 'O', 'U', '💖']);
    const [heartIcons] = useState(Array.from(Array(6).keys()));
    const [textWelcome, setTextWelcome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setTextWelcome('Chào mừng đến với thế giới mà anh đã dành riêng cho em.');
        }, 7500);
    }, []);

    const stepChange = () => {
        onStepChange(nextStep);
    };

    return (<>
        <main className="loading overflow-hidden relative w-screen h-screen">
            {backgrounds.map((b, i) => (
                <div key={i} className={"background background" + i}></div>
            ))}

            <div className="criterion">
                {texts.map((t, i) => (
                    <div key={i} className={"text text" + i}>{t}</div>
                ))}

                {frames.map((f, i) => (
                    <div key={i} className={"frame frame" + i}></div>
                ))}

                {particles.map((p, i) => (
                    particleChilds.map((pc, ic) => (
                        <div key={(i.toString() + ic.toString())} className={"particle particle" + i + ic} ></div>
                    ))
                ))}
            </div>

            <div className='flex flex-col items-center justify-center h-screen w-screen'>
                {textWelcome &&
                    <div className="mb-24 pb-16 text-4xl font-semibold text-red-700 animate__animated animate__bounce">
                        <p className="typing-animation">{textWelcome}</p>
                    </div>
                }

                <NextButtonWithHeart text="Love U" className={'animation-fadein_delay-9'} onClick={stepChange}></NextButtonWithHeart>
            </div>
        </main>

    </>);
}