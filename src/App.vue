<template>
  <Header />
  <main>
    <RouterView></RouterView>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss" scoped>
main{
  min-height: calc(100vh - 50px);
  padding: 150px 20px 0px;
}

</style>
