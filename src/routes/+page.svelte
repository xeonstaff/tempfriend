<script>
	import Face from './faceCard.svelte';
	import Input from './input.svelte';
	import ChatMessages from './chatMessages.svelte';
	import Temperature from './temperature.svelte';
</script>

<svelte:head>
	<title>Temp友</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<body>
	<div class="topsection">
		<div class="face">
			<Face />
		</div>

		<div class="chatmessages">
			<ChatMessages />
		</div>
	</div>

	<div class="bottomsection">
		<div class="temperature">
			<Temperature />
		</div>

		<div class="input">
			<Input />
		</div>
	</div>
</body>

<style>
	/* general styles */
	body {
		margin: 0px;
		display: grid;
		grid-template-areas: 'topsection' 'bottomsection';
	}

	/* large screens */
	@media (min-width: 1025px) {
		body {
			display: block;
		}
		.topsection {
			width: 100%;
			margin-top: 7vh;
			display: flex;
			flex-direction: row;
		}

		.bottomsection {
			padding: 0px 5px 5px 10px;
			border-radius: 5px;
			border: 1px solid black;
			background-color: rgb(230, 236, 237, 0.5);
			z-index: 2;
		}

		.temperature {
			grid-area: temperature;
		}

		.input {
			grid-area: input;
		}
	}

	/* medium screens */
	@media (min-width: 801px) and (max-width: 1024px) {
		body {
			display: block;
		}
		.topsection {
			width: 100%;
			margin-top: 7vh;
			display: flex;
			flex-direction: row;
		}
		.face {
			width: 50vw;
		}

		.chatmessages {
		}
		.bottomsection {
			padding: 0px 5px 5px 10px;
			border-radius: 5px;
			border: 1px solid black;
			background-color: rgb(230, 236, 237, 0.5);
			z-index: 2;
		}

		.temperature {
			grid-area: temperature;
		}

		.input {
			grid-area: input;
		}
	}

	/* lil screens */
	@media (max-width: 800px) {
		body {
			display: grid;
			grid-template-areas: 'topsection' 'bottomsection';
			grid-template-rows: 75vh 1fr;
		}
		.topsection {
			width: 100%;
			margin-top: 50px;
			display: flex;
			flex-direction: column;
		}
		.face {
			width: 100%;
			grid-area: face;
		}

		.chatmessages {
			grid-area: chatmessages;
		}
		.bottomsection {
			padding: 0px 5px 5px 10px;
			border-radius: 5px;
			border: 1px solid black;
			background-color: rgb(230, 236, 237, 0.5);
			z-index: 2;
		}

		.temperature {
			grid-area: temperature;
		}

		.input {
			grid-area: input;
		}
	}
</style>
