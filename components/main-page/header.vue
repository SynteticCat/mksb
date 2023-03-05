<template>
  <div class="header-container">
    <nav class="header-navigation">
      <NuxtLink to="/services">услуги</NuxtLink>
      <NuxtLink to="/products">продукты</NuxtLink>
      <NuxtLink to="/projects">проекты</NuxtLink>
    </nav>

    <NuxtLink to="/"><img src="~/assets/img/mksb-logo.svg" /></NuxtLink>
    
    <nav class="header-navigation">
      <NuxtLink to="/about">о нас</NuxtLink>
      <NuxtLink to="/contacts">контакты</NuxtLink>
      <NuxtLink to="/fill-brief">заполнить бриф</NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainPageHeader'
}
</script>

<style scoped>
.header-container {
  line-height: 20px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.header-navigation {
  display: flex;
  gap: 32px;
  opacity: 0.6;
}

.header-navigation > a {
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
}
</style>