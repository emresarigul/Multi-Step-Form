import React from "react";
import "../style/SecondStep.css";
import arcade from "../images/icon-arcade.svg";
import pro from "../images/icon-pro.svg";
import advanced from "../images/icon-advanced.svg";

const SecondStep = ({
  monthlyYearly,
  setMonthlyYearly,
  setSelectedPlanInfo,
  selectedPlanInfo,
}) => {
  const planArr = [
    {
      planImg: arcade,
      planName: "Arcade",
      planPriceMonthly: 9,
      planPriceYearly: 90,
    },
    {
      planImg: advanced,
      planName: "Advanced",
      planPriceMonthly: 12,
      planPriceYearly: 120,
    },
    {
      planImg: pro,
      planName: "Pro",
      planPriceMonthly: 15,
      planPriceYearly: 150,
    },
  ];

  const monthlyYearlyHandler = () => {
    setMonthlyYearly(!monthlyYearly);
  };

  return (
    <div className="second-step-wrapper">
      <div className="heading">Select Your Plan</div>
      <div className="description">
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="plan-wrapper">
        {planArr.map((plan, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelectedPlanInfo({
                  selectedPlan: plan.planName,
                  selectedPlanPriceMonthly: plan.planPriceMonthly,
                  selectedPlanPriceYearly: plan.planPriceYearly,
                });
              }}
              className={`plan ${
                selectedPlanInfo.selectedPlan === plan.planName
                  ? "selected"
                  : ""
              }`}
            >
              <div className="plan-image">
                <img src={plan.planImg} alt="arcade" />
              </div>
              <div className="plan-info">
                <div className="plan-name">{plan.planName}</div>
                <div className="plan-price">
                  {`$${
                    monthlyYearly === true
                      ? plan.planPriceMonthly + "/mo"
                      : plan.planPriceYearly + "/yr"
                  }`}
                </div>
                {!monthlyYearly && (
                  <div className="yearly-free-months">2 months free</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="monthly-yearly-option">
        <div className={`monthly ${monthlyYearly ? "bold-blue" : ""}`}>
          Monthly
        </div>
        <div
          onClick={monthlyYearlyHandler}
          className={`switcher ${!monthlyYearly ? "yearly" : ""}`}
        ></div>
        <div className={`yearly ${!monthlyYearly ? "bold-blue" : ""}`}>
          Yearly
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
