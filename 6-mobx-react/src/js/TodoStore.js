import { computed, observable } from "mobx";

class TodoStore {
    @observable todos = ["buy milk", "buy eggs", "fly", "drive",  "go places", "sleep", "dream"];
    @observable filter = "";
    @computed get filterTodos(){
        var matchFilter = RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || matchFilter.test(todo))
    }
}


var store = window.store = new TodoStore

export default store

