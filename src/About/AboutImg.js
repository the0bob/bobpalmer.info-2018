import React from 'react';
import Constants from '../data/constants.json';

export default function() {
  const src = `${Constants.cdnUrl}img/profile3-1.jpg`;
  return (
    <img className="about-image" src={src} alt="About Me" />
  );
};
