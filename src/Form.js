import React from "react";

const Form = () => {
  return (
    <form>
      <div className="form-field">
        <label for="firstName">
          First name<span className="whitespace">5ni</span>
        </label>
        <input type="text" />
      </div>

      <div className="form-field">
        <label for="lastName">
          Last name<span className="whitespace">nnn</span>
        </label>
        <input type="text" />
      </div>

      <div className="form-field">
        <label for="phonenumber">Phonenumber</label>
        <input type="text" />
      </div>
      <label for="dropdown">
        Role<span className="whitespace">wwwwwwwDnnn</span>
      </label>
      <select name="dropdown" id="dropdown">
        <option value="teacher" selected>
          Teacher
        </option>
        <option value="student">Student </option>
        <option value="employee">Employee</option>
      </select>
      <div className="form-field">
        <label for="message">
          Message<span className="whitespace">w5nnnnnnnn</span>
        </label>

        <textarea id="message" name="message" rows="4" cols="27" />
      </div>
      <div className="center submit form-field">
        <input type="submit" id="submit" value="SEND" />
      </div>
    </form>
  );
};

export default Form;
