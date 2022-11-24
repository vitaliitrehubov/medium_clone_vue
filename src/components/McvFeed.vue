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
    <mcv-article
      v-for="article in articles"
      :key="article.slug"
      :article="article"
      :locale="locale"
    ></mcv-article>
    PAGINATION...
  </template>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFeedState } from '@/composables/useFeedState'
import McvArticle from '@/components/McvArticle.vue'

const props = defineProps({
  apiUrl: {
    type: String,
    required: true
  }
})

const { locale } = useI18n({ useScope: 'global' })
const { getFeed, error, isLoading, articles, articlesCount } = useFeedState()

onMounted(() => getFeed({ apiUrl: props.apiUrl }))
</script>

