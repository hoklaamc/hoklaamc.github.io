import React from "react";
import "./Home.css";
import Navigation from "../../components/Navigation";

const Home = () => {
  return (
    <div className="centered-container">
      <h1 className="name">Hok Laam Cheng</h1>
      <div className="description">
        <p>4th year Computer Science student at the University of Waterloo</p>
        <p>Developer, musician, student</p>
      </div>
      <Navigation showHome={false} />
    </div>
  );
}

export default Home;
