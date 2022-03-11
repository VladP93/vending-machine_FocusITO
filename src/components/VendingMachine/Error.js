import React from "react";
import error from "../../assets/error.png";

export default function Error() {
  return (
    <div>
      <img src={error} alt="error" className="error-image" />
      <p className="h2 text-light">Oops, Something went wrong...</p>
    </div>
  );
}
