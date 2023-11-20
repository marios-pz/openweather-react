import '../App.css';
import React, { useState, useEffect } from "react";

export const Theme = () => {
  const [isClicked, setClick] = useState(() => {
    const storedValue = localStorage.getItem("isClicked");
    return storedValue ? storedValue === "true" : false;
  });

  function updateThemeClass(element, isDarkMode) {
    element.classList.toggle("dark-theme", isDarkMode);
    for (let child of element.children) {
      updateThemeClass(child, isDarkMode);
    }
  }

  useEffect(() => {
    updateThemeClass(document.body, isClicked);
    localStorage.setItem("isClicked", isClicked);
  });


  function toggleClicked() {
    setClick((click) => !click);
  }
  return (
      <div>
        <button onClick={toggleClicked}>
            {isClicked ? "🌙" : "🔆"}
        </button>
      </div>
  );
};

export default Theme;
