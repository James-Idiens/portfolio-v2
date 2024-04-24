<script lang="ts">
	let open = false;
</script>

<section class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16">
			<h2
				class="font-semibold text-xl md:text-3xl text-white font-manrope text-center leading-[3.25rem]"
			>
				About me
			</h2>
		</div>
		<div class="accordion-group" data-accordion="default-accordion">
			<div
				class="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4 active"
				id="basic-heading-one-with-icon"
			>
				<button
					class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
					aria-controls="basic-collapse-one-with-icon"
					on:click={() => (open = !open)}
				>
					<h3>Who am I?</h3>
					<svg
						class="w-6 h-6 text-white transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600 origin-center"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 12H18M12 18V6"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<svg
						class="w-6 h-6 text-white transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 12H18"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
				</button>
				<div
					id="basic-collapse-one-with-icon"
					class="accordion-content w-full overflow-hidden pr-4"
					aria-labelledby="basic-heading-one"
					style="max-height: {open ? '250px' : '0'};"
				>
					<p class="text-base text-white font-normal leading-6">
						To reset your password, go to the 'Forgot password' page, enter your email address, and
						click 'Submit.' You will receive an email with instructions on how to reset your
						password. Follow the instructions in the email to set a new password for your account.
					</p>
				</div>
			</div>
      
			<div
				class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
				id="basic-heading-two-with-icon"
			>
				<button
					class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
					aria-controls="basic-collapse-two-with-icon"
				>
					<h5>How do I update my billing information?</h5>
					<svg
						class="w-6 h-6 text-white transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 12H18M12 18V6"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<svg
						class="w-6 h-6 text-white transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 12H18"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
				</button>
				<div
					id="basic-collapse-two-with-icon"
					class="accordion-content w-full overflow-hidden pr-4"
					aria-labelledby="basic-heading-two"
				>
					<p class="text-base text-white font-normal leading-6">
						To update your billing information, go to your account settings and find the 'Billing'
						or 'Payment' section. Click on 'Edit' or 'Update' next to your billing information, make
						the necessary changes, and then click 'Save' or 'Update' to confirm the changes.
					</p>
				</div>
			</div>
			<div
				class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
				id="basic-heading-three-with-icon"
			>
				<button
					class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
					aria-controls="basic-collapse-three-with-icon"
				>
					<h5>How can I contact customer support?</h5>
					<svg
						class="w-6 h-6 text-white transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 12H18M12 18V6"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<svg
						class="w-6 h-6 text-white transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 12H18"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
				</button>
				<div
					id="basic-collapse-three-with-icon"
					class="accordion-content w-full overflow-hidden pr-4"
					aria-labelledby="basic-heading-three"
				>
					<p class="text-base text-white font-normal leading-6">
						To contact customer support, visit the 'Help' or 'Support' section of our website or
						application. You can usually find a 'Contact Us' or 'Support' link that will direct you
						to a form, email address, or live chat where you can reach out to our support team for
						assistance.
					</p>
				</div>
			</div>
			<div
				class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
				id="basic-heading-four-with-icon"
			>
				<button
					class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
					aria-controls="basic-collapse-four-with-icon"
				>
					<h5>How do I delete my account?</h5>
					<svg
						class="w-6 h-6 text-white transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 12H18M12 18V6"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<svg
						class="w-6 h-6 text-white transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 12H18"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
				</button>
				<div
					id="basic-collapse-four-with-icon"
					class="accordion-content w-full overflow-hidden pr-4"
					aria-labelledby="basic-heading-four"
				>
					<p class="text-base text-white font-normal leading-6">
						To delete your account, go to your account settings and look for the option to delete or
						deactivate your account. Follow the provided instructions, which may involve confirming
						your decision and providing additional information, to permanently delete your account.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
