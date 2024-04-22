<script lang="ts">
	import { fade } from 'svelte/transition';
	let selectedQuestion: string | null = null;

	function selectQuestion(question: string | null) {
		selectedQuestion = question;
	}
</script>

<div class="flex flex-col h-screen items-center">
	<div class="w-full text-center pt-10">
		<button
			on:click={() => selectQuestion('about')}
			on:keydown={(event) => {
				if (event.key === 'Enter') {
					selectQuestion('about');
				}
			}}
			class="animate-pulse cursor-pointer text-white text-3xl pb-2"
		>
			<p>About me</p>
		</button>
		<hr class="border border-white w-1/4 mx-auto" />
		<button
			on:click={() => selectQuestion('job')}
			on:keydown={(event) => {
				if (event.key === 'Enter') {
					selectQuestion('job');
				}
			}}
			class="animate-pulse cursor-pointer text-white text-3xl py-2"
		>
			<p>What I'm looking for</p>
		</button>
		<button
			on:click={() => selectQuestion('contact')}
			on:keydown={(event) => {
				if (event.key === 'Enter') {
					selectQuestion('contact');
				}
			}}
			class="animate-pulse cursor-pointer text-white text-3xl pt-2"
		>
			<p>Contact me</p>
		</button>
	</div>
	<div class="flex-grow flex items-center justify-center">
		<div class="w-full text-center">
			{#if selectedQuestion === 'about'}
				<p transition:fade={{ duration: 500 }} class="text-white">
					A product engineer is someone who does it all...
				</p>
			{:else if selectedQuestion === 'job'}
				<p transition:fade={{ duration: 500 }} class="text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit...
				</p>
			{:else if selectedQuestion === 'contact'}
				<p transition:fade={{ duration: 500 }} class="text-white">You can reach me at</p>
			{:else}
				<div style="visibility: hidden;"></div>
			{/if}
		</div>
	</div>
</div>
