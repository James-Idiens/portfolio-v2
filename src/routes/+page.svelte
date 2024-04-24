<script lang="ts">
	import Arrow from '../components/arrow.svelte';
	import FadeIn from '../components/fadeIn.svelte';
	import Faq from '../components/faq.svelte';

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

{#if visible}
	<div class="flex flex-col items-center justify-center h-screen">
		<button
			class="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-xl px-6 py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-colors duration-200 animate-pulse waviy"
			on:click={() => (visible = !visible)}
		>
			<span style="--i:1">E</span>
			<span style="--i:2">N</span>
			<span style="--i:3">T</span>
			<span style="--i:4">E</span>
			<span style="--i:5">R</span>
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

	<div id="div3" class="h-screen relative">
		<h2 class="text-xl text-center font-semibold md:text-3xl text-white pt-6">
			Skillset & Education
		</h2>
		<div class="flex flex-col md:flex-row items-center justify-center">
			<div class="flex-1 px-6 py-12 md:p-12">
				<div class="text-white jersey-15-regular grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
							alt="TypeScript"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">TypeScript</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
							alt="React"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">React</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
							alt="SvelteKit"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">SvelteKit</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
							alt="Node.js"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">Node.js</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://www.svgrepo.com/show/374118/tailwind.svg"
							alt="Tailwind CSS"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">Tailwind CSS</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://www.svgrepo.com/show/331760/sql-database-generic.svg"
							alt="SQL"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">SQL</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png"
							alt="C#/.NET"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">C#/.NET</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png"
							alt="Playwright"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">Playwright</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://jestjs.io/img/jest.svg"
							alt="Jest/Vitest"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">Jest/Vitest</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://www.svgrepo.com/show/439004/testing-methodologies.svg"
							alt="Manual testing"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">Manual testing</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://www.svgrepo.com/show/349342/docker.svg"
							alt="Docker"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">Docker</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://swimburger.net/media/ppnn3pcl/azure.png"
							alt="Azure"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">Azure</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png"
							alt="Git"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">Git</p>
					</div>
					<div class="shadow-md rounded p-2 m-1">
						<img
							src="https://code.benco.io/icon-collection/other/devops-pipelines.svg"
							alt="CI/CD pipelines"
							class="w-8 h-8 mx-auto mb-1"
						/>
						<p class="text-center text-sm font-normal">CI/CD pipelines</p>
					</div>
				</div>
				<p class="text-white text-center md:pt-3">Things I've worked with ☝</p>
			</div>
			<div class="flex-1 px-6 py-12 md:p-12">
				<div class="text-white">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<p class="text-base font-medium md:text-lg">University of Canterbury:</p>
							<p class="text-base">BCom with a major in Management & minor in Marketing</p>
						</div>
						<div>
							<p class="text-base font-medium md:text-lg">Dev Academy:</p>
							<p class="text-base text-slate-200">
								New Zealand Certificate in Applied Software Development
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Arrow targetId="div4" />
	</div>
	<div id="div4" class="flex flex-col items-center justify-center h-screen relative">
		<Faq />
	</div>
{/if}

<style>
	.jersey-15-regular {
		font-family: 'Jersey 15', sans-serif;
		font-weight: 400;
		font-style: normal;
	}
	.waviy span {
		position: relative;
		display: inline-block;
		color: #fff;
		animation: flip 3s infinite;
		animation-delay: calc(0.2s * var(--i));
	}
	@keyframes flip {
		0%,
		80% {
			transform: rotateY(360deg);
		}
	}
</style>
