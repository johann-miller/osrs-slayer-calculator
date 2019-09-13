<script>
	import Unlock from './components/Unlock.svelte'
	import BlockField from './components/BlockField.svelte'

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

	form {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 35rem;
		max-width: 100vw;
		padding: 0 1rem;
	}

	header {
		display: flex;
		flex-flow: column;
		align-items: center;
		max-width: 40rem;
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

	.slayer-level {
		width: 5rem;
		text-align: center;
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
			<fieldset>
				<legend>Slayer level</legend>
				<input class="slayer-level" type="number" name="slayer-level" min="1" max="99" maxlength="2">
			</fieldset>
			
			<fieldset>
				<legend>Unlocked tasks</legend>
				<ul>
					{#each unlocks as unlock, i}
						<li>
							<Unlock unlock={unlock}/>
						</li>
					{/each}
				</ul>
			</fieldset>
			
			<fieldset>
				<legend>Blocked tasks</legend>
				<BlockField />
				<BlockField />
				<BlockField />
				<BlockField />
				<BlockField />
				<BlockField />
				<label>
					<input type="checkbox" value="Fossil Island wyvern">
					Purchased "Stop the Wyvern"
				</label>
			</fieldset>
			
		</form>
	</section>
</main>
