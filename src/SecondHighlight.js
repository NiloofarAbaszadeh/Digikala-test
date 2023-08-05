import React from "react";
import SecondHighlightData from "./SecondHighlightData";
import "./Style/SecHighlight.css"

const SecondHighlight = () => {
  function HighlightElements() {
    const HighlightElement = SecondHighlightData.map((highlight) => {
      return (
        <div className="sechighlight-elements" key={highlight.id}>
          <div className="sechighlight-img">
            <img src={highlight.source} />
          </div>
          <div className="sechighlight-title">
            <p>{highlight.name}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="sechighlight">
        {HighlightElement}
      </div>
    )
  }


  return (
    <div className="main-sechighlight">
      <HighlightElements />
    </div>
  )
}

export default SecondHighlight