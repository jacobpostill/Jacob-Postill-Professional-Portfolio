import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="grid-container">
        <div className="grid-item">
          <Link to="/about">About</Link>
        </div>
        <div className="grid-item">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="grid-item">
          <Link to="/resume">Resume</Link>
        </div>
        <div className="grid-item">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}