import React from 'react'
import './Banner.css'

function Banners() {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner__cards">
          <div className="banner__card">
            <div className="card__img">
              <img src="./images/banner-1.png" alt="banner one" />
            </div>
            <div className="card__body">
              <h3 className="card__title">The Best Organic Products Online</h3>
              <div className="card__link">
                <a href="#/">
                  shop now
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="banner__card">
            <div className="card__img">
              <img src="./images/banner-2.png" alt="banner two" />
            </div>
            <div className="card__body">
              <h3 className="card__title">
                Make your Breakfast Healthy and Easy
              </h3>
              <div className="card__link">
                <a href="#/">
                  shop now
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="banner__card">
            <div className="card__img">
              <img src="./images/banner-3.png" alt="banner three" />
            </div>
            <div className="card__body">
              <h3 className="card__title">The best Organic Products Online</h3>
              <div className="card__link">
                <a href="#/">
                  shop now
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banners