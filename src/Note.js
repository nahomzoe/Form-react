import React from "react";

const Note = (props) => {
  return (
    <div>
      <h2 id="note-header">View your input:</h2>
      <div className="note-container">
        <div class="vl"></div>
        <div className="note">
          <p>
            Firstname: <span>{props.firstname}</span>
          </p>
        </div>
        <hr></hr>
        <div className="note">
          <p>
            Lastname: <span>{props.lastname}</span>
          </p>
        </div>
        <hr></hr>
        <div className="note">
          <p>
            Phone: <span>{props.phone}</span>
          </p>
        </div>
        <hr></hr>
        <div className="note">
          <p>
            Role: <span>{props.dropdown}</span>
          </p>
        </div>
        <hr></hr>
        <div className="note">
          <p>
            Message: <span>{props.message}</span>
          </p>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Note;
