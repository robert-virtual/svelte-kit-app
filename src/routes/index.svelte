<script>
	async function fetchPosts() {
		const res = await fetch('/posts');
		if (res.ok) {
			return res.json();
		}
		throw new Error(res.statusText);
	}
	let postsPromise = fetchPosts();
</script>

{#await postsPromise}
	<p>cargando...</p>
{:then data}
	{#each data.posts as post}
		<div>
			<p>{post.content}</p>
		</div>
	{/each}
{:catch err}
	<p>Ups algo salio mal</p>
{/await}
