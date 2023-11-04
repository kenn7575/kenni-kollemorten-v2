<script lang="ts">
	import type { PageData } from './$types';
	import { firebaseAuth } from '$lib/functions/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { user } from '$lib/functions/firebase';

	let email = '';
	let password = '';
	let error = '';

	$: if ($user) {
		redirect();
	}

	function redirect() {
		const redirectTo = $page.url.searchParams.get('redirect');
		if (redirectTo) {
			console.log('redirecting to', '/' + redirectTo.slice(1));
			goto('/' + redirectTo.slice(1));
		} else {
			console.log('redirecting to', '/');
			goto('/');
		}
	}

	async function signIn(e: any) {
		e.preventDefault();
		console.log('signing in');
		if (email === '' || password === '') {
			error = 'Udfyld venligst alle felter.';
			return;
		}
		try {
			const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
			if (!userCredential) return;
			console.log('userCredential', userCredential);
			const idToken = await userCredential.user.getIdToken();
			const res = await fetch('/api/admin/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ idToken })
			});
			if (res.ok) {
				redirect();
			}
		} catch (_error: any) {
			console.log('error', _error);
			error = _error.message;
		}
	}
	const validateEmail = (email: string) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	export let data: PageData;
</script>

<svelte:head>
	<title>Admin Login</title>
	<meta name="description" content="Admin login page." />
</svelte:head>
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
			class:input-error={error !== ''}
			on:focus={() => {
				error = '';
			}}
			class:input-warning={!validateEmail(email)}
		/>
		<label for="password">Password</label>
		<input
			autocomplete="on"
			bind:value={password}
			type="password"
			placeholder="Password"
			class="input input-bordered input-primary w-full max-w-md"
			class:input-error={error !== ''}
			class:input-warning={password.length < 4}
			on:focus={() => {
				error = '';
			}}
		/>
		<div class="w full flex justify-center">
			<button class="btn btn-outline w-min px-6 mt-4" type="submit">Login</button>
		</div>
	</form>
</main>
