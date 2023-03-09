<template>
  <div class="main-page-container">
      <div
        class="main-page-background"
        :style="styleObject"
      />
      <MainPagePreview />
      <MainPageNavigation />
  </div>
</template>

<script>
export default {
  computed: {
    styleObject() {
      return {
        backgroundImage: `url(${this.$store.getters.getActiveProduct.example.img})`
      }
    }
  }
}
</script>

<style scoped>
.main-page-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 80px;
}

.main-page-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: center/cover no-repeat;
  box-sizing: border-box;
  transition-duration: .4s;
}

.main-page-background::after {
  background-color: rgba(0, 0, 0, 0.37);
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}
</style>
