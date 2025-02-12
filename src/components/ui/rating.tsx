import React from "react";

interface RatingShowProps {
  value: number;
}

const RatingShow: React.FC<RatingShowProps> = ({ value }) => {
  return (
    <div className="rating-show md:block flex justify-center md:mb-0 mb-5">
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index + 1 <= value;
        return (
          <span
            key={index}
            style={{
              fontSize: "14px",
              margin: `0 1px`,
              color: isFilled ? "#FFD700" : "#ccc",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default RatingShow;
