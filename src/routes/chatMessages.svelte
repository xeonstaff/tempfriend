<script>
	import { chatMessage } from './stores';

	let chatmessages = [];

	function extractMatches(inputstring) {
		chatmessages = inputstring
			.split('//')
			.slice(1)
			.filter((message) => message !== '');
	}

	chatMessage.subscribe((messages) => extractMatches(messages));
</script>

<main>
	{#if chatmessages.length}
		{#each chatmessages as item, i}
			{#if i % 2 === 0}
				<div class="even"><span>You: </span>{item}</div>
			{:else}
				<div class="odd"><span>Friend:</span>{item}</div>
			{/if}
		{/each}
	{:else}
		<div class="loading" />
	{/if}
</main>

<style type="scss">
	/* general styles */
	main {
		background: rgba(255, 255, 255, 0.6);
		border: 1px dashed rgba(205, 205, 205, 0.477);
		font-family: 'Noto Sans Mono';
		overflow: auto;
	}

	/* large screens */
	@media (min-width: 1025px) {
		main {
			width: 48vw;
			height: 60vh;
			max-height: 100vh;
		}
	}

	/* medium screens */
	@media (min-width: 801px) and (max-width: 1024px) {
		main {
			width: 48vw;
			height: 55vh;
			max-height: 100vh;
		}
	}

	/* lil screens */
	@media (max-width: 800px) {
		main {
			width: 100%;
			height: 41vh;
		}
	}

	.even {
		display: flex;
		justify-content: right;
		background-color: rgb(0, 0, 255, 0.05);
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		padding: 10px;
	}

	.odd {
		display: flex;
		justify-content: left;
		background-color: rgba(255, 0, 0, 0.05);
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		padding: 10px;
	}

	span {
		font-weight: 700;
		padding-right: 5px;
	}
</style>
