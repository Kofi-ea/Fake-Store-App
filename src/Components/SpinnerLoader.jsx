import React from "react";
import { ClipLoader } from "react-spinners";
import { MoonLoader } from "react-spinners";

const SpinnerLoader = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
  };

  return (
    <>
      <ClipLoader
        color={"blue"}
        // loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default SpinnerLoader;
