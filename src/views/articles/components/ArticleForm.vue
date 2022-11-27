<template>
  <form @submit.prevent="emit('submit', { article: handleTags(formValue) })">
    <fieldset :disabled="isSubmitting">
      <fieldset class="mb-2">
        <input
          v-model.trim="formValue.title"
          type="text"
          name="title"
          :placeholder="$t('forms.articleTitle')"
          class="form-control"
        />
      </fieldset>
      <fieldset class="mb-2">
        <input
          v-model.trim="formValue.description"
          type="text"
          name="description"
          :placeholder="$t('forms.articleDescription')"
          class="form-control"
        />
      </fieldset>
      <fieldset class="mb-2">
        <textarea
          v-model.trim="formValue.body"
          rows="7"
          name="body"
          :placeholder="$t('forms.articleBody')"
          class="form-control"
        ></textarea>
      </fieldset>
      <fieldset class="mb-2">
        <input
          v-model.trim="formValue.tagList"
          type="text"
          name="tags"
          :placeholder="$t('forms.enterTags')"
          class="form-control"
        />
      </fieldset>
      <fieldset class="d-grid">
        <button
          type="submit"
          class="d-inline-block btn btn-outline-success bg-gradient text-capitalize"
        >
          <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span v-else class="text-capitalize">{{ $t('forms.publishArticle') }}</span>
        </button>
      </fieldset>
    </fieldset>
  </form>
</template>
<script lang="ts" setup>
import { defineEmits, defineProps, PropType } from 'vue'
import { NewArticleInterface } from '@/types/feed'
import { useCreateArticleForm } from '@/views/articles/composables/useCreateArticleForm'

const props = defineProps({
  isSubmitting: {
    type: Boolean,
    default: false
  },
  article: {
    type: Object as PropType<NewArticleInterface>,
    required: false,
    default: null
  }
})

const emit = defineEmits(['submit'])

const { initFormValue } = useCreateArticleForm()

const formValue = initFormValue(props.article)
const handleTags = (formValue: { tagList: string | null }): { tagList: string[] } =>
  ({ ...formValue, tagList: formValue?.tagList?.split(' ') })
</script>
