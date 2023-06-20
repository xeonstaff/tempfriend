<script>
</script>

<body>
	<div class="text">
		<h1>loading your friend...</h1>
	</div>

	<div class="center">
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
	</div>
</body>

<style type="scss">
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Chorasmian&display=swap');

	body {
		height: 100vh;
		width: 100vw;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.text {
		width: 100%;
		position: absolute;
		top: 20%;
		display: flex;
		justify-content: center;
		border: 1px solid rgba(255, 255, 255, 0.212);
		border-radius: 10px;
	}

	h1 {
		font-family: 'Noto Sans Chorasmian', sans-serif;
	}

	.center {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #000;
	}
	.wave {
		width: 5px;
		height: 100px;
		background: linear-gradient(45deg, cyan, #fff);
		margin: 10px;
		animation: wave 1s linear infinite;
		border-radius: 20px;
	}
	.wave:nth-child(2) {
		animation-delay: 0.1s;
	}
	.wave:nth-child(3) {
		animation-delay: 0.2s;
	}
	.wave:nth-child(4) {
		animation-delay: 0.3s;
	}
	.wave:nth-child(5) {
		animation-delay: 0.4s;
	}
	.wave:nth-child(6) {
		animation-delay: 0.5s;
	}
	.wave:nth-child(7) {
		animation-delay: 0.6s;
	}
	.wave:nth-child(8) {
		animation-delay: 0.7s;
	}
	.wave:nth-child(9) {
		animation-delay: 0.8s;
	}
	.wave:nth-child(10) {
		animation-delay: 0.9s;
	}

	@keyframes wave {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}

	h1 {
		color: white;
	}
</style>
