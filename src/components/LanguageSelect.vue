<template>
  <select v-model="$i18n.locale" class="ms-auto ms-sm-3 me-0 me-sm-auto">
    <option v-for="locale in locales" :key="locale" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<script setup>
const locales = ['en', 'ua']
</script>
