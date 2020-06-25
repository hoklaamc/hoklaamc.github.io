import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./SocialIcons.css";

const SocialIcons = () => (
  <div className="icons">
    <SocialIcon className="icon" url="https://www.linkedin.com/in/hoklaamc/" target="_blank" />
    <SocialIcon className="icon" url="https://github.com/hoklaamc" target="_blank" />
    <SocialIcon className="icon" url="https://www.instagram.com/musicbyhok/" target="_blank" />
  </div>
);

export default SocialIcons;
