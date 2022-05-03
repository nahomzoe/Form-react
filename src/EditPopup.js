import React from "react";
import Form from "./Form";

const EditPopup = (props) => {
  return (
    <div className="editpopup">
      <Form {...props} />
    </div>
  );
};

export default EditPopup;
