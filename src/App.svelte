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

	let monsters = [
		'Crawling hand',
		'Cave bug',
		'Cave crawler',
		'Banshee',
		'Cave slime',
		'Rockslug',
		'Desert lizard',
		'Cockatrice',
		'Pyrefiend',
		'Mogre',
		'Harpie bug swarm',
		'Wall beast',
		'Killerwatt',
		'Molanisk',
		'Basilisk',
		'Terror dog',
		'Sea sneak',
		'Fever spider',
		'Sulphur lizard',
		'Infernal mage',
		'Brine rat',
		'Bloodveld',
		'Jelly',
		'Turoth',
		'Mutated zygomite',
		'Cave horror',
		'Aberrant spectre',
		'Wyrm',
		'Spiritual creature',
		'Dust devil',
		'Fossil Island wyvern',
		'Kurask',
		'Skeletal wyvern',
		'Gargoyle',
		'Black dragon',
		'Nechryael',
		'Drake',
		'Abyssal demon',
		'Cave kraken',
		'Dark beast',
		'Smoke devil',
		'Hydra'
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
		max-width: 100%;
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
				<input list="monsters">
				<input list="monsters">
				<input list="monsters">
				<input list="monsters">
				<input list="monsters">
				<input list="monsters">
				<label>
					<input type="checkbox">
					Purchased "Stop the Wyvern"
				</label>
				<datalist id="monsters">
					{#each monsters as monster}
						<option value="{monster}"></option>
					{/each}
				</datalist>
			</fieldset>
			
		</form>
	</section>
</main>
