<template>
  <div>
    <h6 class="h6 text-capitalize fw-normal">{{ $t('feed.popularTags') }}</h6>
    <h5 v-if="error" class="h5 text-capitalize text-danger">{{ $t('feed.errorOccured') }}</h5>
    <div class="d-flex flex-wrap gap-1">
      <template v-if="isLoading">
        <baseloadingskeleton v-for="(num, i) in skeletonTagsWidth" :key="i" :width="num" />
      </template>
      <template v-if="popularTags">
        <router-link
          v-for="(tag, i) in popularTags"
          :key="i"
          :to="{ name: 'tag', params: { slug: tag }}"
        >
          <span class="badge text-bg-secondary">{{ tag }}</span>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePopularTagsState } from '@/views/feed/composables/usePopularTagsState'

const { getPopularTags, popularTags, isLoading, error } = usePopularTagsState()

const skeletonTagsWidth = [80, 70, 60, 90, 130]

onMounted(getPopularTags)
</script>

<style lang="scss" scoped>
.router-link-exact-active {

  span.badge {
    background-color: green !important;
  }
}
</style>