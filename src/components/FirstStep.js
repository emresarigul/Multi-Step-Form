import React from "react";
import "../style/FirstStep.css";

const FirstStep = ({
  setValidName,
  setValidMail,
  setValidNumber,
  validName,
  validMail,
  validNumber,
}) => {
  // form validation patterns
  const namePattern = /^[A-Za-z]+ [A-Za-z0-9_]{3,29}$/;
  const mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const numberPattern = /^[0-9]{10,20}$/;

  //validation handlers
  const validNameHandler = (e) => {
    if (e.target.value.match(namePattern)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  const validMailHandler = (e) => {
    if (e.target.value.match(mailPattern)) {
      setValidMail(true);
    } else {
      setValidMail(false);
    }
  };

  const validNumberHandler = (e) => {
    if (e.target.value.match(numberPattern)) {
      setValidNumber(true);
    } else {
      setValidNumber(false);
    }
  };

  return (
    <div className="first-step-wrapper">
      <div className="heading">Personal info</div>
      <div className="description">
        <p>Please provide your name, email address and phone number.</p>
      </div>
      <form action="">
        <label htmlFor="name">
          <div>Name</div>
          {validName === false && (
            <div className="warning-text">This field is required</div>
          )}
        </label>
        <input onChange={validNameHandler} type="text" id="name" name="name" />
        <label htmlFor="mail">
          <div>Email Address</div>
          {validMail === false && (
            <div className="warning-text">This field is required</div>
          )}
        </label>
        <input onChange={validMailHandler} type="email" id="mail" />
        <label htmlFor="phone">
          <div>Phone Number</div>
          {validNumber === false && (
            <div className="warning-text">This field is required</div>
          )}
        </label>
        <input onChange={validNumberHandler} type="tel" id="phone" />
      </form>
    </div>
  );
};

export default FirstStep;
