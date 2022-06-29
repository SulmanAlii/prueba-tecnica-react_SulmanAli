import React, { useEffect, useState } from "react";
// import { getData } from "./../services/api";

let slider = [];
let minThumb = null;
let maxThumb = null;
let currentScale = [];

export const NormalRange = () => {
  const [initialPrice, setInitialPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(10);
  // const [ranges, setranges] = useState([{}]);

  // useEffect(() => {
  //   getData().then(setranges);
  // }, []);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const dragStart = (e) => {
    let slider = e.target.dataset.slider;
    e.dataTransfer.setData("text/plain", slider);
  };

  const onDrop = (e, target) => {
    let source = e.dataTransfer.getData("text/plain");

    let slot = Number(e.target.dataset.slot);

    if (isNaN(slot)) return;

    if (source === "min") {
      if (slot >= finalPrice) return;
      setInitialPrice(slot);
    } else if (source === "max") {
      if (slot <= initialPrice) return;
      setFinalPrice(slot);
    }
    source = null;
  };

  //INITIAL PRICE POINT
  const InitialPoint = () => {
    return (
      <div
        role="slider"
        data-slider="min"
        onDragStart={dragStart}
        onTouchStart={dragStart}
        className="slider-thumb slider-thumb-min"
        draggable
      ></div>
    );
  };

  //FINAL PRICE POINT
  const EndPoint = () => {
    return (
      <div
        role="slider"
        data-slider="max"
        onDragStart={dragStart}
        onTouchStart={dragStart}
        className="slider-thumb slider-thumb-max"
        draggable
      ></div>
    );
  };

  // for (let i = 0; i <= ranges.max; i++) {
  for (let i = 0; i <= 24; i++) {
    if (i === initialPrice) {
      minThumb = <InitialPoint />;
    } else if (i === finalPrice) {
      maxThumb = <EndPoint />;
    } else {
      minThumb = null;
      maxThumb = null;
    }
    let currentLabel = "";

    if (i === initialPrice || i === finalPrice) {
      currentLabel = i;
    }

    currentScale.push(
      <div key={Math.random()} className="slot-scale">
        {currentLabel}
      </div>
    );
    let lineClass = "line";
    if (i > initialPrice && i < finalPrice) {
      lineClass += " line-selected";
    }

    slider.push(
      <div
        // data-slot={i}
        onDragOver={onDragOver}
        onTouchMove={onDragOver}
        key={Math.random()}
        onDrop={onDrop}
        onTouchEnd={onDrop}
        className="slot"
      >
        <div data-slot={i} className={lineClass} />

        {minThumb}
        {maxThumb}
      </div>
    );
  }

  return (
    <div className="display-grid-center">
      <h1>NORMAL RANGE</h1>
      <div className="slider-container">
        <div className="slider">{slider}</div>
        <div>{currentScale}</div>
      </div>
    </div>
  );
};
