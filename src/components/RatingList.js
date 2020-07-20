import PropTypes from "prop-types";
import React from "react";
import StarRatings from "react-star-ratings";

function RatingListCol({ items = [] }) {
  return (
    <div className="flex flex-col items-center p-5 w-full">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-row justify-between w-full hover:bg-teal-200"
        >
          <span className="text-sm">{item.name}</span>
          <StarRatings
            rating={item.level}
            numberOfStars={5}
            starRatedColor="#d59d2e"
            starDimension="16px"
            starSpacing="3px"
          />
        </div>
      ))}
    </div>
  );
}

RatingListCol.propTypes = {
  items: PropTypes.array.isRequired,
};

function RatingList({ items = [], title }) {
  const middleItem = items.length / 2;
  const leftItems = items.filter((item, i) => i < middleItem);
  const rightItems = items.filter((item, i) => i >= middleItem);
  return (
    <div>
      {title && <div className="font-bold text-2xl">{title}</div>}
      <div className="flex flex-col md:flex-row">
        <RatingListCol items={leftItems} />
        <RatingListCol items={rightItems} />
      </div>
    </div>
  );
}

RatingList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default RatingList;
