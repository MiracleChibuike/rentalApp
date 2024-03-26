import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import cancelIcon from "../assets/images/cancelIcon.png";
import './Personal.css'; 


const Personal = () => {
    const navigate = useNavigate(); // Use useNavigate hook

    const goToHeader = () => {
      navigate("/header"); // Use navigate function for navigation
    };
//   const history = useHistory();

//   const goToHeader = () => {
//     history.push("/header");
//   };

  return (
    <section id="personal">
      <div className="homepersonal">
        <div className="headre">
          <div className="title">
            <p>Personal Info</p>
          </div>
          <div className="cancel-home">
            <img src={cancelIcon} id="cancel-Icon" alt="" />
          </div>
        </div>
        <div className="formContentsInfo">
          <p className="userMsg">
            Note: Fields marked with (<small>*</small>) indicates a required
            field
          </p>
          <form action="">
            <div className="firstNameInput">
              <label htmlFor="firstName">
                What is your legal name? <small>*</small>{" "}
              </label>
              <input type="text" id="firstName" placeholder="First" required />
            </div>
            <div className="middleName">
              <label htmlFor="m-name">
                Middle <small>*</small>{" "}
              </label>
              <input type="text" id="m-name" required />
              <small id="Small-message">
                Required, leave blank if you don't have one
              </small>
            </div>
            <div className="last">
              <label htmlFor="l-name">
                Last <small>*</small>{" "}
              </label>
              <input type="text" id="l-name" required />
            </div>
          </form>
          <div className="next">
            <button id="NextBtn" onClick={goToHeader}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
