<template>
  <div class="container">
    <Header />
    <NuxtPage class="wrapper" />
  </div>
</template>

<script>
import Header from '~/components/main-page/header.vue'

export default {
	components: { Header }
}
</script>

<style>
:root {
  /* ... */
}

body {
	font-family: 'Montserrat', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.wrapper {
  flex-grow: 1;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 80px;
}
</style>
