<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link :to="{ name: 'globalFeed' }" class="text-uppercase h3 text-decoration-none text-success fw-bold mb-0">
        medium</router-link>

      <language-select></language-select>

      <ul v-if="isLoading" class="nav">
        <li v-for="num in 3" :key="num" class="nav-item ms-1">
          <baseloadingskeleton :width="100" :height="20" />
        </li>
      </ul>
      <ul v-else class="nav text-capitalize">
        <li class="nav-item">
          <router-link :to="{ name: 'globalFeed' }" class="nav-link">{{ $t('header.home') }}</router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link :to="{ name: 'newArticle' }" class="nav-link">{{ $t('header.newArticle') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'globalFeed' }" class="nav-link">{{ $t('header.settings') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'globalFeed', params: { slug: user.username } }" class="nav-link">
              <img :src="user.image" alt="user image" style="width: 30px; height: 30px" class="rounded-circle" />
              {{ user.username }}
            </router-link>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link">{{ $t('header.login') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="nav-link">{{ $t('header.register') }}</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useAuthState } from '@/composables/useAuthState'
import { LanguageSelect } from '@/components'

const { user, isLoggedIn, isLoading } = useAuthState()
</script>

<style lang="scss" scoped>
.navbar {
  min-height: 70px;

  .nav {

    li {

      a {
        font-weight: 600;
        color: #999;

        &.router-link-exact-active {
          color: green;
        }
      }
    }
  }
}
</style>
