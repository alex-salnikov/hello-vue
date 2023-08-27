<script setup>
import { ref } from 'vue'

const { loadModule } = window['vue3-sfc-loader'];
//Vue.createApp(Vue.defineAsyncComponent(() => loadModule('/component.vue', options))).mount(document.body);

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
  <Navbar></Navbar>
</template>