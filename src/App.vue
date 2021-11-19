<script setup>
import Logger from './components/Logger.vue';
import { ref, computed, onMounted } from 'vue';
import utils from './composition/logs.js';

const darkData = ref(window.darkTheme || false)

const isVSCode = window.isVSCode || false

onMounted(() => {
  setInterval(function () {
    if (window.darkTheme !== undefined && window.editor !== undefined) {
      darkData.value = window.darkTheme;
      if (darkData.value) {
        document.querySelector('html').classList.add('dark');
      } else {
        document.querySelector('html').classList.remove('dark');
      }
      utils.editor.value = window.editor;
      clearInterval(this);
    }
  }, 100)
})

const darkMode = computed({
  get: () => darkData.value,
  set: val => {
    darkData.value = val;
    window.darkTheme = val;
    if (window.darkTheme) {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }
})

const editorType = computed({
  get: () => utils.editor.value,
  set: val => {
    utils.editor.value = val;
    window.editor = val;
  }
})

const onClearAll = () => {
  // window.dispatchEvent(new Event('clear-all'));
  utils.logs.value = [];
};

</script>

<template>
  <div>
    <!-- tailwind navbar -->
    <nav class="bg-white mt-0 dark:bg-gray-700 shadow-sm">
      <div class="px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex">
              <div class="flex items-center justify-center w-full">
                <label for="toggleB" class="flex items-center cursor-pointer">
                  <div class="relative">
                    <input type="checkbox" v-model="darkMode" id="toggleB" class="sr-only">
                    <div class="block bg-gray-500 w-14 h-8 rounded-full"></div>
                    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                  </div>
                </label>
              </div>
            </div>
            <div class="ml-auto">
              <div class="flex flex-row justify-center items-center space-x-4" v-if="!isVSCode">
                <div class="dark:text-white">Editor:</div>
                <select v-model="editorType">
                  <option value="vscode">VS Code</option>
                  <option value="php_storm">PhpStorm</option>
                </select>
              </div>
            </div>
            <div class="ml-3">
              <div class="flex space-x-4">
                <button class="btn" @click="onClearAll">Clear All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Logger msg="Hello Vue 3 + Vite" />
  </div>
</template>
