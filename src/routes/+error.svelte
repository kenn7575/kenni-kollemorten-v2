<script lang="ts">
	import { page } from '$app/stores';
	import Img404 from '$lib/img/Error404.jpg';
</script>

<div class="py-16 flex justify-center flex-col items-center gap-8">
	<img src={Img404} class="max-h-192" alt="error 404" />
	<div class="text-base-content">
		<h1 class="text-6xl font-semibold">{$page.status}</h1>
		<p class="text-xl font-light">{$page.error?.message}</p>
		<a href="/" class="btn my-8 btn-primary">Forside</a>
	</div>
</div>
