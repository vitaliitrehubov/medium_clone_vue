<template>
  <mcv-feed :api-url="apiUrl"></mcv-feed>
</template>

<script setup>
import { McvFeed } from '@/views/feed/components'
import { useFeedRoute } from '@/views/feed/useRoute'
const { apiUrl } = useFeedRoute()
</script>
