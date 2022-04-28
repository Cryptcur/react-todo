import {Component} from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
    render(){
        const {list, handleDelete} = this.props;
        return (
        <ul>
            <TodoItem list={list} handleDelete={handleDelete}/>
        </ul>
        )
    }
}

export default TodoList;