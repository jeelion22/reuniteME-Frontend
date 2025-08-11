import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <FontAwesomeIcon icon={faSpinner} spin size="4x" />
    </div>
  );
};

export default Loader;
