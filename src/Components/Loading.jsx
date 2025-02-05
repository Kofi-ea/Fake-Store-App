import React from "react";

const Loading = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "100vh",
          fontSize: "1.7rem",
        }}
      >
        <div>
          <h1>Loading...Please wait</h1>
        </div>
      </div>
    </>
  );
};

export default Loading;
