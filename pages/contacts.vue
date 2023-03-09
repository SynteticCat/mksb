<template>
	<div class="contacts-wrapper">
		<div class="first-block">
			<div class="coords">
				55.728586,<br>37.678990
			</div>
			<div class="socials">
				<NuxtLink to="">Telegram</NuxtLink>
				<NuxtLink to="">Вконтакте</NuxtLink>
				<NuxtLink to="">Facebook</NuxtLink>
				<NuxtLink to="">Instagram</NuxtLink>
				<NuxtLink to="">YouTube</NuxtLink>
			</div>
		</div>

		<div class="second-block">
			<div class="calls-to-action">
				<div class="phone-number">+7 (914) 88-70-20</div>
				<div class="mail">skapilab@gmail.com</div>
				<div class="enter-brief">Заполнить бриф</div>
			</div>

			<div class="place">
				<div class="address">Волгоградский пр-т., 17,<br>Москва, Россия, 109316</div>
				<NuxtLink to="" class="map-link">
					<div>Показать на карте</div>
					<img src="~/assets/img/arrow-right-black.svg" alt="">
				</NuxtLink>
			</div>

			<img src="~/assets/img/symbol.svg" alt="">
		</div>
	</div>
</template>

<script>
export default {
	// ...
}
</script>

<style scoped>
.first-block {
	display: flex;
	justify-content: space-between;
	margin-bottom: 14.5vh;
}

.contacts-wrapper {
	margin-top: 19vh;
	margin-bottom: 14.5vh;
}

.coords {
	font-weight: bold;
	font-size: 15.5vh;
	line-height: 16vh;
}

.socials {
	font-size: 3vh;
	display: flex;
	flex-direction: column;
}

.socials > * {
	margin-top: 1vh;
	cursor: pointer;
}

.second-block {
	display: flex;
  justify-content: space-between;
	position: relative;
}

.place {
	margin-right: 15vw;
}

.address {
	font-size: 3vh;
	margin-bottom: 2vh;
}

.map-link {
	font-size: 2.5vh;
	display: flex;
	align-items: center;
	cursor: pointer;
}

.map-link > img {
	width: 2vh;
	margin-left: 1vh;
}

.calls-to-action {
	margin-top: 4.5vh;
	font-size: 4.5vh;
	line-height: 6vh;
	font-weight: lighter;
}

.second-block > img {
	position: absolute;
	width: 32vh;
	top: -22vh;
	right: 22vh;
}

.enter-brief {
	cursor: pointer;
}
</style>
