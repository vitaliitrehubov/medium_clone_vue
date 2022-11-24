<template>
  <nav aria-label="Pagination" class="mt-3 ms-3">
    <ul class="pagination flex-wrap">
      <li v-for="page in pagesCount" :key="page" :class="[currentPage === page && 'active', 'page-item']">
        <span v-if="currentPage === page" class="page-link">{{ page }}</span>
        <router-link
          v-else
          :to="{ path: url, query: { page } }"
          class="page-link"
        >{{ page }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const pagesCount = computed(() => Math.ceil(props.total / props.limit))
</script>

<style lang="scss" scoped>
.pagination {
  --color-green: #5CB85C;
  --bs-pagination-color: var(--color-green);
  --bs-pagination-active-border-color: var(--color-green);
  --bs-pagination-active-bg: var(--color-green);
}
</style>