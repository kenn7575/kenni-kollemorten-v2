<!-- Typewriter.svelte -->
<script>
	import { onMount } from 'svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	let text = $state('');
	let delay = 100; // Delay between each character typing (in milliseconds)

	onMount(() => {
		const slot = document.querySelector('#typewriter-slot');
		if (slot) {
			const children = slot.children;
			if (children.length > 0) {
				const textContent = children[0].textContent;
				typeWriterEffect(textContent ?? '');
			}
		}
	});

	/** @param {string} content */
	function typeWriterEffect(content) {
		let index = 0;
		text = '';
		function type() {
			if (index < content.length) {
				text += content.charAt(index);
				index++;
				setTimeout(type, delay);
			}
		}
		type();
	}
</script>

<div id="typewriter-slot" class="hidden">
	{@render children?.()}
</div>

<p>{text}</p>

<style>
	/* Add your CSS styles for typewriter animation here */
</style>
