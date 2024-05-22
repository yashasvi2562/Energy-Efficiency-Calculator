import React from "react";
import { Link } from "react-router-dom";
import "./Energy.css";
function Energy() {
  return (
    <>
      <div className="bg">
        <div className="container">
          <h1>Select the Appliance </h1>
          <div className="box">
            <div className="row1">
              <div className="icon">
                <Link to="/calculator">
                  <img
                    src="https://www.freeiconspng.com/thumbs/fridge-icon/fridge-icon-1.png"
                    alt=""
                    className="one"
                  />
                </Link>
                <h3>Fridge</h3>
              </div>
              <div className="icon">
                <Link to="/calculator">
                  <img
                    src="https://icons.veryicon.com/png/o/internet--web/line-style-digital-correlation/tv-27.png"
                    alt=""
                    className="two"
                  />
                </Link>
                <h3>TV</h3>
              </div>

              <div className="icon">
                <Link to="/calculator">
                  {" "}
                  <img
                    src="https://www.freeiconspng.com/thumbs/washing-machine-icon/household-washing-machine-icon-13.png"
                    alt=""
                    className="three"
                  />
                </Link>
                <h3>Washer</h3>
              </div>
            </div>
            <div className="row2">
              <div className="icon">
                <Link to="/calculator">
                  {" "}
                  <img
                    src="https://www.iconpacks.net/icons/2/free-air-conditioner-icon-1838-thumb.png"
                    alt=""
                    className="one"
                  />
                </Link>
                <h3>AC</h3>
              </div>

              <div className="icon">
                <Link to="/calculator">
                  <img
                    src="https://www.freeiconspng.com/thumbs/computer-icon/computer-programming-icon-computer-desktop-icon-24.png"
                    alt="Computer"
                    className="two"
                  />
                </Link>
                <h3>Computer</h3>
              </div>

              <div className="icon">
                <Link to="/calculator">
                  <img
                    src="https://static.thenounproject.com/png/210305-200.png"
                    alt="Lights"
                    className="three"
                  />
                </Link>
                <h3>Lights</h3>
              </div>
            </div>
            <div className="row3">
              <div className="icon">
                <Link to="/calculator">
                  {" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/125/125689.png"
                    alt="Microwave"
                    className="one"
                  />
                </Link>
                <h3>Microwave</h3>
              </div>

              <div className="icon">
                <Link to="/calculator">
                  {" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3565/3565450.png"
                    alt="oven"
                    className="two"
                  />
                </Link>
                <h3>Oven</h3>
              </div>

              <div className="icon">
                <Link to="/calculator">
                  {" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9960/9960553.png"
                    alt=""
                    className="three"
                  />
                </Link>
                <h3>Table Fan</h3>
              </div>
            </div>
            <div className="row4">
              <div className="icon">
                <Link to="/calculator">
                  {" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2236/2236584.png"
                    alt=""
                    className="one"
                  />
                </Link>
                <h3>Iron</h3>
              </div>

              <div className="icon">
                <Link to="/calculator">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/induction-1-204749.png?f=webp"
                    alt=""
                    className="two"
                  />
                </Link>
                <h3>Induction</h3>
              </div>

              <div className="icon">
                <Link to="/calculator">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6367/6367568.png"
                    alt="fan"
                    className="three"
                  />
                </Link>
                <h3>Hair-dryer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Energy;
