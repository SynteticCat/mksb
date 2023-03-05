<template>
  <div class="navigation-container">
    <nav class="navigation-list">
      <div>Платформы</div>
      <div>Брендинг</div>
      <div>Приложения</div>
      <div>Промо</div>
      <div>Социальные</div>
    </nav>

    <div>
      <div class="product-title">Газпром медиа</div>
      <div class="product-subtitle">платформы</div>
      <div class="product-link">Посмотреть -></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPageNavigation'
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
  width: 750px;
  font-size: 20px;
  line-height: 24px;
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
  font-size: 20px;
  line-height: 24px;
}
</style>