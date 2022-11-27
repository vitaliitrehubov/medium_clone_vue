<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
        <h1 class="h2 text-muted text-center mb-3">{{ $t('forms.createArticle')}}</h1>
        <p v-if="errors">{{ errors }}</p>
        <article-form :isSubmitting="isSubmitting" @submit="createArticle($event, article)"></article-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArticleForm } from '@/views/articles/components'
import { useCreateArticleState } from '@/views/articles/composables/useCreateArticleState'

const { isSubmitting, createArticle, errors } = useCreateArticleState()
</script>

