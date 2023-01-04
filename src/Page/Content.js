import React, { useState } from "react";
import "../style/Content.css";
import ThirdStep from "../components/ThirdStep";
import FirstStep from "../components/FirstStep";
import LeftArea from "../components/LeftArea";
import SecondStep from "../components/SecondStep";
import FourthStep from "../components/FourthStep";
import LastStep from "../components/LastStep";

const addOnsArr = [
  {
    addOnName: "Online service",
    addOnDescription: "Access to multiplayer games",
    addOnPriceMonthly: 1,
    addOnPriceYearly: 10,
    selected: false,
    id: 0,
  },
  {
    addOnName: "Larger storage",
    addOnDescription: "Extra 1TB of cloud save",
    addOnPriceMonthly: 2,
    addOnPriceYearly: 20,
    selected: false,
    id: 1,
  },
  {
    addOnName: "Customizable profile",
    addOnDescription: "Custom theme on your profile",
    addOnPriceMonthly: 2,
    addOnPriceYearly: 20,
    selected: false,
    id: 2,
  },
];

const Content = () => {
  const [stepCounter, setStepCounter] = useState(0);
  const [monthlyYearly, setMonthlyYearly] = useState(true);
  const [addsOn, setAddson] = useState(addOnsArr);
  const [selectedPlanInfo, setSelectedPlanInfo] = useState({
    selectedPlan: "Arcade",
    selectedPlanPriceMonthly: 9,
    selectedPlanPriceYearly: 90,
  });
  const [validName, setValidName] = useState(null);
  const [validMail, setValidMail] = useState(null);
  const [validNumber, setValidNumber] = useState(null);

  // form validation conditions for error message and button
  const validationHandler = () => {
    if (stepCounter === 0) {
      if (validName === null && validMail !== null && validNumber !== null) {
        setValidName(false);
      } else if (
        validMail === null &&
        validName !== null &&
        validNumber !== null
      ) {
        setValidMail(false);
      } else if (
        validNumber === null &&
        validName !== null &&
        validMail !== null
      ) {
        setValidNumber(false);
      } else if (stepCounter > 0) {
        setValidName(true);
        setValidMail(true);
        setValidNumber(true);
      } else if (
        validName === null &&
        validMail === null &&
        validNumber === null
      ) {
        setValidName(false);
        setValidMail(false);
        setValidNumber(false);
      }
    }
  };

  const nextStepHandler = () => {
    if (stepCounter < 4 && validName && validMail && validNumber) {
      setStepCounter((prev) => prev + 1);
    }
    validationHandler();
  };

  const prevStepHandler = () => {
    if (stepCounter > 0) {
      setStepCounter((prev) => prev - 1);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="box-wrapper">
          <div className="flex-wrapper">
            <LeftArea stepCounter={stepCounter} />
            <div className="right-area-wrapper">
              {stepCounter === 0 && (
                <FirstStep
                  setValidMail={setValidMail}
                  setValidName={setValidName}
                  setValidNumber={setValidNumber}
                  validName={validName}
                  validMail={validMail}
                  validNumber={validNumber}
                />
              )}
              {stepCounter === 1 && (
                <SecondStep
                  monthlyYearly={monthlyYearly}
                  setMonthlyYearly={setMonthlyYearly}
                  setSelectedPlanInfo={setSelectedPlanInfo}
                  selectedPlanInfo={selectedPlanInfo}
                />
              )}
              {stepCounter === 2 && (
                <ThirdStep
                  monthlyYearly={monthlyYearly}
                  setMonthlyYearly={setMonthlyYearly}
                  addsOn={addsOn}
                  setAddson={setAddson}
                />
              )}
              {stepCounter === 3 && (
                <FourthStep
                  addsOn={addsOn}
                  selectedPlanInfo={selectedPlanInfo}
                  monthlyYearly={monthlyYearly}
                  setStepCounter={setStepCounter}
                  setSelectedPlanInfo={setSelectedPlanInfo}
                />
              )}
              {stepCounter === 4 && <LastStep />}
              {stepCounter < 4 && (
                <div
                  className={`button-wrapper ${
                    stepCounter > 0 ? "not-first-page" : ""
                  }`}
                >
                  {stepCounter > 0 && (
                    <div onClick={prevStepHandler} className="go-back">
                      Go Back
                    </div>
                  )}
                  <div
                    onClick={nextStepHandler}
                    className={`next-step ${
                      stepCounter === 3 ? "confirm-section" : ""
                    }`}
                  >
                    {`${stepCounter === 3 ? "Confirm" : "Next Step"}`}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
