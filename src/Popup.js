import React from "react";

const Popup = (props) => {
  return (
    <div className="popup">
      <p>
        <span>{props.firstname}</span>
      </p>
      <p>
        <span>{props.lastname}</span>
      </p>
      <p>
        <span>{props.phone}</span>
      </p>
      <p>
        <span>{props.dropdown}</span>
      </p>
      <p>
        <span>{props.message}</span>
      </p>

      <button onClick={props.submit}>YES, I AM SURE</button>
      <button onClick={props.close}>NO, I DON'T WANT TO POST IT</button>
    </div>
  );
};

export default Popup;
