import React from "react";

const Form = (props) => {
  return (
    <form onChange={props.change} onSubmit={props.submit}>
      <div className="form-field">
        <label htmlfor="firstname">
          First name<span className="whitespace">wni</span>
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          defaultValue={props.firstname}
        />
      </div>

      <div className="form-field">
        <label htmlfor="lastname">
          Last name<span className="whitespace">nnn</span>
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          defaultValue={props.lastname}
        />
      </div>

      <div className="form-field">
        <label htmlfor="phone">Phonenumber</label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          defaultValue={props.phone}
        />
      </div>

      <label htmlfor="dropdown">
        Role<span className="whitespace">iiwiwwwwwDnnn</span>
      </label>
      <select name="dropdown" id="dropdown" defaultValue={props.dropdown}>
        <option value="teacher" selected>
          Teacher
        </option>
        <option value="student">Student </option>
        <option value="employee">Employee</option>
      </select>
      <div className="form-field">
        <label htmlfor="message">
          Message<span className="whitespace">ii5nnnnnnnn</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows="4"
          cols="27"
          required
          defaultValue={props.message}
        />
      </div>
      <div className="center submit form-field">
        <input type="submit" id="submit" value="SEND" />
      </div>
    </form>
  );
};

export default Form;
