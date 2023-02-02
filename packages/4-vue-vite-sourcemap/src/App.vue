<script setup lang="ts">
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

onMounted(() => {
  // debugger;
  const myName = "张三";
  console.log("游览美景无期，看花开无期，将虚构联想美: ", myName);
})

function testClick() {
  const myName = "张三2";
  console.log(myName);
};

</script>

<template>
  <div>
    <button @click="testClick">test</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
