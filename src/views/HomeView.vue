<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
const { setCounter100 } = counterStore;

if (counter.value === 0) {
  setCounter100();
}
</script>

<template>
  <main>
    <div style="font-size: 3rem">Counter</div>
    {{ counter }}
    <div>Look at Local Storage, on the 'Application' tab on the Inspector</div>
    <div>It shows {"counter":0} (Tested on Chrome 99)</div>
  </main>
</template>
