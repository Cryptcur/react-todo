import { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  render() {
    const { list, handleDelete } = this.props;
    return (
      <ul>
        {list.length > 0 ? (
          list.map((ele) => <TodoItem key={ele.id} list={ele} handleDelete={handleDelete} />)
        ) : (
          <span>No tasks</span>
        )}
      </ul>
    );
  }
}

export default TodoList;
//<TodoItem list={list} handleDelete={handleDelete}/>
