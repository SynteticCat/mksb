<template>
  <div class="container">
    <Header />
    <nuxt class="wrapper" />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.wrapper {
  flex-grow: 1;
  width: 80%;
  margin: 0 auto;
}
</style>
