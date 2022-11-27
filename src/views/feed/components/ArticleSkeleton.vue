<template>
  <div>
    <baseloadingskeleton :height="1" class="mb-3" />
    <div class="d-flex align-items-center mb-2">
      <baseloadingskeleton :width="30" :height="30" border-radius="rounded-circle" />
      <div class="ms-2">
        <baseloadingskeleton v-for="i in 2" :key="i" :width="200" :height="10" class="mb-1" />
      </div>
      <div class="ms-auto">
        <baseloadingskeleton :width="40" :height="20" />
      </div>
    </div>
    <div class="mb-3">
      <baseloadingskeleton v-for="i in 4" :key="i" :height="14" class="mb-1" />
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <baseloadingskeleton :width="100" :height="12" />
      <div class="d-flex">
        <baseloadingskeleton v-for="n in [100, 40, 60]" :key="n" :width="n" :height="14" class="ms-1" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
