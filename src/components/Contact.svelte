<script lang="ts">
	import { PUBLIC_CONTACT_NUMBER, PUBLIC_CONTACT_EMAIL } from '$env/static/public';
	import Form from './Form.svelte';
</script>

<div id="contact" class="container">
	<div class="card">
		<h3 class="title">Contacts</h3>
		<div class="info-container">
			<div>
				<div class="flex">
					<h5>Phone:</h5>
					<a href={`tel:+91${PUBLIC_CONTACT_NUMBER}`}>+91-{PUBLIC_CONTACT_NUMBER}</a>
				</div>
				<div class="flex">
					<h5>Email:</h5>
					<a href={`mailto:${PUBLIC_CONTACT_EMAIL}`}><span>{PUBLIC_CONTACT_EMAIL}</span></a>
				</div>
			</div>
		</div>
		<Form />
	</div>
</div>

<style>
	.info-container {
		margin-block-start: 3em;
	}

	.flex {
		display: flex;
		gap: 1em;
		font-size: 1.2rem;
		font-weight: 300;
		text-decoration: none;
	}

	.flex h5 {
		flex: 0 1 4em;
		font-size: 1.2rem;
		font-weight: 300;
	}

	.flex a {
		text-decoration: none;
		color: lightsteelblue;
	}

	.flex a:hover {
		text-decoration: underline;
		text-underline-offset: 5px;
	}
</style>
