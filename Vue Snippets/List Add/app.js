Vue.createApp({
    data() {
        return {
            goals: [],
            enteredVal: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredVal);
            this.enteredVal = '';
        }
    },
}).mount('#app');