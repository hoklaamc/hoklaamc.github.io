import React from 'react';
import {SocialIcon} from 'react-social-icons';

const socialUrls = [
  'https://www.linkedin.com/in/hoklaamc',
  'https://github.com/hoklaamc',
  'https://www.instagram.com/musicbyhok',
];

const SocialIcons = () => (
  <div className="flex justify-start gap-3">
    {socialUrls.map((url) => (
      <SocialIcon url={url} key={url} target="_blank" />
    ))}
  </div>
);

export default SocialIcons;
