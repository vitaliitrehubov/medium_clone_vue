<template>
  <top-bar></top-bar>
  <router-view/>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue'
import { onMounted } from 'vue'
import { useAuthState } from '@/composables/useAuthState'

const { getUser } = useAuthState()
onMounted(getUser)
</script>


