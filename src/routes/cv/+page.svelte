<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly } from 'svelte/transition';

	let node: HTMLElement;
</script>

<svelte:head>
	<title>CV</title>
	<meta name="description" content="personal portfolio website" />
</svelte:head>

<h1>cv</h1>

<header class="h-screen" />

<IntersectionObserver once={true} element={node} let:intersecting>
	<div bind:this={node}>
		{#if intersecting}
			<div transition:fly={{ delay: 200, x: -200, duration: 1000 }}>Hello world</div>
		{/if}
	</div>
</IntersectionObserver>
