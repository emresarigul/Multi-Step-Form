import React from "react";
import "../style/LeftArea.css";
const LeftArea = ({ stepCounter }) => {
  const stepArr = [
    {
      steps: 1,
      stepInfo: "YOUR INFO",
    },
    {
      steps: 2,
      stepInfo: "SELECT PLAN",
    },

    {
      steps: 3,
      stepInfo: "ADD-ONS",
    },
    {
      steps: 4,
      stepInfo: "SUMMARY",
    },
  ];

  return (
    <div className="left-area-wrapper">
      <div className="steps">
        {stepArr.map((step, index) => {
          const { steps, stepInfo } = step;
          return (
            <div key={index} className="flex">
              <div
                className={`number ${
                  stepCounter === index ? "active-step" : ""
                } ${stepCounter === 4 && index === 3 ? "active-step" : ""}`}
              >
                {steps}
              </div>
              <div className="text">
                <div className="step-text">{`STEP ${steps}`}</div>
                <div className="step-info">{stepInfo}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftArea;
