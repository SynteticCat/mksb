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
	transition-property: transform;
	transition-duration: .2s;
}

.header-link.main-page {
  color: #fff;
  opacity: 0.6;
}

.header-link:hover,
.header-link.active {
	transform: translateY(.5em);
}

.header-link::before {
	position: absolute;
	content: "";
	width: 2px;
	height: 3em;
	background-color: black;
	transform: translateY(-200%);
	left: 50%;
	transition-property: transform;
	transition-duration: .2s;
}

.header-link.main-page::before {
	background-color: #fff;
}

.header-link:hover::before,
.header-link.active::before {
	transform: translateY(calc(-100% - .5em));
}

</style>