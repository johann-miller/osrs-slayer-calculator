<script>
	import Unlock from './components/unlock.svelte'

	let unlocks = [
		{name: 'Aviansies', unlocked: false},
		{name: 'Bosses', unlocked: false},
		{name: 'Lizardmen', unlocked: false},
		{name: 'Mithril dragons', unlocked: false},
		{name: 'Red dragons', unlocked: false},
		{name: 'TzHaar', unlocked: false}
	]

	let unlockGroup = []
</script>

<style>
	main {
		display: flex;
		flex-flow: column;
		align-items: center;
		padding: 3rem 1rem;
	}

	header {
		display: flex;
		flex-flow: column;
		align-items: center;
		max-width: 35rem;
		padding: 2rem 1rem;

		border-bottom: 1px #e7e7e7 solid;
	}

	header h1 {
		margin-bottom: 2rem;
	}

	header p {
		text-align: center;
	}

	section {
		margin-top: 2rem;
	}

	
</style>

<main>
	<header>
		<h1>Slayer calculator</h1>
		<p>
			A simple app that calculates the chances of each slayer assignment
		</p>
	</header>
	<section>
		<form action="" onsubmit="event.preventDefault()">
			<label for="slayer-level">Slayer level</label>
			<input type="number" name="slayer-level" min="1" max="99">
			<label>Unlocked tasks</label>
			<ul>
				{#each unlocks as unlock, i}
					<li>
						<Unlock unlock={unlock}/>
					</li>
				{/each}
			</ul>
			<label>Blocked tasks</label>
		</form>
	</section>
</main>
