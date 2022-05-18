<script>
	import { user } from '../../stores/userStore';

	export let todos = ['hola'];
</script>

{JSON.stringify($user, null, 2)}
{#each todos as todo}
	<p>{todo}</p>
{/each}
