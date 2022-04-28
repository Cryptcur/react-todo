import "./Todo.css";
import { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


class Todo extends Component {
  state = {
    list: [],
    text: '',
    id: 0
  };

  handleClick = () => {
    const { list, text, id } = this.state;
      let newObj = {text, id}
      list.push(newObj);
      this.setState({ text: "", id: 1 + id });
    
  };

  handleChange = (ev) => {
    this.setState({ text: ev.target.value });
  };

  handleDelete = (id) => {
    let newList = this.state.list.filter((ele) => ele.id !== id)
    console.log(id)
    this.setState({list: newList})
    console.log(this.state)
  }

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
          <TodoList list={list} handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default Todo;
