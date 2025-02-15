import React from "react";
import SpinnerLoader from "./SpinnerLoader";

const Loading = () => {
  return (
    <>
      <div
        className="loading-page"
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
          <SpinnerLoader />
        </div>
      </div>
    </>
  );
};

export default Loading;
