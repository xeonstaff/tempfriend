<script lang="ts">
	import { AppShell, Navbar, Header } from '@svelteuidev/core';
	import Loader from './loader.svelte';
	import { dataLoaded, chatMessage } from './stores';
	import { onMount } from 'svelte';
	import { fetchFriendInfo } from '../routes/api/friendInfo';
	import 'animate.css';

	//lets the rest of the app know that the friend's info has been loaded
	let loadpage = false;
	dataLoaded.subscribe((val) => (loadpage = val));
	chatMessage.subscribe((x) => (x ? '' : dataLoaded.update((state) => (state = true))));

	//handles initial loading of bot role 
	async function handleLoad() {
		//loads a new friend profile
		const profile = await fetchFriendInfo();
		chatMessage.set(`
			Assume the role of [${profile.friendname}], a ${profile.age}-year-old ${profile.profession} 
			from ${profile.location}. You're friendly, flirty, but not overly talkative. Don't break character!
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
					<Header height="8vh" slot="header">
						<div class="header__text-box">
							<h1 class="header__text">Temp友</h1>
							<div class="header__underline"></div>
						</div>
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

	*{
		padding: 0px;
		margin: 0px;
	}

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
		background-color: black;
	}

	.header__text-box{
		background-color: #0d0d0d;
		border: 2px solid black;
	}

	.header__text {
		padding: 20px 0px;
		font-size: 30px;
		color: #f2f2f2;
		display: flex;
		justify-content: center;
		position: relative;
	}

	.header__underline {
		border-bottom: 1px solid rgba(255, 255, 255, 0.282);
		position:relative;
		width: 100vw;
		top:-18px;
	}

</style>
