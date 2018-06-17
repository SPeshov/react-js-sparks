import { computed, observable } from "mobx";

class Todo{
    @observable value
    @observable id
    @observable complete

    constructor(value){
        this.value = value
        this.id = Date.now()
        this.complete = false
    }
}

class TodoStore {
    @observable todos = [];
    @observable filter = "";
    @computed get filterTodos(){
        var matchFilter = RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || matchFilter.test(todo.value))
    }

    crateTodo(value){
        this.todos.push(new Todo(value));
    }

    clearComplete = () =>{
        const incopleteTodos = this.todos.filter(todo => !todo.complete)
        this.todos.replace(incopleteTodos)
    }
}


var store = window.store = new TodoStore

export default store

