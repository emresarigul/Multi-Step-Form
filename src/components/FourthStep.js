import React from "react";
import "../style/FourthStep.css";

const FourthStep = ({
  addsOn,
  selectedPlanInfo,
  monthlyYearly,
  setStepCounter,
  setSelectedPlanInfo,
}) => {
  let sumAddsOnPrice = Number(
    monthlyYearly
      ? selectedPlanInfo.selectedPlanPriceMonthly
      : selectedPlanInfo.selectedPlanPriceYearly
  );

  for (let i = 0; i < addsOn.length; i++) {
    if (addsOn[i].selected === true && !monthlyYearly) {
      sumAddsOnPrice += addsOn[i].addOnPriceYearly;
    } else if (addsOn[i].selected === true && monthlyYearly) {
      sumAddsOnPrice += addsOn[i].addOnPriceMonthly;
    }
  }

  return (
    <div className="fourth-step-wrapper">
      <div className="heading">Finishing up</div>
      <div className="description">
        <p>Double-check everything looks OK before comfirming.</p>
      </div>
      <div className="summary-wrapper">
        <div className="plan-summary">
          <div className="selected-plan">
            <div className="plan-name">
              {` ${selectedPlanInfo.selectedPlan} ${
                monthlyYearly ? "(Monthly)" : "(Yearly)"
              } `}
            </div>
            <div
              onClick={() => {
                setStepCounter(1);
                setSelectedPlanInfo({
                  selectedPlan: selectedPlanInfo.selectedPlan,
                  selectedPlanPriceMonthly:
                    selectedPlanInfo.selectedPlanPriceMonthly,
                  selectedPlanPriceYearly:
                    selectedPlanInfo.selectedPlanPriceYearly,
                });
              }}
              className="change-plan-btn"
            >
              Change
            </div>
          </div>
          <div className="selected-plan-price">
            {`$${
              monthlyYearly
                ? selectedPlanInfo.selectedPlanPriceMonthly
                : selectedPlanInfo.selectedPlanPriceYearly
            }${monthlyYearly ? "/mo" : "/yr"}`}
          </div>
        </div>
        <div className="add-ons-summary">
          {addsOn
            .filter((filteredAddsOn) => {
              return filteredAddsOn.selected === true;
            })
            .map((addOnElement, index) => {
              return (
                <div key={index} className="add-on-inner-wrapper">
                  <div className="add-on-name">{addOnElement.addOnName}</div>
                  <div className="add-on-price">
                    {`+$${
                      monthlyYearly
                        ? addOnElement.addOnPriceMonthly + "/mo"
                        : addOnElement.addOnPriceYearly + "/yr"
                    }`}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="total-price-wrapper">
        <div className="total">Total (per month)</div>
        <div className="total-price">{`+$${sumAddsOnPrice}${
          monthlyYearly ? "/mo" : "/yr"
        }`}</div>
      </div>
    </div>
  );
};

export default FourthStep;
