<template>
	<div class="services-wrapper">
		<nav class="services-list">
			<NuxtLink to="">стратегия</NuxtLink>
			<NuxtLink to="">брендинг</NuxtLink>
			<NuxtLink to="">разработка</NuxtLink>
		</nav>
	</div>
</template>

<script>
export default {
	// ...
}
</script>

<style scoped>
.services-wrapper {
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
}

.services-list {
	display: flex;
	flex-direction: column;
	font-size: 15vh;
	text-transform: uppercase;
	font-weight: bold;
	color: transparent; /* прозрачный цвет букв */
  -webkit-text-stroke: 1px black;
}

.services-list > a:nth-child(2) {
	margin-left: 1.25em;
}

.services-list > a:nth-child(3) {
	margin-left: 2.5em;
}

.services-list > a {
	width: max-content;
	cursor: pointer;
}

.services-list > a:hover {
	color: black;
	-webkit-text-stroke: none;
	transition: .2s linear;
}
</style>