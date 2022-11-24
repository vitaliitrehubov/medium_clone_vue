<template>
  <template v-if="error">
    Error occured!
  </template>
  <template v-else-if="isLoading">
    loading...
  </template>
  <template v-else-if="articlesCount === 0">
    No articles found...
  </template>
  <template v-else>
    <mcv-article v-for="article in articles" :key="article.slug" :article="article" :locale="locale"></mcv-article>
    
    <mcv-pagination :total="total" :current-page="currentPage" :limit="10" :url="url"></mcv-pagination>
  </template>
</template>

<script setup>
import { defineProps, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useFeedState } from '@/composables/useFeedState'
import McvArticle from '@/components/McvArticle.vue'
import McvPagination from '@/components/McvPagination.vue'

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

onMounted(() => getFeed({ apiUrl: props.apiUrl }))
</script>

