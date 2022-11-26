<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-if="error">Error!!!</h1>
  <div v-if="!isLoading && article">
    <div class="bg-dark text-white py-4">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div>
          <router-link
            :to="{ name: 'userProfile', params: { slug: article.author.username } }"
          >
            <img :src="article.author.image" alt="Article author image" />
          </router-link>
          <div>
            <router-link
              :to="{ name: 'userProfile', params: { slug: article.author.username } }"
            >
              {{ article.author.username }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useArticleState } from '@/views/articles/composables/useArticleState'

const { article, error, isLoading, getArticle, getSlug } = useArticleState()

onMounted(() => getArticle(getSlug()))
</script>
