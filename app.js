const app = new Vue({
  el: "#app",
  data: {
    title: "To Do App",
    task: "",
    tasks: [],
    editedTask: null,
  },
  methods: {

    //add / update task 
    addTask() {
      if (this.task.length === 0) return;

      // for updating a task
      if(this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }else{
        //to only add a task
        this.tasks.push({
          name: this.task,
          done: false,
      });
      }
      
      this.task = "";
    },

    removeTask(index) {
      //const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    },

    sortUndone () {
      this.tasks.sort((a,b) => a.done > b.done ? 1 : -1);
    },

    sortDone () {
      this.tasks.sort((a,b) => a.done < b.done ? 1 : -1);
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

    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
  }
});
