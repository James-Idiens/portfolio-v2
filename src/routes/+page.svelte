<script lang="ts">
	let links = [
		{
			name: 'GitHub',
			url: 'https://github.com/James-Idiens',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
		},
		{
			name: 'LinkedIn',
			url: 'https://nz.linkedin.com/in/james-idiens-1b9ab5282',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
		}
	];

	let rotation = 0;
	let isDragging = false;
	let startAngle = 0;
	let currentRotation = 0;
	let velocity = 0;
	let lastAngle = 0;
	let lastTime = 0;
	let animationFrame: number;
	let autoSpinFrame: number;
	let isAutoSpinning = true;

	// Auto-spin animation
	function autoSpin() {
		if (isAutoSpinning) {
			rotation += 0.15; // Speed of auto-spin
			autoSpinFrame = requestAnimationFrame(autoSpin);
		}
	}

	// Start auto-spinning when component loads
	if (typeof window !== 'undefined') {
		autoSpin();
	}

	function getAngle(event: MouseEvent, element: HTMLElement) {
		const rect = element.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		return Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);
	}

	function handleMouseDown(event: MouseEvent) {
		// Stop auto-spinning when user interacts
		isAutoSpinning = false;
		cancelAnimationFrame(autoSpinFrame);

		isDragging = true;
		const wheel = event.currentTarget as HTMLElement;
		startAngle = getAngle(event, wheel);
		lastAngle = startAngle;
		currentRotation = rotation;
		velocity = 0;
		lastTime = Date.now();
		cancelAnimationFrame(animationFrame);
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isDragging) return;
		const wheel = document.getElementById('tech-wheel') as HTMLElement;
		if (!wheel) return;

		const currentAngle = getAngle(event, wheel);
		const deltaAngle = currentAngle - lastAngle;
		const now = Date.now();
		const deltaTime = now - lastTime;

		// Handle angle wrapping
		let normalizedDelta = deltaAngle;
		if (Math.abs(deltaAngle) > 180) {
			normalizedDelta = deltaAngle > 0 ? deltaAngle - 360 : deltaAngle + 360;
		}

		rotation = currentRotation + (currentAngle - startAngle);
		velocity = normalizedDelta / (deltaTime || 1);
		lastAngle = currentAngle;
		lastTime = now;
	}

	function handleMouseUp() {
		if (!isDragging) return;
		isDragging = false;
		currentRotation = rotation;
		applyInertia();
	}

	function applyInertia() {
		const decay = 0.95;

		function animate() {
			if (Math.abs(velocity) > 0.1) {
				rotation += velocity * 16;
				velocity *= decay;
				animationFrame = requestAnimationFrame(animate);
			} else {
				// Resume auto-spinning after inertia stops
				isAutoSpinning = true;
				autoSpin();
			}
		}
		animate();
	}

	// Global mouse event listeners
	if (typeof window !== 'undefined') {
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
	}
</script>

<div
	class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6"
>
	<img src="/profile.webp" alt="James Idiens" class="w-32 h-32 rounded-full shadow-lg mb-6" />

	<h1 class="text-4xl font-bold mb-2">James Idiens</h1>
	<p class="text-lg text-gray-300 mb-4">Product Engineer • Christchurch, New Zealand</p>

	<p class="max-w-xl text-center text-gray-400 leading-relaxed mb-8">
		I’m a Product Engineer bridging testing, automation, and cloud operations. I’ve led testing and QA processes, handled client deployments, and maintained Azure infrastructure, helping teams deliver reliable, high-quality software. I enjoy tackling problems across the stack and learning new technologies along the way.
	</p>

	<div class="flex space-x-6">
		{#each links as link}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 transition-colors duration-200 px-4 py-2 rounded-lg shadow-md"
			>
				<img src={link.icon} alt={link.name} class="w-5 h-5" />
				<span>{link.name}</span>
			</a>
		{/each}
	</div>
</div>
<!--- Rotating tech bit-->
<section
	id="tech-cloud"
	class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden"
>
	<h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">Tech I've Worked With</h2>

	<div
		id="tech-wheel"
		class="relative w-80 h-80 cursor-grab active:cursor-grabbing"
		on:mousedown={handleMouseDown}
		style="transform: rotate({rotation}deg); transition: {isDragging
			? 'none'
			: 'transform 0.1s ease-out'};"
	>
		{#each [{ name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }, { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }, { name: 'Playwright', src: 'https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png' }, { name: 'Vitest', src: 'https://vitest.dev/logo.svg' }, { name: 'Azure', src: 'https://swimburger.net/media/ppnn3pcl/azure.png' }, { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }, { name: 'CI/CD', src: 'https://code.benco.io/icon-collection/other/devops-pipelines.svg' }, { name: 'SQL', src: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' }, { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }, { name: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }] as tech, i}
			<div
				class="absolute group"
				style="top: calc(50% - 24px); left: calc(50% - 24px); transform: rotate({i *
					(360 / 10)}deg) translate(120px) rotate(-{i * (360 / 10)}deg);"
			>
				<img
					src={tech.src}
					alt={tech.name}
					class="w-10 h-10 opacity-90 hover:opacity-100 transition-transform hover:scale-125 duration-300 filter drop-shadow-lg"
				/>
				<div
					class="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
				>
					{tech.name}
				</div>
			</div>
		{/each}
	</div>

	<p class="text-gray-400 text-center text-xs mt-6">Built with SvelteKit & Tailwind CSS</p>

	<div class="absolute inset-0 pointer-events-none overflow-hidden">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] animate-pulse-slow"
		></div>
	</div>
</section>

<style>
	@keyframes pulse-slow {
		0%,
		100% {
			opacity: 0.4;
		}
		50% {
			opacity: 0.8;
		}
	}
	.animate-pulse-slow {
		animation: pulse-slow 6s ease-in-out infinite;
	}
	img {
		object-fit: cover;
	}
</style>
