<template>
  <h1>User Profile Page: {{ route.params.slug }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style>

</style>