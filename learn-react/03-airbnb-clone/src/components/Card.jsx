import React from "react";
import ActivityImg from '../images/katie-zaferes.png'
import StarImg from '../images/star.png'

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <section className="card">
      <div className="card--img_container">
        <img className="card--img" src={ActivityImg}/>
        <p className="card--img_text">SOLD OUT</p>
      </div>
      <div className="card--stats">
        <img className="card--star" src={StarImg}/>
        <p className="card--text">
          5.0 
          <span className="grey">
            &#40;6&#41;&#183;USA
          </span>
        </p>
      </div>
      <p className="card--text">Life lessons with Katie Zaferes</p>
      <p className="card--text"><span className='bold'>From $136</span> / person</p>
    </section>
  )
}