<template>
  <div>
    <div v-if="isLoading" class="d-flex gap-1 mb-2">
      <loading-skeleton v-for="i in 2" :key="i" :width="120"></loading-skeleton>
    </div>
    <ul v-else class="nav nav-pills">
      <li v-if="isLoggedIn" class="nav-item text-capitalize">
        <router-link
          :to="{ name: 'yourFeed' }"
          class="nav-link rounded-0 text-secondary"
          exact-active-class="border-bottom border-success border-2 text-success"
        >{{ $t('feed.yourFeed') }}</router-link>
      </li>

      <li class="nav-item text-capitalize">
        <router-link
          :to="{ name: 'globalFeed' }"
          class="nav-link rounded-0 text-secondary"
          exact-active-class="border-bottom border-success border-2 text-success"
        >{{ $t('feed.globalFeed') }}</router-link>
      </li>

      <li v-if="tagName" class="nav-item">
        <router-link
          :to="{ name: 'tag', params: { slug: tagName } }"
          class="nav-link rounded-0 text-secondary"
          exact-active-class="border-bottom border-success border-2 text-success"
        >#&nbsp;{{ tagName }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import LoadingSkeleton from '@/components/LoadingSkeleton.vue'
import { useAuthState } from '@/composables/useAuthState'
const { isLoggedIn, isLoading } = useAuthState()

const props = defineProps({
  tagName: {
    type: String,
    required: false
  }
})
</script>
