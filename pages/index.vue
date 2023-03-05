<template>
    <div class="main-page-container">
        <div class="wrapper">
            <MainPageHeader />
            <MainPagePreview />
            <MainPageNavigation />
        </div>
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
    display: flex;
    justify-content: center;
    background: center/cover no-repeat url(~/assets/img/gazprom-bg.svg);
    box-sizing: border-box;
}

.wrapper {
    width: 80%;
    padding: 40px 0 80px 0;
}
</style>