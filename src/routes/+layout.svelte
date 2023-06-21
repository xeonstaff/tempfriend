<script lang="ts">
	import { AppShell, Navbar, Header } from '@svelteuidev/core';
	import Loader from './loader.svelte';
	import { dataLoaded, chatMessage } from './stores';
	import { onMount } from 'svelte';
	import { startingPrompt } from '../lib/startingPrompt.js';
	import 'animate.css';

	//lets the rest of the app know that the friend's info has been loaded
	let loadpage = false;
	dataLoaded.subscribe((val) => (loadpage = val));
	chatMessage.subscribe((x) => (x ? '' : dataLoaded.update((state) => (state = true))));

	//handles initial & reloading loading of app
	//don't judge me for putting the prompt here this was a nightmare to figure out
	async function handleLoad() {
		//loads a new friend profile
		const profile = await fetchFriendInfo();
		chatMessage.set(`
			Assume the role of [${profile.friendname}], a ${profile.age}-year-old ${profile.profession} 
			from ${profile.location}. You're very flirty, and don't like to talk about work much. Don't break character! // [User]: hello! // [${profile.friendname}]:
		`)
	}

	onMount(handleLoad);

	//always shows loading screen for min 2 seconds for *suspense*
	let waitload = false;
	setTimeout(function () {
		waitload = true;
	}, 2000);
</script>

<body>
	{#if !waitload && loadpage}
		<div class="loadscreen animate__animated animate__fadeOut">
			<Loader />
		</div>
	{:else}
		<AppShell>
			<Navbar class="navbar">
				<div class="header">
					<Header height="5vh">
						<h1 class="header__text">Welcome to Temp友</h1>
					</Header>
				</div>
			</Navbar>
			<div class="app">
				<slot />
			</div>
		</AppShell>
	{/if}
</body>

<style style="scss">
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Chorasmian&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Chorasmian&family=Noto+Sans+Mono:wght@200;400;700&display=swap');
	@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

	/* loader styles */
	.loadscreen {
		animation: fadeOut; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 6s; /* don't forget to set a duration! */
	}

	/* gradient background colors */
	html,
	body {
		width: 100%;
		height: 100%;
	}

	body {
		margin: 0;
		padding: 0;
		background: linear-gradient(
			-45deg,
			rgba(5, 151, 242, 0.3),
			rgba(3, 88, 140, 0.3),
			rgba(13, 13, 13, 0.3),
			rgba(1, 40, 64, 0.3),
			rgba(242, 242, 242, 0.3)
		);
		background-size: 400% 400%;
		animation: gradient 10s ease infinite;
		display: grid;
		grid-template-areas: 'navbar' 'app';
		grid-template-rows: 10vh 1fr;
	}
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	/* general styles */

	.navbar {
		grid-area: 'navbar';
	}

	.app {
		grid-area: 'app';
	}

	h1 {
		font-size: 20px;
	}
	.header {
		width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
	}

	.header__text {
		padding: 16px 0px;
		font-size: 20px;
		color: #f2f2f2;
		display: flex;
		justify-content: center;
		position: relative;
		top: -15px;
		background-color: #0d0d0d;
		border: 2px solid black;
	}
</style>
