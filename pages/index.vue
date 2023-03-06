<template>
    <div class="main-page-container">
        <div class="main-page-background" />
        <MainPagePreview />
        <MainPageNavigation />
    </div>
</template>

<script>
import Header from '~/components/main-page/header'
import MainPagePreview from '~/components/main-page/preview'
import MainPageNavigation from '~/components/main-page/navigation'

export default {
    name: 'MainPage',
    components: { Header, MainPagePreview, MainPageNavigation }
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
    background: center/cover no-repeat url(~/assets/img/tinkoff-logo-animation.gif);
    box-sizing: border-box;
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