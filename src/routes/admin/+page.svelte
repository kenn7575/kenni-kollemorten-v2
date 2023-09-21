<script lang="ts">
	import type { PageData } from './$types';
	import { firebaseAuth } from '$lib/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { user } from '$lib/firebase';

	$: if ($user) {
		goto('/');
	}

	let email = '';
	let password = '';
	let error = '';
	let userCredential: any;

	async function signIn(e: any) {
		e.preventDefault();
		console.log('signing in');
		if (email === '' || password === '') {
			error = 'Udfyld venligst alle felter.';
			return;
		}
		await signInWithEmailAndPassword(firebaseAuth, email, password)
			.then((_userCredential) => {
				error = '';
				userCredential = _userCredential;
			})
			.catch((_error) => {
				error = 'Felj! ' + _error.code;
				return;
			});
		if (!userCredential) return;
		const idToken = await userCredential.user.getIdToken();
		const res = fetch('/api/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ idToken })
		});
	}

	export let data: PageData;
</script>

<main class="h-screen flex flex-col justify-center items-center relative">
	<h1 class="text-4xl font-bold">Admin login</h1>
	{#if error !== ''}
		<div
			in:fly={{ y: -200 }}
			out:fade={{ duration: 200 }}
			class="alert alert-error absolute top-0 w-fit"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>{error}</span>
			<div>
				<button
					on:click={() => {
						error = '';
					}}
					class="btn btn-sm">Close</button
				>
			</div>
		</div>
	{/if}
	<form class="flex flex-col gap-4 mt-8" on:submit={signIn}>
		<label for="email">E-Mail</label>
		<input
			autocomplete="on"
			bind:value={email}
			type="email"
			placeholder="E-Mail"
			class="input input-bordered input-primary w-full max-w-md"
		/>
		<label for="password">Password</label>
		<input
			autocomplete="on"
			bind:value={password}
			type="password"
			placeholder="Password"
			class="input input-bordered input-primary w-full max-w-md"
		/>
		<div class="w full flex justify-center">
			<button class="btn btn-outline w-min px-6 mt-4" type="submit">Login</button>
		</div>
	</form>
</main>
