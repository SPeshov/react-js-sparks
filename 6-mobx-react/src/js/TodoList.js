import React from "react"
import {  observer } from "mobx-react";

@observer
export default class TodoList extends React.Component {

  filter(e){
    this.props.store.filter = e.target.value
  }
  render() {
    const { filter,filterTodos , todos } = this.props.store

    const todoLis = filterTodos.map(todo => (
      <li>{todo}</li>
    ))

    return(
      <div>
        <h1>todos</h1>
        <strong>filter: {filter}</strong><br/>
        <input className="filter" value={filter} onChange={this.filter.bind(this)}/>
        <ul>{todoLis}</ul>
      </div>
    );    
  }


}
