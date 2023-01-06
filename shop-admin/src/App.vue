<script setup></script>

<template>
  <div>
    <button class="btn ">按钮</button>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.btn{
  @apply bg-purple-500 text-indigo-50 px-4 py-2 rounded hover:(bg-purple-900) transition-all focus:(ring-8)
}
</style>
