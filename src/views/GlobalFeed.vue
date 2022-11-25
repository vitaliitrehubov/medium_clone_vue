<template>
  <div class="home-page">
    BANNER
    <div class="container">
      <div class="row">
        <div class="col-lg-3 mb-3 mb-lg-0 order-lg-last">
          <popular-tags></popular-tags>
        </div>
        <div class="col-lg-9">
          <mcv-feed :api-url="apiUrl"></mcv-feed>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { computed } from 'vue'
import McvFeed from '@/components/McvFeed.vue'
import PopularTags from '@/components/PopularTags.vue'

const apiUrl = '/articles'
</script>
