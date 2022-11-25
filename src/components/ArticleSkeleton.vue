<template>
  <div class="pt-2">
    <loading-skeleton :height="1" class="mb-3"></loading-skeleton>
    <div class="d-flex align-items-center mb-2">
      <loading-skeleton :width="30" :height="30" border-radius="rounded-circle"></loading-skeleton>
      <div class="ms-2">
        <loading-skeleton :width="200" :height="10" class="mb-1"></loading-skeleton>
        <loading-skeleton :width="200" :height="10"></loading-skeleton>
      </div>
      <div class="ms-auto">
        <loading-skeleton :width="40" :height="20"></loading-skeleton>
      </div>
    </div>
    <div class="mb-3">
      <loading-skeleton v-for="i in 4" :key="i" :height="14" class="mb-1"></loading-skeleton>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <loading-skeleton :width="100" :height="12"></loading-skeleton>
      <div class="d-flex">
        <loading-skeleton :width="100" :height="14" class="ms-1"></loading-skeleton>
        <loading-skeleton :width="40" :height="14" class="ms-1"></loading-skeleton>
        <loading-skeleton :width="60" :height="14" class="ms-1"></loading-skeleton>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingSkeleton from '@/components/LoadingSkeleton.vue'
</script>
