<script>
	import { Card, Image, Text, Divider } from '@svelteuidev/core';
	import { friendProfile } from './stores.js';
	import { onMount } from 'svelte';

	let profile = {};
	friendProfile.subscribe((newprofile) => {
		profile = newprofile;
	});

	//sets picture height based on viewport width
	let picheight = 350;
	function updateViewportWidth() {
		if (window.innerWidth > 1025) {
			picheight = 400;
		} else if (window.innerWidth > 801 && window.innerWidth < 1025) {
			picheight = 360;
		} else if (window.innerWidth < 801) {
			picheight = 200;
		}
	}

	onMount(() => {
		updateViewportWidth();
		window.addEventListener('resize', updateViewportWidth);
	});
</script>

<main>
	<Card shadow="md" padding="sm" >
		<div class="card">
			<Card.Section padding="sm">
				<div class="image" style="height: {picheight}">
					<!-- a higher-rez source, but doesn't match gender /> -->
					<!-- <Image id="facePic" class="image" src={`https://xsgames.co/randomusers/avatar.php?g=${profile.gender}`} height={400} alt="my very real friend" /> -->
					<Image
						id="facePic"
						src={`${profile.picture}`}
						height={picheight}
						alt="my very real friend"
						radius={5}
						color='black'
					/>
				</div>
			</Card.Section>

			<Card.Section padding="sm">
				<div class="text">
					<Text size="lg">
						<h4>Name</h4>
						<div class="infobox">
							{profile.friendname}
						</div>
						<h4>Age</h4>
						<div class="infobox">
							{profile.age}
						</div>
						<h4>From</h4>
						<div class="infobox">
							{profile.location}
						</div>
						<h4>Profession</h4>
						<div class="infobox">
							{profile.profession}
						</div>
					</Text>
				</div>
			</Card.Section>
		</div>
	</Card>
</main>

<style lang="scss">
	/* general styles */
	.infobox {
		font-family: 'Noto Sans Mono';
		font-weight: 700;
	}

	.card {
		border: 1px solid rgba(0, 0, 0, 0.243);
		display: flex;
	}

	.image{
		display: flex;
		align-items: center;
	}

	h4 {
		display: flex;
		justify-content: center;
		max-width: 15vw;
		border: 1px solid rgba(0, 0, 0, 0.243);
		border-radius: 10px;
	}

	/* large screens */
	@media (min-width: 1025px) {
		main {
			width: 50vw;
		}
		.image {
			width: 250px;
			padding-left: 20px;
		}
		.card {
			height: 100%;
			display: flex;
		}
		.text {
			padding-left: 50px;
		}
		.infobox {
			font-size: 16px;
			max-width: 15vw;
			padding-left: 20px;
		}
		h4 {
			padding: 2px;
			position: relative;
			left: 20px;
			margin-bottom: 10px;
		}
	}

	/* medium screens */
	@media (min-width: 801px) and (max-width: 1024px) {
		.card {
			max-height: 70vh;
		}
		.image {
			width: 220px;
			padding-left: 20px;
			align-items: center;
		}
		.text {
			display: flex;
			align-items: top;
			padding-left: 50px;
		}
		.infobox {
			align-items: center;
			font-size: 14px;
			width: 200px;
			padding-left: 20px;
			max-width: 15vw;
		}
		h4 {
			font-size: 12px;
			padding: 5px;
			margin: 10px;
		}
	}

	/* lil screens */
	@media (max-width: 800px) {
		.card {
			width: 100%;
			display: grid;
			grid-template-areas: 'picta text';
			grid-template-columns: 1.5fr 2fr;
			max-height: 30vh;
		}

		.image {
			grid-area: picta;
			width: 40vw;
			display: flex;
		}

		.text {
			grid-area: text;
			height: 100%;
			width: 100%;
			position: absolute;
			left: 55%;
		}

		.infobox {
			font-size: 60%;
			max-width: 30vw;
			padding-left: 10px;
		}

		h4 {
			font-size: 60%;
			max-width: 30vw;
			padding: 2px;
			margin: 7px;
		}
	}
</style>
