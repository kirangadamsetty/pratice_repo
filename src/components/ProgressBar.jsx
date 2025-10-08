import { useState } from "react";

function ProgressBar() {
  const [width, setWidth] = useState("");

  const handleWidth = (e) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    if (value > 100) {
      setWidth(100);
    } else if (value < 0 || value === "") {
      setWidth("");
    } else {
      setWidth(value);
    }
  };

  return (
    <div>
      <input type="text" value={width} onChange={handleWidth} />
      <div
        style={{
          height: "6px",
          border: "1px solid black",
          position: "relative",
          background: "#eee"
        }}
      >
        {width && (
          <div
            style={{
              width: `${width}%`,
              height: "100%", // matches container height
              background: "red",
              position: "absolute",
              top: 0,
              left: 0
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
