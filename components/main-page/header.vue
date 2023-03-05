<template>
  <div class="header-container">
    <nav class="header-navigation">
      <a href="">услуги</a>
      <a href="">продукты</a>
      <a href="">проекты</a>
    </nav>

    <img src="~/assets/img/mksb-logo.svg" />
    
    <nav class="header-navigation">
      <a href="">о нас</a>
      <a href="">контакты</a>
      <a href="">заполнить бриф</a>
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