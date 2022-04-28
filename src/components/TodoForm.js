import { Component } from "react";

class TodoForm extends Component {

  render() {
    const {text} = this.props;
    return (
      <form onSubmit={(ev) => ev.preventDefault()}>
        <input
          value={text}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleClick}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
