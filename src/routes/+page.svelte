<script lang="ts">
	import { Carousel } from '$lib/components/carousel';

	const data = [
		'https://picsum.photos/id/1/600/300',
		'https://picsum.photos/id/2/600/400',
		'https://picsum.photos/id/3/600/400',
		'https://picsum.photos/id/4/600/400',
		'https://picsum.photos/id/5/600/400'
	];
</script>

<section id="hero" class="grid h-dvh w-full items-end justify-center pb-4 text-center">
	<div class="space-y-2">
		<h1 class=" text-pretty text-4xl font-light">
			Hi there! I'm <span class="font-bold">Andira</span>, <br />
			an ever-so-curious <br />
			full-stack <span class="font-bold">web developer</span>
		</h1>
		<p class="font-light">
			here to <a href="/#works" class="hover:underline hover:underline-offset-2">check my work</a>?
			or
			<a href="mailto:andira.a2n@gmail.com" class="hover:underline hover:underline-offset-2"
				>want to say hi</a
			>?
		</p>
	</div>
	<div class="space-y-0 text-sm font-light">
		<p>shoot me a message at:</p>
		<a href="mailto:andira.a2n@gmail.com" class="block hover:underline hover:underline-offset-2"
			>andira.a2n@gmail.com</a
		>
	</div>
</section>

<section id="works">
	{#snippet item(data: string)}
		<div class="embla__slide ml-4 h-full w-10/12 flex-shrink-0">
			<img src={data} alt="" class="h-full w-full object-cover" />
		</div>
	{/snippet}

	<div class="grid h-dvh w-full grid-rows-2 md:grid-cols-5 md:grid-rows-1">
		<div class="h-full md:col-span-3">
			<Carousel {item} {data} />
		</div>
		<div class="h-full w-full justify-end p-4 md:col-span-2 md:block">
			<div class="mb-4 md:mb-8">
				<h2 class="text-xl font-bold md:text-3xl">Project #1</h2>
				<p class="mt-2 text-xs md:mt-4 md:text-sm">
					<span class="rounded-full bg-red-950 bg-opacity-15 p-1 dark:bg-white dark:bg-opacity-15"
						>#javascript</span
					>
					<span class="rounded-full bg-red-950 bg-opacity-15 p-1 dark:bg-white dark:bg-opacity-15"
						>#css</span
					>
					<span class="rounded-full bg-red-950 bg-opacity-15 p-1 dark:bg-white dark:bg-opacity-15"
						>#html</span
					>
				</p>
			</div>

			<p class="text-pretty text-sm md:text-base">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta eos ea, autem debitis
				reprehenderit, dignissimos consequuntur laboriosam expedita perferendis accusamus recusandae
				animi necessitatibus eligendi? Cupiditate, labore cumque? Ipsum, perspiciatis nulla
				provident molestias cum ducimus maxime harum et vero inventore adipisci. Officiis sint eaque
				voluptatum excepturi? Inventore dolore atque deleniti. Esse molestias doloremque dolore iste
				doloribus dolores velit voluptatibus mollitia. Debitis nemo voluptatem sequi suscipit
				maxime. Sint harum repudiandae nam, debitis voluptate eius minima est.
			</p>
		</div>
	</div>
</section>
