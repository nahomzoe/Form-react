import "./index.css";
import Form from "./Form";
import Note from "./Note";
import Popup from "./Popup";
import { Component } from "react";
import Post from "./Post";
import axios from "axios";
import EditPopup from "./EditPopup";

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
    updatePopup: false,
    currentNote: {},
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

  deleteHandler = (id) => {
    axios.delete(`http://localhost:3030/note/${id}`).then((res) => {
      const notes = this.state.data.filter((item) => item.id !== id);
      this.setState({ data: notes });
    });
  };

  updateHandler = (item) => {
    this.setState({ updatePopup: true, currentNote: item });
  };

  inputUpdateHandler = (e) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        [e.target.name]: e.target.value,
      },
    });
  };

  UpdatPutHandler = (id) => {
    axios
      .put(`http://localhost:3030/note/${id}`, this.state.currentNote)
      .then((res) => res.data);
  };
  /*closeUpdatePopup = () => {
    this.setState({
      updatePopup: false,
      currentItem: null,
    });
  };*/

  render() {
    return (
      <main>
        <div className="view">
          <Form change={this.inputHandler} submit={this.popUpHandler} />
          <Note {...this.state.inputData} />
        </div>
        <Post
          data={this.state.data}
          delete={this.deleteHandler}
          update={this.updateHandler}
        />

        {this.state.showPopup && (
          <Popup
            close={this.closeHandler}
            {...this.state.inputData}
            submit={this.submitHandler}
          />
        )}

        {this.state.updatePopup && (
          <EditPopup
            change={this.inputUpdateHandler}
            {...this.state.currentNote}
            submit={this.UpdatPutHandler(this.state.currentNote.id)}
            //close={this.closeUpdatePopup}
          />
        )}
      </main>
    );
  }
}

export default App;
