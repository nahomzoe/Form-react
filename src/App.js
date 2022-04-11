import "./index.css";
import Form from "./Form";
import Note from "./Note";
import Popup from "./Popup";
import { Component } from "react";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      dropdown: "",
      message: "",
    },
    showPopup: false,
  };

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };
  popUpHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = (e) => {
    window.location.reload();
  };

  render() {
    return (
      <main>
        <Form change={this.inputHandler} submit={this.popUpHandler} />
        <Note {...this.state.inputData} />
        {this.state.showPopup && (
          <Popup close={this.closeHandler} {...this.state.inputData} />
        )}
      </main>
    );
  }
}

export default App;
