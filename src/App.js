import "./App.css";
import Form from "./Form";
import Note from "./Note";
import { Component } from "react";

class App extends Component {
  state = 10;

  render() {
    return (
      <main>
        <Form />
        <Note />
      </main>
    );
  }
}

export default App;
