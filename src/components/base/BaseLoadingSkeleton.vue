<template>
  <div
    :style="{ width: width ? `${width}px` : '100%', height: `${height}px` }"
    :class="[borderRadius, 'skeleton-loading']"
  ></div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  width: {
    type: Number,
    required: false
  },
  height: {
    type: Number,
    required: false,
    default: 20
  },
  borderRadius: {
    type: String,
    required: false,
    default: 'rounded'
  }
})
</script>

<style lang="scss" scoped>
.skeleton-loading {
  position: relative;
  overflow: hidden;
  opacity: 0.8;
  background-color: rgb(235, 235 ,235);
  width: 80px;
  height: 20px;
  border-radius: 4px;

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    animation: loading 1s linear infinite alternate;
  }
}

@keyframes loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>