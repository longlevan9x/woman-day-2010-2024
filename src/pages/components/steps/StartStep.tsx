import Image from "next/image";
import { HeartModel } from "@/pages/models/heart.model";
import { createHeartForCube, createHeartsForCube, createHeartsForRainFall } from "@/pages/utils/util";
import { useState, useEffect } from "react";
import { Heart } from "../hearts/Heart";
import { BackgroundHearts } from "../hearts/BackgroundHearts";
import { NextButtonWithHeart } from "../buttons/NextButtonWithHeart";

export function StartStep({ onStepChange, nextStep }) {
    const [hearts, setHearts] = useState([] as HeartModel[]);
    const [startStepCount, setStartStepCount] = useState(0);
    const [heartDirection, setHeartDirection] = useState('rise');

    const [step1End, setStep1End] = useState(false);

    const _startLabels = [
        { label: 'Hãy bắt đầu bằng cách bấm vào chiếc hộp bên dưới nhé. Hãy bấm đến khi kết thúc nhé.', active: true },
        { label: 'Em là món quà quý giá nhất trong đời anh...', active: false },
        { label: 'Mỗi khoảnh khắc bên em là một kỷ niệm đáng nhớ...', active: false },
        { label: 'Hé lộ một chút những điều anh đã chuẩn bị cho em… Bắt đầu nào!', active: false },
    ];

    const [startLabels, setStartLabels] = useState(_startLabels as any[]);

    const loveCubeClick = () => {
        let _hearts: HeartModel[] = [];

        if (startStepCount == 0) {
            const _heart = createHeartForCube();
            setHeartDirection('rise');
            _hearts = [_heart];
        }
        else if (startStepCount == 1) {
            _hearts = createHeartsForCube(5);
            setHeartDirection('rise');
        }
        else if (startStepCount == 2) {
            _hearts = createHeartsForRainFall(100);
            setHeartDirection('fall');
            setStep1End(true);
        }

        setHearts(_hearts);

        setStartStepCount(startStepCount + 1);
    }

    const stepChange = () => {
        onStepChange(nextStep);
    };

    useEffect(() => {
        if (startStepCount < startLabels.length) {
            startLabels[0].active = false;
            startLabels[startStepCount].active = true;

            setStartLabels((startLabels) => [...startLabels]);
        }
    }, [startStepCount]);

    // Hook useEffect xử lý việc xóa trái tim sau 5 giây
    useEffect(() => {
        // Tạo một hàm để xóa trái tim sau 5 giây
        const timers = hearts.map((heart) =>
            setTimeout(() => {
                setHearts((prevHearts) => prevHearts.filter((item) => item.id !== heart.id));
            }, heart.animationDuration * 1000)
        );

        // // Cleanup: Hủy các setTimeout nếu component unmount
        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, [hearts]);  // Mỗi khi `hearts` thay đổi, useEffect sẽ chạy lại

    return (<>
        <div className="start-step">
            <BackgroundHearts></BackgroundHearts>
            <div className="absolute z-30 w-screen flex justify-center top-1/3">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-red-700 font-bold  text-4xl typing-animation text-center">
                        Em đã sẵn sàng chưa? Một điều kỳ diệu đang chờ đón chúng ta!
                    </p>
                    <RenderLabel startLabels={startLabels}></RenderLabel>
                </div>
            </div>

            <div className={"absolute bottom-10 w-screen flex justify-center cursor-pointer z-20  " + (step1End ? 'hidden' : '')} onClick={loveCubeClick}>
                <div className="animate__animated animate__fadeIn animate__delay-7s">
                    <Image
                        className="animate__animated animate__pulse animate__infinite   "
                        src="/images/love-cube.png"
                        alt="Love cube"
                        width={80}
                        height={90}
                        priority
                    />
                </div>
            </div>

            <div className={"absolute bottom-10 w-screen flex justify-center " + (!step1End ? 'hidden' : '')}>
                <NextButtonWithHeart text="Bắt đầu nào" className={'animation-fadein_delay-2'} onClick={stepChange}></NextButtonWithHeart>
            </div>

            <div >
                {hearts.map((heart: HeartModel, idx) => (
                    <Heart key={idx} heart={heart} directionY={heartDirection}></Heart>
                ))}
            </div>
        </div>
    </>);
}

function RenderLabel({ startLabels }) {
    // startLabels = startLabels.filter(s => s.active);

    return (<>
        {startLabels.map((label, lIdx) => (
            <div key={lIdx} className={"animate__animated animate__fadeInDown " + (lIdx === 0 ? 'animate__delay-4s' : '')}>
                <p className={"mt-8 text-3xl font-semibold text-red-700 typing-animation  " + (lIdx === 0 ? 'typing-animation_delay-4 ' : '') + (label.active ? '  ' : 'hidden ')}>
                    {label.label}
                </p>
            </div>
        ))}
    </>);
}