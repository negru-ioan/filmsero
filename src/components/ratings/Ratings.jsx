import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "./ratings.scss";

import "@smastrom/react-rating/style.css";

function Ratings({ voteAverage, voteCount, mobile }) {
  return (
    <div className="ratings">
      <div className="ratings__container ratings__left">
        <h2 style={{ fontSize: mobile && "21px" }}>
          {voteAverage.toPrecision(2)}{" "}
          <span style={{ fontWeight: 400 }}>/</span> 10
        </h2>
        <div style={{ padding: mobile && "0 28px" }}>
          <Rating
            style={{ maxWidth: 160 }}
            readOnly
            value={voteAverage / 2}
            itemStyles={{
              itemShapes: ThinStar,
              activeFillColor: "#f59e0b",
              inactiveFillColor: "#ffedd5",
            }}
          />
        </div>
      </div>
      <div className="ratings__container ratings__right">
        <h2 style={{ fontSize: mobile && "21px" }}>{voteCount}</h2>
        <h3 style={{ fontSize: mobile && "17px" }}>Vote Count</h3>
      </div>
    </div>
  );
}

export default Ratings;
