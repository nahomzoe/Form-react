import React from "react";

const Note = () => {
  return (
    <div className="note-container">
      <div className="note">
        <p>
          Firstname: <span></span>
        </p>
      </div>
      <div className="note">
        <p>
          Lastname: <span></span>
        </p>
      </div>
      <div className="note">
        <p>
          Phone: <span></span>
        </p>
      </div>
      <div className="note">
        <p>
          Role: <span></span>
        </p>
      </div>
      <div className="note">
        <p>
          Message: <span></span>
        </p>
      </div>
    </div>
  );
};

export default Note;
