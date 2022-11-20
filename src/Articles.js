import React from "react";

export default function Articles(props) {
  return (
    <div id="articles">
      <div id="header"></div>
      <div id="groups">
        <div id="img">
          <img src={props.imageUrl} className="article--image" />
        </div>
        <div id="right">
          <span id="article-location">{props.location} </span>
          <a id="link" href={props.googleMapsUrl}>
            View on the Google Maps
          </a>
          <h2 id="article-title">{props.title}</h2>
          <br />
          <span id="article-dates">
            {props.startDate} - {props.endDate}
          </span>
          <p id="article-description">{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
