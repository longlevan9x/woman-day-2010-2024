import { ImageModel } from "@/models/image.model";
import { CSSProperties, useEffect, useState } from "react";
import ParticleHeart from "../particles/Heart";
import { NextButtonWithHeart } from "../buttons/NextButtonWithHeart";
import Image from "next/image";

export function Step2({ onStepChange, nextStep }) {
    const [imageList, setImageList] = useState([] as ImageModel[]);
    const [rotateY, setRotateY] = useState(0);

    const stepChange = () => {
        onStepChange(nextStep);
    };

    useEffect(() => {
        const _imageList: ImageModel[] = [];
        for (let index = 0; index < 10; index++) {
            _imageList.push({
                url: `/images/loves/love-${index + 1}.jpg`,
                id: Date.now(),
                name: 'Love 1',
                rotateDeg: index
            });
        }

        setImageList(items => [..._imageList]);

    }, []);

    useEffect(() => {
        setTimeout(() => {
            // if(rotateY >= imageList.length ) {
            //     // setRotateY(0);
            // }else {
            //     setRotateY(rotateY + 1);
            // }
            setRotateY(rotateY + 1);
        }, 3000);
    }, [rotateY]);

    return (
        <>
            <ParticleHeart></ParticleHeart>
            <div className="step2 holder flex h-screen w-screen items-center justify-center">
                <div className="rotate " style={{ '--rttY': rotateY } as CSSProperties}>
                    {imageList.map((image, index) => (
                        <div key={index} className={"panel image-" + index + ' '} style={{ '--i': index } as React.CSSProperties}>
                            <Image src={image.url} alt={image.name} width={1000} height={1000}/>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-10 w-screen flex justify-center">
                    <NextButtonWithHeart text="Còn nữa mà..." className={'animation-fadein_delay-2'} onClick={stepChange}></NextButtonWithHeart>
                </div>
            </div>
        </>
    );
}

