<template>
    <div class="main-page-container">
        <MainPageHeader />
        <MainPagePreview />
        <MainPageNavigation />
    </div>
</template>

<script>
import MainPageHeader from '~/components/main-page/header'
import MainPagePreview from '~/components/main-page/preview'
import MainPageNavigation from '~/components/main-page/navigation'

export default {
    name: 'MainPage',
    components: { MainPageHeader, MainPagePreview, MainPageNavigation }
}
</script>

<style scoped>
.main-page-container {
    height: 100vh;
    background: center/cover no-repeat url(/_nuxt/assets/gazprom-bg.png);
    padding: 40px 80px 80px;
    box-sizing: border-box;
}
</style>