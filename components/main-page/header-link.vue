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
	position: relative;
  text-decoration: none;
  text-transform: uppercase;
	color: black;
}

.header-link.main-page {
  color: #fff;
  opacity: 0.6;
}

.active::before {
	position: absolute;
	content: "";
	background-color: black;
	width: 2px;
	height: 32px;
	transform: translate(-50%, calc(-100% - 8px));
	left: 50%;
}
</style>