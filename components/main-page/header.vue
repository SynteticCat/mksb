<template>
  <div class="header-container">
    <nav class="header-navigation">
      <HeaderLink
        v-for="{ name, route } in leftPages"
        :key="route"
        :name="name"
        :route="route"
      />
    </nav>

    <NuxtLink to="/" class="header-logo" active-class="active"><img src="~/assets/img/mksb-logo.svg" /></NuxtLink>
    
    <nav class="header-navigation">
      <HeaderLink
        v-for="{ name, route } in rightPages"
        :key="route"
        :name="name"
        :route="route"
      />
    </nav>
  </div>
</template>

<script>
import HeaderLink from './header-link.vue'

export default {
  components: { HeaderLink },
  data() {
    return {
      leftPages: [
        { name: 'услуги', route: "/services" },
        { name: 'продукты', route: "/products" },
        { name: 'проекты', route: "/projects" },
      ],
      rightPages: [
        { name: 'о нас', route: "/about" },
        { name: 'контакты', route: "/contacts" },
        { name: 'заполнить бриф', route: "/fill-brief" },
      ]
    }
  }
}
</script>

<style scoped>
.header-container {
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;
  line-height: 20px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.header-navigation {
  display: flex;
  gap: 32px;
}

.header-logo:not(.active) {
  filter: invert(1);
}
</style>