<template>
	<div class="products-wrapper">
		<nav class="products-list">
			<NuxtLink to="">skapi</NuxtLink>
			<NuxtLink to="">scorch</NuxtLink>
			<NuxtLink to="">forcefeild nfc</NuxtLink>
			<NuxtLink to="">merp</NuxtLink>
			<NuxtLink to="">facerecc</NuxtLink>
		</nav>
	</div>
</template>

<script>
export default {
	// ...
}
</script>

<style scoped>
.products-wrapper {
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
}

.products-list {
	display: flex;
	flex-direction: column;
	font-size: 12vh;
	text-transform: uppercase;
	font-weight: bold;
	color: transparent; /* прозрачный цвет букв */
  -webkit-text-stroke: 1px black;
}

.products-list > a:nth-child(1) {
	margin-left: .25em;
}

.products-list > a:nth-child(2) {
	margin-left: 1.25em;
}

.products-list > a:nth-child(4) {
	margin-left: 2.5em;
}

.products-list > a:nth-child(5) {
	margin-left: 1.25em;
}

.products-list > a {
	width: max-content;
	cursor: pointer;
}

.products-list > a:hover {
	color: black;
	-webkit-text-stroke: none;
	transition: .2s linear;
}
</style>