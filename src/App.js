import React from "react";

const App = () => {
  return (
    <div
      style={{
        border: "2px solid red",
        borderRadius: "10%",
        width: "10rem",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          background: "green",
          borderRadius: "50%",
        }}
      ></span>
    </div>
  );
};

export default App;
