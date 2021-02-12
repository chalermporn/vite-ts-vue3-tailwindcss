<template>
  <h1>{{ msg }}</h1>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">Transactions</h2>
      <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
        A better way to send money
      </p>
      <p class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>
  </div>
  <label>
    <input type="checkbox" v-model="useScriptSetup" /> Use
    <code>&lt;script setup&gt;</code>
  </label>
  <label>
    <input type="checkbox" v-model="useTsPlugin" /> Provide types for
    <code>*.vue</code> imports
  </label>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <template v-if="!useScriptSetup">
      <a
        href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
        target="_blank">Vetur</a>
      +
      <a
        href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features"
        target="_blank">Vue DX</a>
    </template>
    <template v-else>
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </template>
  </p>
  <p v-if="useTsPlugin">
    tsconfig setup:
    <br />1. Install and add
    <code>@vuedx/typescript-plugin-vue</code> to tsconfig plugins
    <br />2. Delete shims-vue.d.ts
    <br />3. Open
    <code>src/main.ts</code> in VSCode
    <br />4. Open VSCode command input
    <br />5. Search and run "Select TypeScript version" -> "Use workspace version"
  </p>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
  <div class="py-12 bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">Transactions</h2>
        <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          A better way to send money
        </p>
        <p class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <!-- Heroicon name: outline/globe-alt -->
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                Competitive exchange rates
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <!-- Heroicon name: outline/scale -->
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                No hidden fees
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <!-- Heroicon name: outline/lightning-bolt -->
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                Transfers are instant
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div class="flex rounded-md">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <!-- Heroicon name: outline/annotation -->
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                Mobile notifications
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <div class="bg-gray-50">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">Ready to dive in?</span>
        <span class="block text-indigo-600">Start your free trial today.</span>
      </h2>
      <div class="flex mt-8 lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
            Get started
          </a>
        </div>
        <div class="inline-flex ml-3 rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    const useScriptSetup = ref(false)
    const useTsPlugin = ref(false)
    return { count, useScriptSetup, useTsPlugin }
  }
})
</script>

<style  scoped>

</style>
