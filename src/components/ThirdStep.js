import React from "react";
import "../style/ThirdStep.css";
import AddOns from "./AddOns";

const ThirdStep = ({ monthlyYearly, addsOn, setAddson }) => {
  return (
    <div className="third-step-wrapper">
      <div className="heading">Pick add-ons</div>
      <div className="description">
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <form action="">
        {addsOn.map((addOn) => {
          return (
            <AddOns
              key={addOn.id}
              addOn={addOn}
              addsOn={addsOn}
              setAddson={setAddson}
              monthlyYearly={monthlyYearly}
            />
          );
        })}
      </form>
    </div>
  );
};

export default ThirdStep;
