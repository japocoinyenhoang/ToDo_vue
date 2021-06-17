const app = new Vue ({
  el: '#app', 
  data: {
    title: 'To Do App', 
    newTodo: '', 
    todos: []

  }, 
  methods: {
    addTodo() {
      console.log('form submitted');
      this.todos.push({
        title: this.newTodo, 
        done: false
      });
      this.newTodo=''
    }
  }
})