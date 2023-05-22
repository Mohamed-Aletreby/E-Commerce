function MiddleFooterItem({ heading, content }) {
  return (
    <div className="footer-middle__item">
      <h3 className="footer-middle__title">{heading}</h3>
      <ul className="footer-middle__list">
        {content?.map((item, index) => {
          return (
            <li className="footer-middle__list-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MiddleFooterItem;
