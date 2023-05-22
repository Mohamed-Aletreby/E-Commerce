import "./MiddleFooter.css";
import MiddleFooterItem from "./MiddleFooterItem";
function MiddleFooter({ middleFooterContent }) {
  return (
    <div className="footer-middle">
      <div className="container">
        <div className="footer-middle__wrapper">
          <div className="footer-middle__items">
            {middleFooterContent?.map((item) => {
              return (
                <MiddleFooterItem
                  key={item.id}
                  heading={item.heading}
                  content={item.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleFooter;
