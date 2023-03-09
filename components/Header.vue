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

    <NuxtLink to="/" class="logo-link"><img src="~/assets/img/mksb-logo.svg" /></NuxtLink>

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
export default {
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
  padding-top: 2.5em;
  line-height: 1.25em;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.header-navigation {
  display: flex;
  gap: 2em;
}

.logo-link {
  transition-duration: .2s;
}

.logo-link:not(.nuxt-link-exact-active) {
  filter: invert(1);
}
</style>
