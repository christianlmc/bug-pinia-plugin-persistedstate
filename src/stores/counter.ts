import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  persist: true,
  actions: {
    // If this function is not async with await on $reset, the localstorage doesn't update (even though pinia does update)
    // If F5 is pressed after setCounter has been called, counter will go back to previous state instead of 100
    setCounter100() {
      this.$reset();
      this.counter = 100;
    },
  },
});
