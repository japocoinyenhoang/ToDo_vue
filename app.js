const app = new Vue({
  el: "#app",
  data: {
    title: "To Do App",
    task: "",
    tasks: [],
  },
  methods: {
    addTask() {
      console.log("form submitted");
      this.tasks.push({
        title: this.task,
        done: false,
      });
      this.task = "";
    },
    removeTodo(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
    },
    allDone() {
      this.tasks.forEach((task) => {
        task.done = true;
      });
    },
    allUnDone() {
      this.tasks.forEach((task) => {
        task.done = false;
      });
    },
  },
});
