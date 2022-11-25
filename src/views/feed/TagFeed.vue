<template>
  <mcv-feed :api-url="apiUrl"></mcv-feed>
</template>

<script setup>
import McvFeed from '@/components/McvFeed.vue'
import { useFeedRoute } from '@/views/feed/useRoute'
const { apiUrl } = useFeedRoute()
</script>
