<script context="module">
	export const load = ({ session }) => {
		return {
			props: {
				userId: session.userId
			}
		};
	};
</script>

<script>
	import { page } from '$app/stores';
	import '../app.css';
	export let userId = false;
</script>

<nav class="bg-gray-50 p-3 flex gap-2">
	<a class:active={$page.url.pathname == '/'} href="/">Inicio</a>
	<a class:active={$page.url.pathname == '/about'} href="/about">About</a>
	<a class:active={$page.url.pathname == '/todos'} href="/todos">Todos</a>
	<a class:active={$page.url.pathname == '/login'} href="/login">Login</a>
	<a class:active={$page.url.pathname == '/register'} href="/register">Register</a>
	{#if userId}
		<a class:active={$page.url.pathname == '/private'} href="/private">Private</a>
	{/if}
</nav>
<slot />

<style>
	a {
		text-decoration: none;
		color: black;
	}
	.active {
		color: orange;
	}
</style>
