<template>
  <a :href="href" :style="{ color }" target="_blank">
    <div>{{ name }}</div>
    <img src="~/assets/img/arrow-right.svg">
  </a>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      href: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
a {
  display: flex;
  font-size: 20px;
  line-height: 24px;
}

a > img {
  margin-left: 8px;
}
</style>


