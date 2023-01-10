import React from "react";
import ActivityImg from "../images/katie-zaferes.png";
import StarImg from "../images/star.png";

export default function Card(props) {
  return (
    <section className="card">
      <div className="card--img_container">
        <img className="card--img" src={"../images/" + props.img} />
        {/* <img className="card--img" src={ActivityImg} /> */}
        <p className="card--img_text">SOLD OUT</p>
      </div>
      <div className="card--stats">
        <img className="card--star" src={StarImg} />
        <p className="card--text">
          5.0
          <span className="grey">&#40;6&#41;&#183;{props.country}</span>
        </p>
      </div>
      <p className="card--text">{props.title}</p>
      <p className="card--text">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </section>
  );
}
