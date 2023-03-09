<template>
  <div class="navigation-container">
    <nav class="navigation-list">
      <div
        v-for="({ name }, index) in products"
        :key="name"
        :class="[
          'navigation-item',
          { active: $store.getters.getActiveProduct.name === name }
        ]"
        @click="handleClick(index)"
      >
          {{ name }}
      </div>
    </nav>

    <div class="product">
      <div class="product-title">{{ $store.getters.getActiveProduct.example.title }}</div>
      <div class="product-subtitle">{{ $store.getters.getActiveProduct.name }}</div>
      <ButtonLink
        name="Посмотреть"
        color="#fff"
        :href="$store.getters.getActiveProduct.example.link"
      />
    </div>
  </div>
</template>

<script>
import { PRODUCTS } from '../consts';

export default {
  computed: {
    products() {
      return PRODUCTS
    }
  },
  methods: {
    handleClick(productIndex) {
      this.$store.dispatch({
        type: 'changeActiveProduct',
        product: PRODUCTS[productIndex]
      })
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
  gap: .75em;
  width: 63%;
  font-size: 1.25em;
}

.navigation-item {
  display: flex;
  cursor: pointer;
  align-items: center;
}

.navigation-item::before {
  content: "";
  width: 0em;
  height: 0.15em;
  background-color: white;
  transition-property: width, margin-right;
  transition-duration: .2s;
}

.navigation-item.active::before,
.navigation-item:hover::before {
  width: 1.2em;
  margin-right: 0.6em;
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
</style>
