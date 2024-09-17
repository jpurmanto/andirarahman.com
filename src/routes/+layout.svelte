<script lang="ts">
	import '../app.css';
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher';
	import { ScrollArea } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { Sun, Moon } from 'lucide-svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Andira Rahman</title>
</svelte:head>

<ModeWatcher />

<main class="flex h-dvh flex-col md:flex-row">
	<!-- Navigation Bar -->
	<nav
		class="flex h-auto justify-between bg-primary selection:bg-accent selection:text-primary md:h-dvh md:flex-col dark:border-b dark:border-b-accent dark:bg-background md:dark:border-r md:dark:border-accent"
	>
		<!-- Logo -->
		<a href="/#hero" class="self-center p-2 transition-all duration-150 hover:brightness-125">
			<h1 class=" text-lg font-bold text-background md:text-2xl lg:text-3xl dark:text-accent">
				Andira Rahman
			</h1>
		</a>

		<!-- Actions -->
		<div class="flex md:flex-col">
			<button
				type="button"
				onclick={toggleMode}
				class="flex h-full w-full items-center justify-center bg-primary p-4 text-background transition-all duration-300 hover:brightness-125 dark:bg-background dark:text-accent dark:hover:brightness-150"
			>
				{#if $mode === 'light'}
					<Sun />
				{:else}
					<Moon />
				{/if}
			</button>
			<div class="flex flex-col text-center">
				<a
					href="/#works"
					class="block bg-secondary p-4 font-semibold text-background transition-all duration-300 hover:brightness-125 md:px-2 dark:text-text"
					>Works</a
				>
				<a
					href="/#contact"
					class="block bg-accent p-4 font-semibold text-text transition-all duration-300 selection:bg-primary selection:text-accent hover:brightness-125 md:px-2 dark:text-background"
					>Contact</a
				>
			</div>
		</div>
	</nav>

	<ScrollArea.Root class="relative max-h-dvh w-full selection:bg-accent selection:text-primary">
		<!-- Content -->
		<ScrollArea.Viewport class="h-full w-full snap-y scroll-smooth">
			<ScrollArea.Content>
				{@render children()}
			</ScrollArea.Content>
		</ScrollArea.Viewport>

		<!-- Vertical Scrollbar -->
		<ScrollArea.Scrollbar
			orientation="vertical"
			class="hover:bg-dark-10 flex h-full w-2.5 touch-none select-none rounded-full border-l border-l-transparent p-px transition-all hover:w-3"
		>
			<ScrollArea.Thumb
				class="relative flex-1 rounded-full bg-primary opacity-40 transition-opacity hover:opacity-100 dark:bg-accent"
			/>
		</ScrollArea.Scrollbar>

		<!-- Horizontal Scrollbar -->
		<ScrollArea.Scrollbar
			orientation="horizontal"
			class="hover:bg-dark-10 flex h-2.5 w-full touch-none select-none flex-col rounded-full border-t border-t-transparent p-px transition-all hover:h-3"
		>
			<ScrollArea.Thumb
				class="relative flex-1 rounded-full bg-primary opacity-40 transition-opacity hover:opacity-100 dark:bg-accent"
			/>
		</ScrollArea.Scrollbar>
	</ScrollArea.Root>
</main>
