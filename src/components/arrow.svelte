<script lang="ts">
	export let targetId: string;

	function scrollTo(
		element: HTMLElement,
		[targetId]: [string]
	): { update: (args: [string]) => void } {
		element.addEventListener('click', () => {
			const target = document.getElementById(targetId);
			if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});

		return {
			update([newTargetId]: [string]) {
				targetId = newTargetId;
			}
		};
	}
</script>

<div class="arrow-container absolute bottom-2 left-1/2 transform -translate-x-1/2">
	<div use:scrollTo={[targetId]} class="arrow text-4xl text-white animate-bounce cursor-pointer">
		↓
	</div>
</div>
