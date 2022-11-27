<template>
  <div class="card border-0 mb-3 p-0">
    <div class="card-body p-0">
      <div class="d-flex align-items-center mb-2 pt-3 border-top">
        <router-link :to="{ name: 'userProfile', params: { slug: article.author.username } }">
          <img :src="article.author.image" alt="Author image" width="30" height="30" class="rounded-circle me-2" />
        </router-link>
        
        <div>
          <router-link
            :to="{ name: 'userProfile', params: { slug: article.author.username } }"
            class="text-decoration-none text-success"
          >
            <h6 class="h6 mb-0">{{ article.author.username }}</h6>
            <div class="text-muted lh-1">{{ formatDate(locale, article.createdAt) }}</div>
          </router-link>
    
        </div>
        <div class="ms-auto">BUTTON</div>
      </div>
      <div class="position-relative">
        <h5 class="card-title">{{ article.title }}</h5>
        <p class="card-text text-truncate">{{ article.body }}</p>
        <div class="d-flex justify-content-between">
          <span class="text-muted">{{ $t('feed.readMore') }}&hellip;</span>
          <basetaglist :tags="article.tagList" />
        </div>
        <router-link
          :to="{ name: 'article', params: { slug: article.slug }}"
          class="stretched-link"
        ></router-link>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { formatDate } from '@/utils/dateHelpers'
import { ArticleInterface } from '@/types/feed'

const props = defineProps({
  article: {
    type: Object as PropType<ArticleInterface>,
    required: true
  },
  locale: {
    type: String,
    required: true
  }
})


</script>
