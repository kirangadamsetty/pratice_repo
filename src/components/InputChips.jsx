import { useState, useEffect } from "react";

function InputChips() {
  const [data, setData] = useState(() => {
    const result = JSON.parse(localStorage.getItem("chips"));
    return result || [];
  });

  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("chips", JSON.stringify(data));
  }, [data]);

  const handleSubmit = () => {
    const trimmed = userSearch.trim();
    if (!trimmed || data.includes(trimmed)) return;
    setData([...data, trimmed]);
    setUserSearch("");
  };

  const handleCancel = (item) => {
    setData(data.filter((val) => val !== item));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <div>
        <input
          type="search"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        {data.map((item, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              padding: "5px 10px",
              margin: "5px",
              backgroundColor: "#e0e0e0",
              borderRadius: "15px",
            }}
          >
            {item}{" "}
            <span
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => handleCancel(item)}
            >
              ×
            </span>
          </span>
        ))}
      </div>
    </>
  );
}

export default InputChips;
