import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <Loader
        type="Audio"
        color="#007BFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};
