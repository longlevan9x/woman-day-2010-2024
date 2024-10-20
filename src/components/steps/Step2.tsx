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
        const imgUrls = [
            'https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg',
            'https://media-be.chewy.com/wp-content/uploads/2022/09/27095740/golden-retriever-cute-dogs.jpg',
            'https://img.freepik.com/premium-photo/beautiful-cute-cat-wallpaper_662214-10222.jpg',
            'https://i.pinimg.com/736x/c3/eb/1e/c3eb1e45a80ce92a94590fc16e73da4f.jpg',
            'https://t3.ftcdn.net/jpg/05/80/74/04/360_F_580740494_9R9vqDM4zshhNeEMIFgCFYh24bVuqkNa.jpg',
            'https://t3.ftcdn.net/jpg/06/52/36/24/360_F_652362438_L0HI3l0sWg8XzZUiSxOXxM4VvW8WGCpZ.jpg',
            'https://i.pinimg.com/originals/35/43/cd/3543cd5693750c5a1bccdbbaa1267ae5.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zE2914CNsoP5NAYA6TbHCnps_ogqU3szfA&s',
            'https://png.pngtree.com/background/20230525/original/pngtree-shark-with-a-big-and-beautiful-smile-picture-image_2734824.jpg',
            'https://t3.ftcdn.net/jpg/05/72/04/56/360_F_572045630_2nkDW7ZH6SYAYGZm2qgUTNWZrREWaePA.jpg',
        ];

        const _imageList: ImageModel[] = [];
        for (let index = 0; index < 10; index++) {
            _imageList.push({
                url: imgUrls[index],
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

