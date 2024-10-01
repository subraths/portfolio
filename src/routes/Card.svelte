<script>
	export let items;
	export let title;
</script>

<div>
	<h5 class="title1">{title}</h5>
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
		padding: 0.2em 1em;
		border-radius: 1em;
		color: wheat;
		font-weight: 300;
		display: flex;
	}

	.card-item {
		border: 1px solid white;
	}

	.card-item img {
		width: 23px;
		height: 23px;
		padding-inline-end: 0.3em;
		margin-block: auto;
	}
</style>
