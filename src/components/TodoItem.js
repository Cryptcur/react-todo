import { Component } from "react";

class TodoItem extends Component {
  render() {
    const { list } = this.props;
    return (
      list &&
      list.map((item, idx) => (
        <li className="text" key={idx}>
          {item}
        </li>
      ))
    );
  }
}

export default TodoItem;
