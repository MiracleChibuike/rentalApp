import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

import PlusIcon from "../assets/images/plusicon.png";
import cancelIcon from "../assets/images/cancelIcon.png";
import "./Residence.css"; 

const Residence = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const goToHeader = () => {
    navigate("/header"); // Use navigate function for navigation
  };

  //   To display the Add home feature

  const displayHomes = () => {
    const showHomes = document.querySelector(".homesCurrent");
    showHomes.style.display = "block";
  };

//   To display add a Past home Feature
const addPastHome = () => {
   var pastHomes = document.querySelector(".homesPast");
   var homesContainer = document.querySelector(".homePastContainer");

   // Clone the .homesPast element
   var clonedPastHomes = pastHomes.cloneNode(true);

   // Display the cloned element
   clonedPastHomes.style.display = "block";

   // Append the cloned element to the homesContainer
   homesContainer.appendChild(clonedPastHomes);

};


  

  return (
    <section id="Residence">
      <div className="contentsResidence">
        <div className="headers">
          <div className="backHeader">
            <p onClick={goToHeader}>Back</p>
          </div>
          <div className="Title-r">
            <p>Residence History</p>
          </div>
          <div className="cancel-r">
            <img src={cancelIcon} alt="" id="cancel-Icon" />
          </div>
        </div>
        <div className="contents">
          <div>
            <p>Please List your current home</p>
            <div className="homeList">
              <img src={PlusIcon} alt="" id="addHome-icon" />
              <small onClick={displayHomes} className="AddHomeText">
                Add current home
              </small>
            </div>
          </div>
          <div className="homesCurrent">
            <form action="" autoComplete="on">
              <div className="state">
                <label htmlFor="States">In which State</label>
                <select name="" id="my-select">
                  <option value="Arizona">Arizona</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="California">California</option>
                  <option value="Texas">Texas</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Uttah" id="space">
                    Uttah
                  </option>
                  <option value="Miami">Miami</option>
                </select>
              </div>
              <div className="homeAddress">
                <label htmlFor="address-home">
                  What is the street address of your home?
                </label>
                <input
                  type="text"
                  autoComplete="address"
                  placeholder="Ex: Street 112 New Texas"
                />
              </div>
              <div className="Apt">
                <label htmlFor="AptNum">What Is your apartment no?</label>
                <input type="text" placeholder="Ex: Apt 7" />
              </div>
            </form>
          </div>
          <hr />
          <div className="pastHome">
            <p>Please list the homes you lived in before your current home.</p>
            <small>Include all previous residences from the past 3 years</small>
            <div className="homeListPast">
              <img src={PlusIcon} alt="" id="addHome-icon" />
              <small id="AddPastHomeText" onClick={addPastHome}>
                Add a past home
              </small>
            </div>
            <div className="homePastContainer">
              {/* Past Homes */}
              <div className="homesPast">
                <form action="" autoComplete="on">
                  <div className="state">
                    <label htmlFor="States">In which State</label>
                    <select name="" id="my-select">
                      <option value="Arizona">Arizona</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="California">California</option>
                      <option value="Texas" selected>
                        Texas
                      </option>
                      <option value="Alabama">Alabama</option>
                      <option value="Uttah" id="space">
                        Uttah
                      </option>
                      <option value="Miami">Miami</option>
                    </select>
                  </div>
                  <div className="homeAddress">
                    <label htmlFor="address-home">
                      What is the street address of your home?
                    </label>
                    <input
                      type="text"
                      autoComplete="address"
                      placeholder="Ex: Street 112 New Texas"
                    />
                  </div>
                  <div className="Apt">
                    <label htmlFor="AptNum">What Is your apartment no?</label>
                    <input type="text" placeholder="Ex: Apt 7" />
                  </div>
                </form>
              </div>
            </div>
            <div className="checkBox">
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">
                {" "}
                <small>I am done adding homes? </small>
              </label>
            </div>
            <div className="next">
              <button id="NextBtn">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Residence