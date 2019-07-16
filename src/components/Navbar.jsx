import React, { useState } from 'react';

import { useDarkMode } from '../hooks/useDarkMode'; 


const Navbar = props => {
  const [darkMode, setDarkMode] = useDarkMode('isDarkModeOn', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  if(darkMode) {
    document.querySelector('body').classList.add('dark-mode');
  } else {

    document.querySelector('body').classList.remove('dark-mode');
  }

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
