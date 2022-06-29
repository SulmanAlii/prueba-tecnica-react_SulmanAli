import React, { useEffect, useState } from "react";
import { NormalRange } from "./NormalRange";
import { NavLink } from "react-router-dom";

export const Range = () => {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <NavLink to={"/exercise1"}>1.Normal Range</NavLink> <br />
      <NavLink to={"/exercise2"}>2.Fixed Range</NavLink>
    </div>
  );
};
