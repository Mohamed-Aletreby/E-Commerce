function RatingIcons({ ratingValue }) {
  const stars = [...Array(5)].map((element, index) => {
    const active = ratingValue > index;
    return active ? (
      <span className="rating__star" key={index}>
        <i className="fa-solid fa-star"></i>
      </span>
    ) : (
      <span className="rating__star" key={index}>
        <i className="fa-regular fa-star"></i>
      </span>
    );
  });

  return <div className="rating__wrapper">{stars}</div>;
}

export default RatingIcons;
