<template>
	<NuxtLink
		:to="route"
		:class="['header-link', { 'main-page': $route.path === '/' }]"
		activeClass="active"
	>
		{{name}}
	</NuxtLink>
</template>

<script>
export default {
	props: {
		name: '',
		route: '',
	}
}
</script>

<style scoped>
.header-link {
	position: relative;
  text-decoration: none;
  text-transform: uppercase;
	color: black;
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
	width: 0.125em;
	height: 2.5em;
	background-color: black;
	transform: translateY(-200%);
	left: 50%;
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
