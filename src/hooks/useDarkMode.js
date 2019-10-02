import React, { useState } from 'react';

export const useDarkMode = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : value;
  });

  const setDarkMode = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  }

  return [storedValue, setDarkMode];
};