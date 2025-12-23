import React from "react";

// Lightweight fallback: render a circular image for tech icons.
// This prevents creating a WebGL context per tech and avoids "Too many active WebGL contexts".
const BallCanvas = ({ icon }) => {
  return (
    <div className="w-28 h-28 flex items-center justify-center">
      <div
        className="w-20 h-20 rounded-full bg-center bg-cover shadow-card"
        style={{ backgroundImage: `url(${icon})` }}
        role="img"
        aria-label="technology icon"
      />
    </div>
  );
};

export default BallCanvas;