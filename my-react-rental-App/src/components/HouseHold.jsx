import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlusIcon from "../assets/images/plusicon.png";
import cancelIcon from "../assets/images/cancelIcon.png";
import minusIcon from "../assets/images/minusSign.png";
// For Importing Link
import { Link } from "react-router-dom";
import "./Header.css";




const Header = () => {
     const navigate = useNavigate(); // Use useNavigate hook

     const goToResidence = () => {
       navigate("/residence"); // Use navigate function for navigation
     };

  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mainContainer">
      {/* For HouseHold Section */}
      <section className="household">
        <div className="HeaderSection">
          <div className="navLinks">
            {/* Import Link in other to navigate back to Personal Component */}
            <div className="back">
              {" "}
              <Link to="/" className="back">
                Back
              </Link>
            </div>

            <div className="section-title">
              <p>HouseHold Info</p>
            </div>
            <div className="cancel">
              <img src={cancelIcon} alt="cancelIcon" id="cancel-Icon" />
            </div>
          </div>
        </div>
        <div className="contents">
          <p>
            How many People will be living in this home, including children?{" "}
          </p>
          <div className="counts">
            <img
              src={minusIcon}
              alt="minusIcon"
              onClick={decreaseCount}
              id="minus-Icon"
            />
            <p>{count}</p>
            <img
              src={PlusIcon}
              alt="plusIcon"
              onClick={increaseCount}
              id="plus-Icon"
            />
          </div>
          <div className="next">
            <button id="NextBtn" onClick={goToResidence}>
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
