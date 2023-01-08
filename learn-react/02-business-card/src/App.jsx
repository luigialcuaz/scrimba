import React from "react";
import Picture from './components/Picture'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  return(
    <div className="container">
      <Picture />
      <Main />
      <Footer />
    </div>
  )
}