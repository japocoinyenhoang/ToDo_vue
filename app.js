const app = new Vue({
  el: "#app",
  data: {
    title: "To Do App",
    newTodo: "",
    todos: [],
  },
  methods: {
    addTodo() {
      console.log("form submitted");
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    allDone() {
      this.todos.forEach((todo) => {
        todo.done = true;
      });
    },
    allUnDone() {
      this.todos.forEach((todo) => {
        todo.done = false;
      });
    },
  },
});
