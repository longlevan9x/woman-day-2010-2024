import { HeartModel } from "../models/heart.model";

export function getRandomNum(start: number, end: number, step: number): number {
    let ranNum = start - 1;

    while (ranNum < start || ranNum > end) {
        ranNum = Math.random() * step;
    }

    return ranNum;
}

export function getRandomNumberInt(start: number, end: number, step: number) {
    return Math.floor(getRandomNum(start, end, step));
}

export function createHeartForCube(): HeartModel {
    return {
        id: Date.now(),
        left: getRandomNum(48, 49, 100),
        bottom: 11,
        size: getRandomNum(50, 80, 100),
        active: true,
        animationDuration: getRandomNum(6, 9, 10)
    };
}

export function createHeartsForCube(count = 3): HeartModel[] {
    const hearts = [];

    for (let i = 0; i < count; i++) {
        const heart = {
            id: Date.now(),
            left: getRandomNum(44, 54, 100),
            bottom: 11,
            size: getRandomNum(50, 80, 100),
            active: true,
            animationDuration: getRandomNum(6, 9, 10)
        };

        hearts.push(heart);
    }

    return hearts;
}

export function createHeartsForRainFall(count = 50): HeartModel[] {
    const hearts = [];

    for (let i = 0; i < count; i++) {
        const heart = {
            id: Date.now(),
            left: getRandomNum(5, 95, 100),
            bottom: 100,
            size: getRandomNum(30, 80, 100),
            active: true,
            opacity: getRandomNum(0.5, 1, 1),
            animationDuration: getRandomNum(2, 9, 10)
        };

        hearts.push(heart);
    }

    return hearts;
}


