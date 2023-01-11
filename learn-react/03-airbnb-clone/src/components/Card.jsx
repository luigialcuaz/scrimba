import React from "react";
import require from "vite-plugin-require";
import StarImg from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card">
      <div className="card--img_container">
        {/* <img className="card--img" src={images[props.card.img]} /> */}
        <img
          className="card--img"
          src={require(`../images/${props.card.coverImg}`)}
        />
        {/* <img src={ require('./images/image1.jpg') } /> */}
        {badgeText && <p className="card--img_text">{badgeText}</p>}
      </div>
      <div className="card--stats">
        <img className="card--star" src={StarImg} />
        <p className="card--text">
          {props.card.stats.rating}
          <span className="grey">
            &#40;{props.card.stats.reviewCount}&#41;&#183;{props.card.location}
          </span>
        </p>
      </div>
      <p className="card--text">{props.card.title}</p>
      <p className="card--text">
        <span className="bold">From ${props.card.price}</span> / person
      </p>
    </section>
  );
}
