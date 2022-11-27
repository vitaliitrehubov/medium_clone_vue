<template>
  <div class="home-page">
    <mcv-banner></mcv-banner>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 mb-3 mb-lg-0 order-lg-last">
          <popular-tags></popular-tags>
        </div>
        <div class="col-lg-9">
          <feed-toggle :tag-name="tagName"></feed-toggle>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { McvBanner } from '@/components'
import { FeedToggle, PopularTags } from '@/views/feed/components'
import { useFeedRoute } from '@/views/feed/useRoute'

const { tagName } = useFeedRoute()
</script>
