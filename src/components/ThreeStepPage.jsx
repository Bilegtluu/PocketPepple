import React, { useState } from "react";
import { Logo } from "./logo/Logo";
import { Money } from "./logo/Money";
import { Cash } from "./logo/Cash";
import { Done } from "./logo/Done";
import Link from "next/link";

const ThreeStepPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const valutValue = [
    " MNT - Mongol Tugrik ",
    "USD - 	Америк доллар",
    "EUR - Eвро",
    "CNY - 	Английн фунт",
    "GBP - Оросын рубль",
    "RUB - Хятадын юань",
    "KRW - 	БНСУ-ын вон",
    "CAD - Канад доллар",
    "NZD - 	Шинэ Зеландын Доллар",
    "AUD - 	Австрали доллар",
    "HKD - 	Гонконг доллар",
    "SGD - 	Сингапур доллар",
    "CHF - Швейцарь франк",
    "SEK - Швед крон",
    "TRY - Туркийн Лир",
    "THB - Тайландын бат",
  ];

  return (
    <div className="three-step-page">
      <div className="step-content">
        {currentStep === 1 && (
          <>
            <div className=" flex justify-center items-center flex-col p-10 gap-28">
              <div className="flex justify-center items-center gap-12 flex-col">
                <div className=" flex items-center text ">
                  <Logo />
                  Pocket Pebble
                </div>
                <ul className="steps">
                  <li className="step step-primary">Currency</li>
                  <li className="step ">Balance</li>
                  <li className="step ">Finish</li>
                </ul>
              </div>

              <div className="flex flex-col  gap-6">
                <div className="flex justify-center items-center flex-col gap-4">
                  <Money />
                  <div className="text">Select base currency</div>
                </div>
                <select className=" bg-gray-200 p-4 rounded-lg border-y border-x border-gray-300">
                  {valutValue.map((props) => {
                    return (
                      <>
                        <option>{props}</option>
                      </>
                    );
                  })}
                </select>
                <div className=" text-xs self-stretch w-96">
                  Your base currency should be the one you use most often. All
                  transaction in other currencies will be calculated based on
                  this one
                </div>
                <button
                  className="button btn text-white "
                  onClick={handleNextStep}
                >
                  Confirm
                </button>
              </div>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className=" flex justify-center items-center flex-col p-10 gap-28">
              <div className="flex justify-center items-center gap-12 flex-col">
                <div className=" flex items-center text ">
                  <Logo />
                  Pocket Pebble
                </div>
                <ul className="steps">
                  <li className="step step-primary">Currency</li>
                  <li className="step step-primary">Balance</li>
                  <li className="step ">Finish</li>
                </ul>
              </div>

              <div className="flex flex-col  gap-6">
                <div className="flex justify-center items-center flex-col gap-4">
                  <Cash />
                  <div className="text">Set up your cash Balance</div>
                </div>
                <input className="input" type="e-mail" placeholder="Email" />
                <div className=" text-xs self-stretch w-96">
                  How much cash do you have in your wallet?
                </div>
                <button
                  className="button btn text-white "
                  onClick={handleNextStep}
                >
                  Confirm
                </button>
              </div>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div className=" flex justify-center items-center flex-col p-10 gap-28">
              <div className="flex justify-center items-center gap-12 flex-col">
                <div className=" flex items-center text ">
                  <Logo />
                  Pocket Pebble
                </div>
                <ul className="steps">
                  <li className="step step-primary">Currency</li>
                  <li className="step step-primary">Balance</li>
                  <li className="step step-primary">Finish</li>
                </ul>
              </div>

              <div className="flex flex-col  gap-6">
                <div className="flex justify-center items-center flex-col gap-4">
                  <Done />
                  <div className="text">Good Job!</div>
                </div>
                <div className=" text-center text-xs self-stretch w-96">
                  Your very first account has been created. Now continue to
                  dashboard and start tracking
                </div>
                <button className="button btn text-white ">
                  <Link href="/account">Go to Dashboard</Link>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ThreeStepPage;
