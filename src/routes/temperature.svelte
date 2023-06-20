<script>
	import { temperature } from './stores';

	let value = 5;
	temperature.update((aiTemp) => (aiTemp = value));

	// Function to update the value when the slider is moved
	function handleChange(event) {
		value = parseInt(event.target.value);
	}
</script>

<div>
	<p>randomness:&nbsp;&nbsp;<span class="number">{value}</span></p>

	<input
		type="range"
		id="slider"
		class="slider"
		min="0"
		max="10"
		step="1"
		bind:value
		on:input={handleChange}
	/>
</div>

<style>
	p {
		font-family: 'Noto Sans Chorasmian', sans-serif;
		font-size: 12px;
		display: flex;
		justify-content: center;
		margin: 0;
		padding: 0;
		line-height: 14px;
				padding-top: 4px;
	}

	.number {
		font-family: 'Noto Sans Mono', sans-serif;
		font-weight: 700;
		font-size: 12px;
	}

	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 5px;
		border-radius: 5px;
		background: #e0e0e0;
		outline: none;
		opacity: 0.7;
		transition: opacity 0.2s;
	}

	.slider:hover {
		opacity: 1;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: #00000095;
		cursor: pointer;
		transition: background 0.2s;
	}

	.slider::-webkit-slider-thumb:hover {
		background: #cccccc;
	}
</style>
