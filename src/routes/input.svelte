<script>
	import { TextInput, Button } from '@svelteuidev/core';
	import { dataLoaded, friendProfile, chatMessage } from './stores';
	import { chatBot } from './api/chatBot.js';

	let loadpage = false;
	dataLoaded.subscribe((val) => (loadpage = val));

	let nombre = '';
	friendProfile.subscribe((val) => (nombre = val.friendname));

	let value = '';
	async function handleClick() {
		document.forms['chatform'].reset();
		chatMessage.update((storedhistory) => (storedhistory = storedhistory + '//' + value));
		chatBot();
	}
</script>

<body>
	<form id="chatform" action="">
		<TextInput
			id="textInput"
			class="textinput"
			placeholder="talk to {nombre.split(' ')[0]}"
			bind:value
		/>
		<Button id="button" variant="default" color="gray" size="md" on:click={handleClick}>Send</Button
		>
	</form>
</body>

<style>
</style>
