import React from "react";
import checkbox from "../images/icon-checkmark.svg";

const AddOns = ({ addOn, addsOn, setAddson, monthlyYearly }) => {
  const addOnValueHandler = () => {
    setAddson(
      addsOn.map((item) => {
        if (item.id === addOn.id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      })
    );
  };
  return (
    <div
      className={`add-ons-flex-wrapper ${
        addOn.selected ? "selected-add-on" : "not-selected-add-on"
      }`}
    >
      <label htmlFor={`addon${addOn.id}`} className={`add-on-inner-wrapper`}>
        <div className="flex">
          <input
            type="checkbox"
            id={`addon${addOn.id}`}
            name="fname"
            value={addOn.addOnPriceMonthly}
            onClick={addOnValueHandler}
            defaultChecked={addOn.selected}
          />
          <div
            className={`custom-checkbox ${
              addOn.selected ? "selected-checkbox" : "not-selected-checkbox"
            }`}
          >
            <img src={checkbox} alt="checkbox" />
          </div>
        </div>
        <div className="add-on-info">
          <div className="add-on-name">{addOn.addOnName}</div>
          <div className="add-on-description">{addOn.addOnDescription}</div>
        </div>
      </label>
      <div className="add-on-price">{`+$${
        monthlyYearly
          ? addOn.addOnPriceMonthly + "/mo"
          : addOn.addOnPriceYearly + "/yr"
      }`}</div>
    </div>
  );
};

export default AddOns;
