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
        return this.todos.filter(todo => !this.filter || matchFilter.test(todo))
    }

    crateTodo(value){
        this.todos.push(new Todo(value));
    }
}


var store = window.store = new TodoStore

export default store

