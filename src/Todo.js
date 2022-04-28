import "./Todo.css";
import { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class Todo extends Component {
  state = {
    list: [],
    text: "",
  };

  handleClick = () => {
    const { list, text } = this.state;
    list.push(text);
    this.setState({ text: "" });
  };

  handleChange = (ev) => {
    this.setState({ text: ev.target.value });
  };

  render() {
    const { list, text } = this.state;
    return (
      <div className="App">
        <div>
          <TodoForm
            text={text}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
        </div>
        <div>
          <TodoList list={list} />
        </div>
      </div>
    );
  }
}

export default Todo;
