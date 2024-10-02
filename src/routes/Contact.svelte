<script lang="ts"></script>

<div class="container">
	<div class="card">
		<h3 class="title">Contacts</h3>
		<div class="info-container">
			<div>
				<div class="flex">
					<h5>Phone:</h5>
					<a href="tel:+918762476331">+91-8762476331</a>
				</div>
				<div class="flex">
					<h5>Email:</h5>
					<a href="mailto:subraths@proto.me"><span>subraths@proton.me</span></a>
				</div>
			</div>
		</div>
		<form action="" on:submit|preventDefault={() => {}} method="post">
			<h5 class="hi-title">Say hello!</h5>
			<div class="input-container">
				<div>
					<input type="text" name="name" placeholder="Name" />
				</div>
				<div>
					<input type="text" name="email" placeholder="Email" />
				</div>
			</div>
			<input class="subject" type="text" name="subject" placeholder="Subject" />

			<textarea name="content" placeholder="Message" />
			<button class="btn">Send</button>
		</form>
	</div>
</div>

<style>
	.info-container {
		margin-block-start: 3em;
	}

	.hi-title {
		margin-block-start: 2em;
		margin-block-end: 0.5em;
		font-size: 1.6rem;
		font-weight: 300;
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

	.input-container {
		display: flex;
		gap: 3em;
	}

	.input-container > div {
		flex: 1 1 150px;
		flex-wrap: wrap;
	}

	input,
	textarea {
		font-size: 1.2rem;
		width: 100%;
		border: 1px solid grey;
		border-radius: 0.1em;
		padding-block: 0.5em;
		padding-inline: 0.5em;
		margin-block: 0.5em;
	}

	.input-container input {
		flex: 1 1 150px;
	}

	.btn {
		background-color: blueviolet;
		color: beige;
		border: none;
		padding: 0.3em 1em;
		font-size: 1.3em;
		border-radius: 0.3em;
		margin-block-start: 1em;
		display: inline-block;
	}

	.btn:hover {
		background-color: purple;
		cursor: pointer;
	}
</style>
