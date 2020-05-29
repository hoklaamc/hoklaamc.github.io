import React from "react";
import "./Home.css";
import Navigation from "../../components/Navigation";
import SocialIcons from "../../components/SocialIcons";

const Home = () => {
  return (
    <div className="centered-container">
      <h1 className="name">Hok Laam Cheng</h1>
      <div className="description">
        <p>4th year Computer Science student at the University of Waterloo</p>
        <p>Student, developer, musician</p>
      </div>
      <SocialIcons />
      {/* <Navigation showHome={false} /> */}
    </div>
  );
}

export default Home;
