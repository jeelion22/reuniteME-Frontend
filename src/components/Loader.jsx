import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <div className="d-flex vh-100 flex-column gap-4 justify-content-center align-items-center">
      <FontAwesomeIcon
        icon={faSpinner}
        spinPulse
        size="4x"
        color="rgb(29, 8, 51)"
      />
      <h5 style={{ color: "rgb(5, 5, 5)" }}>Loading...</h5>
    </div>
  );
};

export default Loader;
