<script>
	import { user } from '../stores/userStore';
	export let posts = [{ content: '' }];
</script>

<pre>
	{JSON.stringify($user, null, 2)}
</pre>
<input type="text" bind:value={$user.name} />
<input type="number" bind:value={$user.age} />
{#each posts as post}
	<div class="p-3 bg-gray-100 my-2">
		<p>{post.content}</p>
		<p>{post.user.name}</p>
	</div>
{/each}
