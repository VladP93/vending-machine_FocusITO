import React from "react";
import LoadingImage from "../../assets/loadingimage.gif";

export default function Loading() {
  return (
    <div className="loading-container">
      <p className="h3 text-light">Loading...</p>
      <img src={LoadingImage} alt="Loading..." className="loading-image" />
      <p className="h3 text-light">...We're getting the food menu</p>
    </div>
  );
}
