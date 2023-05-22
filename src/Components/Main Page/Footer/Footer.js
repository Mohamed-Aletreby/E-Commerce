import TopFooter from "./TopFooter/TopFooter";
import MiddleFooter from "./MiddleFooter/MiddleFooter";
import BottomFooter from "./BottomFooter/BottomFooter";
import footerData from "./FooterData";

function Footer() {
  return (
    <div className="footer">
      <TopFooter />
      <MiddleFooter middleFooterContent={footerData} />
      <BottomFooter />
    </div>
  );
}

export default Footer;
