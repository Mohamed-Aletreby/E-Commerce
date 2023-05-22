import React from "react";
import "./LoaderSpinner.css";

function LoadingSpinner() {
  return (
    <div className="spinner">
      <div className="spinner__circle circle-1"></div>
      <div className="spinner__circle circle-2"></div>
      <div className="spinner__circle circle-3"></div>
    </div>
  );
}

export default LoadingSpinner;
