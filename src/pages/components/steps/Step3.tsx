import { NextButtonWithHeart } from "../buttons/NextButtonWithHeart";
import ParticleHearts from "../particles/Hearts";

export function Step3({ nextStep, onStepChange }) {
    const stepChange = () => {
        onStepChange(nextStep);
    };

    return (<>
        <ParticleHearts></ParticleHearts>
        <div className="w-screen h-screen flex items-center justify-center" >
            <div className="step3 w-auto rounded-lg shadow-lg p-6">
                <div className="flex justify-center flex-col items-center">
                    <div className="flex justify-center mb-4">
                        <img className="animate__animated animate__pulse animate__infinite" src="/icons/bigs/heart-1.png" alt="Love"/>
                    </div>
                    <div className="">
                    <h1 className="text-5xl font-bold text-red-500 mb-4 typing-animation">Chúc mừng ngày 20/10</h1>
                    </div>
                    <div className="flex flex-col items-center text-3xl text-red-600 font-semibold">
                        <div className="animate__animated animate__fadeInDown animate__delay-3s">
                            <p className="  mb-6 typing-animation typing-animation_delay-3">
                                Gửi đến em - người con gái anh yêu, một ngày 20/10 tràn ngập hạnh phúc và yêu thương.
                            </p>
                        </div>
                        <div className="animate__animated animate__fadeInDown animate__delay-6s">
                            <p className="  mb-6 typing-animation typing-animation_delay-6">
                                Mỗi ngày bên em đều là một ngày đặc biệt đối với anh,
                            </p>
                        </div>
                        <div className="animate__animated animate__fadeInDown animate__delay-9s">
                            <p className="  mb-6 typing-animation typing-animation_delay-9">
                                nhưng hôm nay anh muốn dành cho em những điều ngọt ngào nhất.
                            </p>
                        </div>
                        <div className="animate__animated animate__fadeInDown animate__delay-12s">
                            <p className="  mb-6 typing-animation  typing-animation_delay-12">
                                Yêu em từ tận đáy lòng.
                            </p>
                        </div>

                    </div>
                </div>
            </div >

            <div className="absolute bottom-10 w-screen flex justify-center">
                <NextButtonWithHeart text="Trở lại..." className={'animation-fadein_delay-9'} onClick={stepChange}></NextButtonWithHeart>
            </div>
        </div >
    </>);
}