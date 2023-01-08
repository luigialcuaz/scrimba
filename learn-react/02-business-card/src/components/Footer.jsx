import React from "react";
import TwitterIcon from '../images/twitter-icon.png'
import FacebookIcon from '../images/facebook-icon.png'
import InstagramIcon from '../images/instagram-icon.png'
import LinkedinIcon from '../images/linkedin-icon.png'
import GithubIcon from '../images/github-icon.png'

export default function Footer() {
  return(
    <footer>
      <a target='_blank' href="https://twitter.com/Loraei_"><img src={TwitterIcon}></img></a>
      <a target='_blank' href="https://www.facebook.com/"><img src={FacebookIcon}></img></a>
      <a target='_blank' href="https://www.instagram.com/"><img src={InstagramIcon}></img></a>
      <a target='_blank' href="https://www.linkedin.com/feed/"><img src={LinkedinIcon}></img></a>
      <a target='_blank' href="https://github.com/luigialcuaz"><img src={GithubIcon}></img></a>
    </footer>
  )
}