<template>
	<NuxtLink
		:to="route"
		:class="['header-link', { 'main-page': isMainPage }]"
		activeClass="active"
	>
		{{name}}
	</NuxtLink>
</template>

<script>
export default {
  name: 'HeaderLink',
	props: {
		name: '',
		route: '',
		isMainPage: false
	},
	computed: {
		isMainPage() {
			return this.$route.path === '/'
		}
  }
}
</script>

<style scoped>
.header-link {
  text-decoration: none;
  text-transform: uppercase;
	color: black;
}

.header-link.main-page {
  color: #fff;
  opacity: 0.6;
}

.active {
	background-color: rgb(255, 0, 0);
}
</style>