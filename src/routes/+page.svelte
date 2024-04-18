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
		<button
			class="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-colors duration-200 animate-pulse"
			on:click={() => (visible = !visible)}
		>
			READY TO FIND
		</button>
	</div>
{:else}
	<div class="flex flex-col items-center justify-center h-screen">
		<h1 class="text-4xl font-bold">
			<span
				transition:typewriter={{ speed: 0.8, delay: 0 }}
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>Your</span
			>
		</h1>
		<h1 class="text-5xl font-bold py-2">
			<span
				transition:typewriter={{ speed: 0.8, delay: 800 }}
				class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
				>Next</span
			>
		</h1>
		<h1 class="text-6xl font-bold">
			<span
				transition:typewriter={{ speed: 0.8, delay: 1600 }}
				class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
				>Employee</span
			>
		</h1>
		<h1 class="text-6xl font-bold">
			<span
				transition:typewriter={{ speed: 0.2, delay: 2400 }}
				class="bg-gradient-to-br from-green-500 to-green-900 bg-clip-text text-transparent box-decoration-clone"
				>?</span
			>
		</h1>
		<div class="arrow-container absolute bottom-2 left-1/2 transform -translate-x-1/2">
			<div class="arrow text-4xl text-white animate-bounce">↓</div>
		</div>
	</div>
	<div class="flex flex-col items-center justify-center h-screen">
		<div
			class="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
		>
			Looking for someone with experience in <span
				class="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden"
			>
				<ul class="block animate-text-slide text-left leading-tight [&_li]:block">
					<li>Web Development</li>
					<li>Automation Testing</li>
					<li>DevOps</li>
					<li>Quality Assurance</li>
					<li>Frontend Development</li>
					<li>IT Support</li>
					<li aria-hidden="true">IT Support</li>
				</ul>
			</span>
		</div>
	</div>
{/if}
