import React, { useEffect } from "react";

function SpaceBackground() {
  useEffect(() => {
    // Dynamically create stars
    const numStars = 100; // Adjust the number of stars as needed
    const container = document.querySelector(".space-background");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${1 + Math.random() * 2}s`; // Randomize animation duration
      container.appendChild(star);
    }
  }, []); // Run once on component mount

  return <div className="space-background"></div>;
}

export default SpaceBackground;
