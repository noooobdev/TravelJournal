import React from "react";
import data from "./Data";
ImLocation2;
import { ImLocation2 } from "react-icons/im";

function Places({ item }) {
  console.log(item);
  return (
    <div className="card-all">
      <img src={item.img} className="card-img" />
      <div className="right-side">
        <div className="location">
          <ImLocation2 color="tomato" />
          <p>{item.location}</p>
          <a href={item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h3>{item.title}</h3>
        <h6>
          {item.startDate}-{item.endDate}
        </h6>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default Places;
