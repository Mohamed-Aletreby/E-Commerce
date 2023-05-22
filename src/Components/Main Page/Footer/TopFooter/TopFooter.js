import "./TopFooter.css";

function TopFooter() {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="footer-top__wrapper">
          <div className="footer-top__newsletter">
            <h3 className="footer-top__title footer-top__title--active">
              Sign up for Newsletter
            </h3>
            <p className="footer-top__description">
              ...and receive $20 coupon for first shopping
            </p>
            <div className="footer-top__form">
              <input
                type="email"
                placeholder="email@example.com"
                className="footer-top__input"
              />
              <button className="footer-top__button">Subscribe</button>
            </div>
          </div>
          <div className="footer-top__follow-us">
            <h3 className="footer-top__title">Follow Us</h3>
            <p className="footer-top__description">
              We make consolidating, marketing and tracking your social media
              website easy.
            </p>
            <div className="footer-top__icons">
              <div className="footer-top__icon footer-top__icon--facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="footer-top__icon footer-top__icon--twitter">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="footer-top__icon footer-top__icon--pinterest">
                <i className="fa-brands fa-pinterest"></i>
              </div>
              <div className="footer-top__icon footer-top__icon--instagram">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="footer-top__icon footer-top__icon--tumblr">
                <i className="fa-brands fa-tumblr"></i>
              </div>
            </div>
          </div>
          <div className="footer-top__download">
            <h3 className="footer-top__title">Download App</h3>
            <p className="footer-top__description">
              App is now available on App Store & Google Play. Get it now.
            </p>
            <div className="footer-top__images">
              <div className="footer-top__image">
                <img src="images/Payments/googleplay.webp" alt="" />
              </div>
              <div className="footer-top__image">
                <img src="images/Payments/applestore.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
