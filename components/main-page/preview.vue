<template>
  <div class="preview-container">
    <div class="preview-title">мксб</div>
    <div class="preview-subtitle"> Cоздаем IT продукты<br>для бизнеса и людей</div>
  </div>
</template>

<script>
export default {
  name: 'MainPageHeader'
}
</script>

<style scoped>
.preview-container {
  color: #fff;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.preview-title {
  font-size: 128px;
  line-height: 120%;
  font-weight: 700;
  text-transform: uppercase;
}

.preview-subtitle {
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
}
</style>