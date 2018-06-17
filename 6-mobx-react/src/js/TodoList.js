import React from "react"
import {  observer } from "mobx-react";

@observer
export default class TodoList extends React.Component {

  filter(e){
    this.props.store.filter = e.target.value
  }

  createNew(e){
    if(e.which === 13){
      this.props.store.crateTodo(e.target.value)
      e.target.value = "";
    }
  }

  toggleComplete(todo){
    todo.complete = !todo.complete
  }

  render() {
    const {clearComplete, filter,filterTodos , todos } = this.props.store

    const todoLis = filterTodos.map(todo => (
      <li key={todo.id}>
      <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)}/>
       {todo.value} 
       </li>
    ))

    return(
      <div>
        <h1>Toto+-Dodo</h1>
         <input className="create" placeholder="add new" onKeyPress={this.createNew.bind(this)} />
        <input className="filter" placeholder="filter" value={filter} onChange={this.filter.bind(this)}/>
        <ul>{todoLis}</ul>
        <a href="#" onClick={clearComplete}>Clear Complete</a>
      </div>
    );    
  }


}
