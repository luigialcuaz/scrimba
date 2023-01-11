import React from "react";
import placeHolder from "../images/mt-fuji.png";
import pingIcon from "../images/ping-icon.png";

export default function TravelSection(props) {
  return (
    <section className="travel--section">
      <img className="travel--image" src={props.image} />
      <section className="travel--textSection">
        <div className="travel--locationInfo">
          <img className="travel--ping" src={pingIcon} />
          <h3 className="travel--location">{props.location}</h3>
          <a
            className="travel--link"
            href={props.googleMapsUrl}
            target={"_blank"}
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="travel--title">{props.title}</h1>
        <p className="travel--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="travel--description">{props.description}</p>
      </section>
    </section>
  );
}
