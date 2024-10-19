import { useState } from "react";
import { HeartSvg } from "../components/hearts/Heart";
import { Loading } from "../components/steps/Loading";
import { StartStep } from "../components/steps/StartStep";
import { Step2 } from '../components/steps/Step2';
import { Step3 } from "../components/steps/Step3";

export default function Home() {
  const _steps = [
    { name: 'Chuẩn bị', },
    { name: 'Bắt đầu' },
    { name: 'Kỉ niệm' },
  ];

  const [curStep, setCurStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [closeClass, setCloseClass] = useState('');
  const [openClass, setOpenClass] = useState('');

  const stepChange = (newStep: number) => {
    setCloseClass('animate__lightSpeedOutLeft');
    setTimeout(() => {
      setCloseClass('');
      setOpenClass('animate__lightSpeedInRight')
      setCurStep(newStep);
    }, 1500);
  }

  return (
    <main>
      <div className={` font-[family-name:var(--font-geist-sans)]`}>
        <div className={"bg-gradient-to-br from-red-200 to-pink-200 w-screen h-screen overflow-hidden "}>
          <div className={"w-screen h-screen overflow-hidden animate__animated " + openClass + " " + closeClass}>
            {curStep === 0 && <Loading nextStep={1} onStepChange={stepChange}></Loading>}
            {curStep === 1 && <StartStep nextStep={2} onStepChange={stepChange}></StartStep>}
            {curStep === 2 && <Step2 nextStep={3} onStepChange={stepChange}></Step2>}
            {curStep === 3 && <Step3 nextStep={2} onStepChange={stepChange}></Step3>}
          </div>
        </div>
      </div>
    </main>
  );
}
