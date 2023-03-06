<template>
  <div class="navigation-container">
    <nav class="navigation-list">
      <div><div :class="['pointer', { active: page === 'platforms' }]"/>Платформы</div>
      <div><div :class="['pointer', { active: page === 'brending' }]"/>Брендинг</div>
      <div><div :class="['pointer', { active: page === 'apps' }]"/>Приложения</div>
      <div><div :class="['pointer', { active: page === 'promo' }]"/>Промо</div>
      <div><div :class="['pointer', { active: page === 'socials' }]"/>Социальные</div>
    </nav>

    <div class="product">
      <div class="product-title">Газпром медиа</div>
      <div class="product-subtitle">платформы</div>
      <NuxtLink to="" class="product-link">
        <div>Посмотреть</div>
        <img src="~/assets/img/arrow-right.svg" alt="">
      </NuxtLink>
    </div>

    <div class="product-counter">
      1 / 26
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPageNavigation',
  computed: {
    page() {
      return 'brending'
    }
  }
}
</script>

<style scoped>
.navigation-container {
  color: #fff;
  font-weight: 500;
  display: flex;
}

.navigation-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 3;
  font-size: 20px;
  line-height: 24px;
}

.product {
  flex-grow: 1;
}

.navigation-list > div {
  display: flex;
  align-items: center;
}

.pointer.active {
  background-color: #fff;
  height: 3px;
  width: 24px;
  margin-right: 12px;
}

.product-title {
  font-size: 32px;
  line-height: 39px;
}

.product-subtitle {
  font-size: 16px;
  line-height: 20px;
  padding: 8px 0 32px 0;
  text-transform: uppercase;
}

.product-link {
  display: flex;
  font-size: 20px;
  line-height: 24px;
}

.product-link > img {
  margin-left: 8px;
}

.product-counter {
  align-self: flex-end;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
</style>