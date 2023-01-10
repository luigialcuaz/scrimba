import React from "react";
import require from "vite-plugin-require";
import StarImg from "../images/star.png";

export default function Card(props) {
  return (
    <section className="card">
      <div className="card--img_container">
        {/* <img className="card--img" src={images[props.img]} /> */}
        <img className="card--img" src={require(`../images/${props.img}`)} />
        {/* <img src={ require('./images/image1.jpg') } /> */}
        <p className="card--img_text">`Spots: ${props.openSpots}`</p>
      </div>
      <div className="card--stats">
        <img className="card--star" src={StarImg} />
        <p className="card--text">
          {props.rating}
          <span className="grey">
            &#40;{props.reviewCount}&#41;&#183;{props.location}
          </span>
        </p>
      </div>
      <p className="card--text">{props.title}</p>
      <p className="card--text">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </section>
  );
}
