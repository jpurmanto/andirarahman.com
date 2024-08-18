<script lang="ts" generics="T">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import EmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel';

	import { Button } from 'bits-ui';
	import { ChevronLeft, ChevronRight, Fullscreen } from 'lucide-svelte';

	type Props = {
		data: T[];
		class?: string;
		item: Snippet<[T]>;
	};

	let { class: className, data, item }: Props = $props();

	let embla: EmblaCarouselType;
	let viewport: HTMLDivElement, dotsContainer: HTMLDivElement;
	let carouselOptions: EmblaOptionsType = {
		loop: true,
		align: 'center'
	};

	$effect(() => {
		embla = EmblaCarousel(viewport, carouselOptions);
		dotsContainer.innerHTML = embla
			.scrollSnapList()
			.map(
				(i) =>
					`<button class="md:size-8 size-6 rounded-full border-2 border-accent hover:brightness-125"></button>`
			)
			.join('');
		dotsContainer.childNodes.forEach((child, idx) => {
			if (idx === 0) {
				(child as HTMLButtonElement).classList.add('brightness-150');
			}
			child.addEventListener('click', () => embla.scrollTo(idx));
		});

		embla.on('select', () => {
			let prev = dotsContainer.childNodes[embla.previousScrollSnap()] as HTMLButtonElement;
			let current = dotsContainer.childNodes[embla.selectedScrollSnap()] as HTMLButtonElement;
			current.classList.add('brightness-150');
			prev.classList.remove('brightness-150');
		});
		// return clean-up arrow function
		return () => {};
	});
</script>

<div
	class="embla flex h-full w-full flex-col justify-between space-y-4 overflow-hidden bg-primary p-4 dark:border dark:border-accent dark:bg-background md:dark:border-l-0"
>
	<!-- Fullscreen Button -->
	<div class="flex justify-end">
		<Button.Root
			class=" rounded-full border border-accent p-2 transition-all duration-300 hover:brightness-125"
		>
			<Fullscreen class="size-4 text-accent md:size-6" />
		</Button.Root>
	</div>
	<div class="embla__viewport w-full overflow-hidden" bind:this={viewport}>
		<div class="embla__container flex items-center">
			{#each data as d, i (i)}
				{@render item(d)}
			{/each}
		</div>
	</div>
	<!-- Action Buttons (Next, Prev, Thumbs) -->
	<div class="flex w-full items-center justify-between">
		<div class="flex gap-4">
			<Button.Root
				class=" rounded-full border border-accent p-2 transition-all duration-300 hover:brightness-125"
				onclick={() => embla.scrollPrev(false)}
			>
				<ChevronLeft class="size-4 text-accent md:size-6" />
			</Button.Root>
			<Button.Root
				class=" rounded-full border border-accent p-2 transition-all duration-300 hover:brightness-125"
				onclick={() => embla.scrollNext(false)}
			>
				<ChevronRight class="size-4 text-accent md:size-6" />
			</Button.Root>
		</div>
		<div class="flex gap-2" bind:this={dotsContainer}></div>
	</div>
</div>
