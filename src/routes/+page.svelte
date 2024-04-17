<script lang="ts">
	let visible: boolean = true;

	function typewriter(
		node: HTMLElement,
		{ speed = 1, delay = 0 }: { speed?: number; delay?: number }
	) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text: string = node.textContent ?? '';
		const duration: number = text.length / (speed * 0.01);

		return {
			delay,
			duration,
			tick: (t: number) => {
				const i: number = Math.floor(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<!-- <p transition:typewriter={{ speed: 1 }}>The quick brown fox jumps over the lazy dog</p> -->

{#if visible}
	<div class="flex flex-col items-center justify-center h-screen">
		<button class="bg-white rounded-full p-1 font-medium" on:click={() => (visible = !visible)}>
			START HERE
		</button>
	</div>
{:else}
	<div class="flex flex-col items-center justify-center h-screen">
		<h1 class="text-6xl font-sans font-bold">
			<span
				transition:typewriter={{ speed: 0.8, delay: 0 }}
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>Your</span
			>
		</h1>
		<h1 class="text-6xl font-sans font-bold py-2">
			<span
				transition:typewriter={{ speed: 0.8, delay: 800 }}
				class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
				>Next</span
			>
		</h1>
		<h1 class="text-6xl font-sans font-bold">
			<span
				transition:typewriter={{ speed: 0.8, delay: 1600 }}
				class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
				>Employee</span
			>
		</h1>
		<h1 class="text-6xl font-sans font-bold">
			<span
				transition:typewriter={{ speed: 0.2, delay: 2400 }}
				class="bg-gradient-to-br from-green-500 to-green-900 bg-clip-text text-transparent box-decoration-clone"
				>?</span
			>
		</h1>
	</div>
{/if}
