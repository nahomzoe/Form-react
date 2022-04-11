import React from "react";

const Popup = () => {
  return (
    <div>
      <div className="note">
        <p>
          Firstname: <span>{props.firstname}</span>
        </p>
      </div>

      <div className="note">
        <p>
          Lastname: <span>{props.lastname}</span>
        </p>
      </div>

      <div className="note">
        <p>
          Phone: <span>{props.phone}</span>
        </p>
      </div>

      <div className="note">
        <p>
          Role: <span>{props.dropdown}</span>
        </p>
      </div>

      <div className="note">
        <p>
          Message: <span>{props.message}</span>
        </p>
      </div>
      <button onClick={props.close}>YES, I AM SURE</button>
      <button onClick={props.close}>NO, I DON'T WANT TO POST IT</button>
    </div>
  );
};

export default Popup;
