import "./index.css";
import Form from "./Form";
import Note from "./Note";
import Popup from "./Popup";
import { Component } from "react";
import Post from "./Post";
import axios from "axios";

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
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get("http://localhost:3030/note").then((res) => {
      console.log(res.data);

      this.setState({
        data: res.data,
        isLoading: false,
      });
    });
  }
  submitHandler = () => {
    axios
      .post("http://localhost:3030/note", this.state.inputData)
      .then((res) => console.log("res", res))
      .catch((error) => console.log("err", error));

    this.setState({ showPopup: false });
    window.location.reload();
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
        <div className="view">
          <Form change={this.inputHandler} submit={this.popUpHandler} />
          <Note {...this.state.inputData} />
        </div>
        <Post data={this.state.data} />

        {this.state.showPopup && (
          <Popup
            close={this.closeHandler}
            {...this.state.inputData}
            submit={this.submitHandler}
          />
        )}
      </main>
    );
  }
}

export default App;
