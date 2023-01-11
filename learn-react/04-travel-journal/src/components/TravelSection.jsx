import React from "react";
import placeHolder from "../images/mt-fuji.png";
import pingIcon from "../images/ping-icon.png";

export default function TravelSection(props) {
  return (
    <section className="travel--section">
      <img className="travel--photo" src={placeHolder} />
      {/* <img className="travel--photo" src={require(../images/${props.image})} */}
      <section className="travel--text">
        <div className="travel--locationDiv">
          <img src={pingIcon} />
          <h3 className="travel--country">{props.country}</h3>
          <a
            className="travel--link"
            href="https://www.google.com/maps"
            target={"_blank"}
          >
            View on Google Maps
          </a>
        </div>
        {props.date}
        {props.description}
      </section>
    </section>
  );
}
