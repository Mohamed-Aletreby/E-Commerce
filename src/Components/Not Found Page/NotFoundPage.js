import React from "react";
import Navbar from "../Main Page/Navbar/Navbar";

import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="error-page">
        <div className="container">
          <div className="error-page__wrapper">
            <div className="error-page__image">
              <img src="./images/error-404.webp" alt="404 error page" />
            </div>
            <div className="error-page__message">
              <h2>oops! page not found.</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
