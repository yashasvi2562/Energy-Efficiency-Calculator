import React from "react";
import { Link } from "react-router-dom";
import calculator_icon from "../assets/ca.png";
import Typed from "typed.js";
import { useEffect } from "react";
import "./Home.css";
function Home() {
  useEffect(() => {
    const typed = new Typed(".text", {
      strings: [" Energy", " Environment", " Earth"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="">
        <h1>EcoCal</h1>
        <div className="page">
          <div className="home">
            <div className="energy">
              <p>
                <h3>
                  Get to know the energy consumed and the energy-efficiency of
                  your home appliances.
                </h3>
              </p>
              <h1>
                {" "}
                Save
                <span className="text"></span>
              </h1>
              <p>
                Improving energy efficiency is crucial for reducing energy
                consumption, lowering greenhouse gas emissions, and saving money
                on energy bills. This can be achieved through various measures
                such as upgrading equipment to more efficient models, optimizing
                processes, implementing energy management systems, and adopting
                energy-efficient practices in buildings and transportation.
              </p>
            </div>
            <div className="but">
              <Link to="/energy">
                <button className="click"> Calculate Now</button>
              </Link>
            </div>
          </div>

          <div className="cal">
            <div className="pic">
              <img className="image" src={calculator_icon} alt="calculator" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
