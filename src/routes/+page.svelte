<script lang="ts">
	import Arrow from '../components/arrow.svelte';
	import FadeIn from '../components/fadeIn.svelte';

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
			class="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-xl px-6 py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-colors duration-200 animate-pulse"
			on:click={() => (visible = !visible)}
		>
			ENTER
		</button>
	</div>
{:else}
	<div class="flex flex-col items-center justify-center h-screen">
		<h1 class="text-4xl font-bold">
			<span
				transition:typewriter={{ speed: 1, delay: 0 }}
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>Are</span
			>
		</h1>
		<h1 class="text-5xl font-bold py-2">
			<span
				transition:typewriter={{ speed: 1, delay: 800 }}
				class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
				>You</span
			>
		</h1>
		<h1 class="text-6xl font-bold">
			<span
				transition:typewriter={{ speed: 1, delay: 1600 }}
				class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
				>Hiring</span
			>
		</h1>
		<h1 class="text-6xl font-bold">
			<span
				transition:typewriter={{ speed: 0.3, delay: 2400 }}
				class="bg-gradient-to-br from-green-500 to-green-900 bg-clip-text text-transparent box-decoration-clone pt-2"
				>?</span
			>
		</h1>
		<Arrow targetId="div1" />
	</div>
	<div id="div1" class="flex flex-col items-center justify-center h-screen relative">
		<div
			class="text-center font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
		>
			Looking for someone with experience in <span
				class="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden"
			>
				<ul class="block animate-text-slide text-left leading-tight [&_li]:block">
					<li class="text-blue-500">Web Development?</li>
					<li class="text-green-500">Automation Testing?</li>
					<li class="text-purple-500">DevOps?</li>
					<li class="text-yellow-500">Quality Assurance?</li>
					<li class="text-pink-500">Frontend Development?</li>
					<li class="text-red-500">IT Support?</li>
					<li aria-hidden="true">IT Support</li>
				</ul>
			</span>
		</div>
		<Arrow targetId="div2" />
	</div>
	<div id="div2" class="flex flex-col items-center justify-center h-screen relative">
		<div class="text-center text-white font-medium text-2xl md:text-4xl">
			<h2 class="mb-12">
				<span class="inline-block animate-wave">👋</span> I'm James, a Product Engineer.
			</h2>
			<div class="flex justify-center mt-12">
				<img
					src="src/lib/assets/profile.webp"
					alt="James Headshot"
					class="w-1/2 h-auto rounded-full"
				/>
			</div>
		</div>
		<div class="arrow-container absolute bottom-2 left-1/2 transform -translate-x-1/2">
			<Arrow targetId="div3" />
		</div>
	</div>

	<div id="div3" class="flex flex-col md:flex-row items-center justify-center h-screen">
		<div class="flex-1 px-6 py-12 md:p-12">
			<h2 class="text-xl md:text-3xl text-white mb-6">Stuff I've worked with</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<ul class="text-yellow-500 list-none">
					<li class="text-base md:text-lg">TypeScript/JavaScript</li>
					<li class="text-base md:text-lg">React</li>
					<li class="text-base md:text-lg">SvelteKit</li>
					<li class="text-base md:text-lg">Node.js</li>
					<li class="text-base md:text-lg">Tailwind CSS</li>
					<li class="text-base md:text-lg">SQL</li>
					<li class="text-base md:text-lg">C#/.NET</li>
				</ul>
				<ul class="text-green-500 list-none">
					<li class="text-base md:text-lg">Playwright</li>
					<li class="text-base md:text-lg">Jest/Vitest</li>
					<li class="text-base md:text-lg">Manual testing</li>
				</ul>
				<ul class="text-indigo-500">
					<li class="text-base md:text-lg">Docker</li>
					<li class="text-base md:text-lg">Azure</li>
					<li class="text-base md:text-lg">Git</li>
					<li class="text-base md:text-lg">CI/CD pipelines</li>
				</ul>
			</div>
			<div class="mt-12 text-white">
				<h2 class="text-xl md:text-2xl font-bold mb-4">Qualifications</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<p class="text-base font-medium md:text-lg">University of Canterbury:</p>
						<p class="text-base">BCom with a major in Management & minor in Marketing</p>
					</div>
					<div>
						<p class="text-base font-medium md:text-lg">Dev Academy:</p>
						<p class="text-base text-slate-200">New Zealand Certificate in Applied Software Development</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-1 px-6 py-12 md:p-12">
			<FadeIn />
		</div>
	</div>
{/if}
