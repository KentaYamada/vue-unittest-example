import Vue from "vue";


/**
 * Counter component
 */
export default Vue.extend({
  name: "Counter",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    handleCounterIncrement(): void {
      this.counter++;
    }
  }
});
