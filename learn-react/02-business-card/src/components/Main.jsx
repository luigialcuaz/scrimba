import React from "react";
import EmailIcon from '../images/email-icon.png'

export default function Main() {
  return(
    <main>
      <h1 className='main--name'>Luigi Alcuaz</h1>
      <p className="main--profession">Frontend Developer</p>
      <p className="main--website">luigialcuaz.website</p>
      <button className="main--button">
        <img src={EmailIcon} className='main--email_icon'/>Email</button>
      <section>
        <h3 className="section--header">About</h3>
        <p className="section--text">
          I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. &#40;copy pasted&#41;      
        </p>
        <h3 className="section--header">Interests</h3>
        <p className="section--text">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. &#40;copy pasted&#41;
        </p>
      </section>
    </main>
  )
}