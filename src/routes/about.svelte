<script>
	let count = 0;
	function increment() {
		count++;
	}
</script>

<h1>About</h1>
<p>Count:{count}</p>
<button on:click={increment}>+1</button>
