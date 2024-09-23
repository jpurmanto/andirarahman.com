<script lang="ts">
	import { Carousel } from '$lib/components/carousel';
	import type { ImageData } from '$lib/components/carousel';

	const cpm = [
		{ src: '/content/CPM Project_CPM Diagram.jpg' },
		{ src: '/content/CPM Project_Timeline and Table.jpg' }
	];

	const hsse = [
		{ src: '/content/HSSE Project_Custom Inputs.jpg' },
		{ src: '/content/HSSE Project_Data Tree Table.jpg' },
		{ src: '/content/HSSE Project_Custom Risk Matrix Input.jpg' },
		{ src: '/content/HSSE Project_Progress Table.jpg' },
		{ src: '/content/HSSE Project_Form to PDF.jpg' }
	];
</script>

<section id="hero" class="grid h-dvh w-full items-end justify-center pb-4 text-center">
	<div class="space-y-4">
		<h1 class=" text-pretty text-5xl font-light">
			Hi there! I'm <span class="font-bold">Andira</span>, <br />
			an ever-so-curious <br />
			full-stack <span class="font-bold">web developer</span>
		</h1>
		<p class="text-lg font-light">
			here to <a href="/#works">check my work</a>? or
			<a href="mailto:andira.a2n@gmail.com">want to say hi</a>?
		</p>
	</div>
	<div class="space-y-0 text-sm font-light">
		<p>shoot me a message at:</p>
		<a href="mailto:andira.a2n@gmail.com">andira.a2n@gmail.com</a>
	</div>
</section>

<section id="works">
	{#snippet item({ src, alt }: ImageData)}
		<div class="embla__slide ml-4 h-full w-10/12 flex-shrink-0">
			<img {src} {alt} class="h-full w-full object-cover" />
		</div>
	{/snippet}
	<div class="grid h-dvh w-full snap-start grid-rows-2 md:grid-cols-5 md:grid-rows-1">
		<div class="h-full md:col-span-3">
			<Carousel {item} data={hsse} />
		</div>
		<div class="h-full w-full justify-end p-4 md:col-span-2 md:block">
			<div class="mb-4">
				<h2 class="text-xl font-bold md:text-3xl">Internal Safety Reports App</h2>
				<p class="mt-2 text-xs md:mt-4 md:text-sm">
					<span class="tag">#HTML</span>
					<span class="tag">#CSS</span>
					<span class="tag">#Javascript</span>
					<span class="tag">#Typescript</span>
					<span class="tag">#Svelte</span>
					<span class="tag">#SvelteKit</span>
					<span class="tag">#MongoDB</span>
					<span class="tag">#GCP</span>
				</p>
			</div>

			<p class="text-pretty text-sm md:text-base">
				The client is an oil and gas distribution company which needs to operate under tight safety
				regulations and thus need an accessible way to create and manage safety reports. They
				requested me to create an online portal for creating, reviewing, and managing said safety
				report documents. It's complete with authentication logic to make the app more private and
				secure, automated email notifications, PDF generation with OneDrive backup to ensure smooth
				operations, custom form input to match the document's format, and database CRUD
				functionalities for both the user accounts and the reports.
			</p>
		</div>
	</div>
	<div class="grid h-dvh w-full snap-start grid-rows-2 md:grid-cols-5 md:grid-rows-1">
		<div class="h-full md:col-span-3">
			<Carousel {item} data={cpm} />
		</div>
		<div class="h-full w-full justify-end p-4 md:col-span-2 md:block">
			<div class="mb-4 md:mb-8">
				<h2 class="text-xl font-bold md:text-3xl">Critical Path Generator</h2>
				<p class="mt-2 text-xs md:mt-4 md:text-sm">
					<span class="tag">#HTML</span>
					<span class="tag">#CSS</span>
					<span class="tag">#Javascript</span>
					<span class="tag">#Typescript</span>
					<span class="tag">#Svelte</span>
					<span class="tag">#SvelteKit</span>
					<span class="tag">#Vercel</span>
				</p>
			</div>

			<p class="text-pretty text-sm md:text-base">
				The client was an employee of an oil and gas distribution company who wanted to propose a
				new solution to planning and managing projects within their company. That solution is a
				web-based application that can generate a critical path diagram using the critical path
				method on data from a work and cost breakdown schedule. So I helped them translate the
				algorithm of the critical path method into code, created a form for users to input each data
				points for the algorithm to use, and the end result which was a critical path diagram and an
				interactive Gantt chart of the broken down schedule data.
				<a href="https://cpm.andirarahman.com/cpm" target="_blank" rel="noopener noreferrer"
					>Check out the app here.</a
				>
			</p>
		</div>
	</div>
</section>

<section id="contact" class="flex h-dvh flex-col items-center justify-evenly p-16">
	<a class="text-4xl font-semibold" href="mailto:andira.a2n@gmail.com">Email</a>
	<a class="text-4xl font-semibold" href="https://github.com/singodimejo">GitHub</a>
	<a class="text-4xl font-semibold" href="https://linkedin.com/in/andira-rahman-imani">LinkedIn</a>
</section>

<style lang="postcss">
	p span.tag {
		@apply rounded-full bg-red-950 bg-opacity-15 p-1 leading-8 dark:bg-white dark:bg-opacity-15;
	}

	a {
		@apply italic hover:underline hover:underline-offset-4;
	}
</style>
