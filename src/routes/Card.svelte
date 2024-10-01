<script>
	export let items;
	export let title;
</script>

<div>
	<h4 class="title1">{title}</h4>
	<ul class="card-item-container">
		{#each items as item}
			<li class="card-item">
				<img src={item.icon} alt={item.name} />
				<span>{item.name}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	.title1 {
		text-transform: capitalize;
	}

	.card-item-container {
		display: flex;
		list-style-type: none;
		gap: 1em;
		flex-wrap: wrap;
	}

	.card-item {
		border-block: 1px solid red;
		padding: 0.4em 1em;
		border-radius: 1em;
		font-weight: 300;
		display: flex;
	}

	.card-item {
		border: 1px solid purple;
	}

	.card-item img {
		width: 23px;
		height: 23px;
		padding-inline-end: 0.3em;
		margin-block: auto;
	}
</style>
