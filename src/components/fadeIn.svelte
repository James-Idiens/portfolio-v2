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
		<div class="w-full md:w-1/3 text-center">
			{#if selectedQuestion === 'about'}
				<p transition:fade={{ duration: 500 }} class="text-white">
					I'm currently a contracted Product Engineer working on a software used by majority of local government across the country. While I'm in the early stages of my IT career, my job has allowed me to work across a huge variety of disciplines and technologies. As a Product Engineer I provide a bridge between the Product Owner and the Development team. I'm equally confortable writing code, as I am presenting to stakeholders. 

					Some highlights 

				</p>
			{:else if selectedQuestion === 'job'}
				<p transition:fade={{ duration: 500 }} class="text-white">
					I'm based in Christchurch, but I'm fully open to remote work. My main passion is for front-end development, but I also enjoy testing 
				</p>
			{:else if selectedQuestion === 'contact'}
				<p transition:fade={{ duration: 500 }} class="text-white">You can reach me at</p>
			{:else}
				<div style="visibility: hidden;"></div>
			{/if}
		</div>
	</div>
</div>
