import { useState } from "react";

const ClickCounter = () => {
  const [pingResponse, setPingResponse] = useState("");

  const pingBackend = () => {
    fetch("/api/v1/", {
      method: "GET",
    })
      .then((response) =>
        response.text().then(function (text) {
          setPingResponse(text);
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          pingBackend();
        }}
      >
        {pingResponse ? (
          <p>Backend Responded with '{pingResponse}'</p>
        ) : (
          "Click"
        )}
      </button>
    </div>
  );
};

export default ClickCounter;
