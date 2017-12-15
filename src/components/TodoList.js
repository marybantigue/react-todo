import React, { Component } from 'react';
import TodoListItem from './TodoListItem';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.hanldeDelete = this.hanldeDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
	}
  hanldeDelete(val){
		this.props.onRemoveFromList(val);
	}
  handleEdit(res){
		this.props.onEditList(res);
	}
  render() {

    return (
      <ul className="todo-list">
        {this.props.todos.map(
          (val,index) =>
          <TodoListItem isComplete={val.isComplete} text={val.text} key={index} id={index} onDeleteItem={this.hanldeDelete} onEditItem={this.handleEdit}/>
        )}
      </ul>
    );
  }
};

export default TodoList;
