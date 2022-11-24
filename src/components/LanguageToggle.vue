<template>
  <select v-model="$i18n.locale" class="ms-auto ms-sm-3 me-0 me-sm-auto">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
      {{ locale }}
    </option>
  </select>
  <!-- <div
    v-model="language"
    @change="toggleLanguage($event)"
    class="btn-group btn-group-sm me-auto ms-3"
    role="group"
    aria-label="Radio toggle language button group"
  >
    <input type="radio" class="btn-check" name="language" id="english" autocomplete="off">
    <label class="btn btn-outline-success" for="english">En</label>

    <input type="radio" class="btn-check" name="language" id="ukrainian" autocomplete="off">
    <label class="btn btn-outline-success" for="ukrainian">Укр</label>
  </div> -->
</template>

<script setup>
import { ref } from 'vue'

const language = ref('english');
const locales = ['en', 'ua']
// const toggleLanguage = (e) => {
//   console.log(e);
// }
</script>
