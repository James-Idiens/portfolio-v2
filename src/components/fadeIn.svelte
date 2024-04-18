<script>
	import { fade } from 'svelte/transition';
	let isVisible = false;

	function toggleVisibility() {
		isVisible = !isVisible;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if !isVisible}
	<div
		on:click={toggleVisibility}
		class="animate-pulse cursor-pointer text-white text-3xl text-center"
	>
		<p>Tell me about yourself</p>
	</div>
{:else}
	<p transition:fade={{ duration: 1000 }} class="text-white">
		A product enginner is someone who does it all. They are responsible for the entire product
		lifecycle, from ideation to implementation. They work closely with product managers, designers,
		and other engineers to ensure the product is successful. Product engineers often have a mix of
		technical and business skills, and are able to wear many hats. They are the jack of all trades,
		and the master of some.
	</p>
{/if}
