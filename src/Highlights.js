import React from "react";
import highlightData from "./HighlightsData";
import "./Style/Highlights.css";

const Highlights = () => {
  function HighlightElements() {
    const HighlightElement = highlightData.map((highlight) => {
      return (
        <div className="highlight-elements" key={highlight.type}>
          <div className="highlight-img">
            <img src={highlight.source} />
          </div>
          <div className="highlight-title">
            <p>{highlight.name}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="highlight">
        {HighlightElement}
      </div>
    )
  }


  return (
    <div className="main-highlight">
      <HighlightElements />
    </div>
  )
}

export default Highlights;