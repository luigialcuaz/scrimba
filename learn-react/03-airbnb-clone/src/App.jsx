import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
    return(
        <div className="container">
            <Navbar />
            <Hero />
            <div className="card--container">
                <Card />
            </div>
        </div>
    )
}