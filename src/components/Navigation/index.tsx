import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

interface NavigationProps {
  showHome: boolean
}

const Home: React.SFC<NavigationProps> = ({ showHome }) => {
  return (
    <nav className="navigation">
      <ul>
        {showHome && (
          <li>
            <Link to="/">{`<Home>`}</Link>
          </li>
        )}
        <li>
          <Link to="/blog">{`<Blog>`}</Link>
        </li>
        <li>
          <Link to="/contact">{`<Contact>`}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Home;
