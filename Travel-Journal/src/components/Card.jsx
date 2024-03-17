import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
   <div className="card--container">
        <div className="card--image--container">
            <img src={props.imageUrl} className="card--image"/>
        </div>
        <div className="card--details--container">
            <div className="card--location--container">
                <FontAwesomeIcon icon={faLocationDot} className="card--location-icon" />
                <h4 className="country--title">{props.location}</h4>
                <a href={props.googleMapsUrl} target="_blank" className="maps--link">View on Google Maps</a>
            </div>
            <h3 className="attraction--title">{props.title}</h3>
            <h5 className="available--dates">{props.startDate} - {props.endDate}</h5>
            <div className="card--description--container">
                <p className="description--text">{props.description}</p>
            </div>
        </div>
   </div>
  )
}
