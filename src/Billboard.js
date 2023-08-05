import React, { useState, useEffect, useLayoutEffect } from "react";
import BillboardData from "./BillBoardData";
import "./Style/Billboard.css"

const Billboard = () => {
  const data = BillboardData;
  const [loopControl, setLoopControl] = useState(false);
  const [billboardElement, setBillboardElement] = useState(null);
  const [billboaredIdNumber, setBillboaredIdNumber] = useState(0);

  useEffect(() => {
    setBillboardElement(changeBillboardElament());
    updateIdNumber();
  }, [loopControl])

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setLoopControl(percontrl => !percontrl)
    }, 6000)
    return () => {
      clearInterval(interval);
    };
  }, [])

  function updateIdNumber() {
    setBillboaredIdNumber(perNumber => (perNumber + 1) % BillboardData.length)
  }

  function changeBillboardElament() {
    for (let i = 0; i < data.length; i = i + 1) {
      if (i === billboaredIdNumber) {
        return data[i].source;
      }
    }
  }

  const goRight = () => {
    setLoopControl(percontrl => !percontrl)
  }

  const goLeft = () => {
    setLoopControl(percontrl => !percontrl)
    setBillboaredIdNumber(perNumber => {
      if (perNumber >= 2) {
        perNumber = (perNumber - 2) % BillboardData.length
      } else if (perNumber === 1) {
        perNumber = BillboardData.length - 1
      } else {
        perNumber = BillboardData.length - 2
      }
      console.log(perNumber)
      return perNumber
    })
  }


  return (
    <div className="billboard">
      <img src={billboardElement}></img>
      <div>
        <button onClick={goRight}>«</button>
        <button onClick={goLeft}>»</button>
      </div>
    </div>
  )
}

export default Billboard