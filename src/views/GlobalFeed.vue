<template>
  <div class="home-page">
    BANNER
    <div class="container">
      <div class="row">
        <div class="col-lg-3 order-lg-last">
          Popular Tags
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

const apiUrl = '/articles'
</script>
