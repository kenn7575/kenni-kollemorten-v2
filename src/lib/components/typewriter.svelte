<!-- Typewriter.svelte -->
<script>
	import { onMount } from 'svelte';

	let text = '';
	let delay = 100; // Delay between each character typing (in milliseconds)

	onMount(() => {
		const slot = document.querySelector('#typewriter-slot');
		if (slot) {
			const children = slot.children;
			if (children.length > 0) {
				const textContent = children[0].textContent;
				typeWriterEffect(textContent);
			}
		}
	});

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
	<slot />
</div>

<p>{text}</p>

<style>
	/* Add your CSS styles for typewriter animation here */
</style>
