<script>
	export let user = { username: '' };
</script>

<h3>Welcome {user.name}</h3>
<pre>{JSON.stringify(user, null, 2)}</pre>
