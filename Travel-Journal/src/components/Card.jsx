import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
   <div className="card--container">
        <div className="card--image--container">
            <img src="https://source.unsplash.com/WLxQvbMyfas" className="card--image"/>
        </div>
        <div className="card--details--container">
            <div className="card--location--container">
                <FontAwesomeIcon icon={faLocationDot} className="card--location-icon" />
                <h4 className="country--title">JAPAN</h4>
                <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank" className="maps--link">View on Google Maps</a>
            </div>
            <h3 className="attraction--title">Mount Fuji</h3>
            <h5 className="available--dates">12 Jan, 2021 - 24 Jan, 2021</h5>
            <div className="card--description--container">
                <p className="description--text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
   </div>
  )
}
