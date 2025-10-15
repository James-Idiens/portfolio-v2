<script>
	import '../app.css';
</script>

<svelte:head>
	<!-- Basic Meta -->
	<title>James Idiens – Product Engineer</title>
	<meta name="description" content="Portfolio of James Idiens, a Product Engineer specializing in testing, automation, and cloud infrastructure.">
	<meta name="author" content="James Idiens">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Open Graph / Social Preview -->
	<meta property="og:title" content="James Idiens – Product Engineer">
	<meta property="og:description" content="Portfolio of James Idiens, a Product Engineer specializing in testing, automation, and cloud infrastructure.">
	<meta property="og:type" content="website">
	<meta property="og:image" content="/og-image.png"> <!-- Optional preview image -->

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="James Idiens – Product Engineer">
	<meta name="twitter:description" content="Portfolio of James Idiens, a Product Engineer specializing in testing, automation, and cloud infrastructure.">
	<meta name="twitter:image" content="/og-image.png">

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon.png">
</svelte:head>

<div class="font-noto-sans">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: #111827;
	}
</style>
