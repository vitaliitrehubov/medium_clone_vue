<template>
  <template v-if="error">
    Error occured!
  </template>
  <template v-else-if="isLoading">
    <article-skeleton v-for="i in 4" :key="i" class="mb-3"></article-skeleton>
  </template>
  <template v-else-if="articlesCount === 0">
    No articles found...
  </template>
  <template v-else>
    <mcv-article v-for="article in articles" :key="article.slug" :article="article" :locale="locale"></mcv-article>
    
    <mcv-pagination :total="total" :current-page="currentPage" :limit="LIMIT_PER_PAGE" :url="url"></mcv-pagination>
  </template>
</template>

<script setup>
import { defineProps, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { handleUrlParams } from '@/utils/queryString'
import { useFeedState } from '@/views/feed/composables/useFeedState'
import { LIMIT_PER_PAGE } from '@/constants/feed'
import { ArticleSkeleton, McvArticle, McvPagination } from '@/views/feed/components'

const props = defineProps({
  apiUrl: {
    type: String,
    required: true
  }
})

const route = useRoute()
const { locale } = useI18n({ useScope: 'global' })
const { getFeed, error, isLoading, articles, articlesCount } = useFeedState()

const total = computed(() => articlesCount.value ?? 1)
const currentPage = computed(() => Number(route.query?.page || 1))
const url = computed(() => route.path)
const params = computed(() => ({
  apiUrl: props.apiUrl,
  limit: LIMIT_PER_PAGE,
  offset: currentPage.value * LIMIT_PER_PAGE - LIMIT_PER_PAGE
}))

onMounted(() => getFeed({ apiUrl: handleUrlParams(params.value) }))
watch(
  () => [route.query.page, route.params?.slug],
  () => getFeed({ apiUrl: handleUrlParams(params.value) })
)
</script>

