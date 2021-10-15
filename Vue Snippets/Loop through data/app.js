const app = Vue.createApp({
  data() {
    return {
      inputTask: '',
      tasks: [],
      shown: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.shown ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    hideList() {
      this.shown = !this.shown;
    },
  },
});

app.mount('#assignment');
