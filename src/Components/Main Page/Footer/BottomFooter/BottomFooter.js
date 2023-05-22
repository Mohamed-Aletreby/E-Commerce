import "./BottomFooter.css";
function BottomFooter() {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom__content">
          <div className="footer-bottom__text">
            <p className="footer-bottom__copyright">
              © 2022
              <span className="footer-bottom__copyright--author">Aletreby</span>
              . All Rights Reserved. Powered By
              <span className="footer-bottom__copyright--author">Aletreby</span>
              .
            </p>
          </div>
          <div className="footer-bottom__payments">
            <div className="footer-bottom__image">
              <img src="images/Payments/paymentMasterCard.svg" alt="" />
            </div>
            <div className="footer-bottom__image">
              <img src="images/Payments/paymentAmex.svg" alt="" />
            </div>
            <div className="footer-bottom__image">
              <img src="images/Payments/paymentApplePay.svg" alt="" />
            </div>
            <div className="footer-bottom__image">
              <img src="images/Payments/paymentPay.svg" alt="" />
            </div>
            <div className="footer-bottom__image">
              <img src="images/Payments/paymentVisa.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
