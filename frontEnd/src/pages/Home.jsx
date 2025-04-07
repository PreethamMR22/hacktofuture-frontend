import React from "react";
import "./home.css";

const Home = ({ shiftRight }) => {
  return (
    <div className={`home ${shiftRight ? "shifted" : ""}`}>
      <div className="top-cards">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>

      <div className="requests">
        <div className="request-card">Request A</div>
        <div className="request-card">Request B</div>
        <div className="request-card">Request C</div>
      </div>
    </div>
  );
};

export default Home;
