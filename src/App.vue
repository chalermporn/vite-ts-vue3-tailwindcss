<template>
  <section class="container max-w-screen-lg pt-10 pb-10 mx-auto hero">
    <img class="mx-auto" src="./assets/logo.png" alt="screenshot" >
  </section>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>