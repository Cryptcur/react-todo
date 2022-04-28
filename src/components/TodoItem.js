import { Component } from "react";

class TodoItem extends Component {
  render() {
    const { list, handleDelete } = this.props;
    return <li id={list.id}>
                {list.text}
                <button onClick={() => handleDelete(list.id)}>Delete</button>
            </li>
  }
}

export default TodoItem;
