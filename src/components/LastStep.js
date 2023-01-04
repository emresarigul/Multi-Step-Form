import React from "react";
import "../style/LastStep.css";
import thankYouImage from "../images/icon-thank-you.svg";

const LastStep = () => {
  return (
    <div className="last-step-wrapper">
      <div className="thank-you-img">
        <img src={thankYouImage} alt="thankYouImage" />
      </div>
      <div className="thank-you-text">Thank you!</div>
      <div className="thank-you-description">
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default LastStep;
