<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-if="error">Error!!!</h1>
  <div v-if="!isLoading && article">
    <div class="bg-dark text-white py-4">
      <div class="container">
        <h1 class="mb-3 h3">{{ article.title }}</h1>
        <div class="d-flex align-items-center">
          <router-link :to="{ name: 'userProfile', params: { slug: article.author.username } }">
            <img :src="article.author.image" alt="Article author image" width="30" height="30" class="rounded-circle" />
          </router-link>
          <div class="d-grid ms-2">
            <router-link
              :to="{ name: 'userProfile', params: { slug: article.author.username } }"
              class="text-white lh-1 mb-1 text-decoration-none">
              {{ article.author.username }}
            </router-link>
              <small class="text-muted lh-1">
                {{ formatDate(locale, article.createdAt) }}
              </small>
          </div>
          <div v-if="isAuthor" class="ms-3 text-capitalize">
            <router-link :to="{ name: 'editArticle', params: { slug: article.slug } }"
              class="btn text-white border border-white btn-sm">
              <i class="ion-edit"></i>&nbsp;
              {{ $t('common.editArticle') }}
            </router-link>
            <button
              @click="deleteArticle(article.slug)"
              class="btn btn-outline-danger btn-sm ms-2"
            >
              <i class="ion-trash-a"></i>&nbsp;
              <span class="text-capitalize">{{ $t('common.deleteArticle') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 v-if="isLoading">Loadins....</h2>
      <div v-else class="py-3">
        <p class="lead mb-3">{{ article.body }}</p>
        <basetaglist :tags="article.tagList" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useArticleState } from '@/views/articles/composables/useArticleState'
import { useAuthState } from '@/composables/useAuthState'
import { formatDate } from '@/utils/dateHelpers'

const { locale } = useI18n({ useScope: 'global' })
const { article, error, isLoading, getArticle, deleteArticle, getSlug } = useArticleState()
const { user } = useAuthState()

const isAuthor = computed(() => article.value?.author?.username === user.value?.username)

onMounted(() => getArticle(getSlug()))
</script>
