import React, { Component } from 'react';
import '../styles/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.state = {
      todos: []
    };
  }
  handleAddTodo(todos){
    let allItems = this.state.todos.concat([todos]);
		this.setState({todos: allItems});
  }
  handleDeleteTodo(key){
    let allItems = this.state.todos;
    allItems.splice(key,1);
		this.setState({todos: allItems});
  }
  handleEditTodo(item){
    let allItems = this.state.todos;
    allItems[item.key].text = item.val;
    allItems[item.key].isComplete = item.checked;
    if(item.checked){

      let checkedItem = allItems.splice(item.key,1);
      allItems = allItems.concat([checkedItem[0]]);
    }else{
      // allItems[item.key].isComplete = false;

      let checkedItem = allItems.splice(item.key,1);
      // allItems.unshift
      allItems.unshift(checkedItem[0]);
    }
		this.setState({todos: allItems});
  }
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Todo
          </p>

        </header>
        <div className="card-content">
          <TodoForm onAddClick={this.handleAddTodo} />
          <TodoList todos={this.state.todos} onRemoveFromList={this.handleDeleteTodo} onEditList={this.handleEditTodo}/>
        </div>
      </div>
    );
  }
}

export default TodoApp;
