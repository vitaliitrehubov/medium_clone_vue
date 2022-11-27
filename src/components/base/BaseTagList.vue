<template>
  <ul class="gap-1 nav">
    <li v-for="tag in tags" :key="tag">
      <span class="badge rounded-pill fw-normal border text-bg-light">
        {{ tag }}
      </span>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  tags: {
    type: Array,
    required: true
  }
})
</script>