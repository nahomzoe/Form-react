import React from "react";

const Popup = (props) => {
  return (
    <div className="popup">
      <p>
        Firstname: <span>{props.firstname}</span>
      </p>
      <p>
        Lastname: <span>{props.lastname}</span>
      </p>
      <p>
        Phone: <span>{props.phone}</span>
      </p>
      <p>
        Role: <span>{props.dropdown}</span>
      </p>
      <p>
        Message: <span>{props.message}</span>
      </p>

      <button onClick={props.close}>YES, I AM SURE</button>
      <button onClick={props.close}>NO, I DON'T WANT TO POST IT</button>
    </div>
  );
};

export default Popup;
