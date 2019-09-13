<script>
	import {UnlockMonsters, BlockMonsters} from './store.js'
	import MonsterCard from './components/MonsterCard.svelte'

	let unlockMonsters, blockMonsters = []

	UnlockMonsters.subscribe(value => {
		unlockMonsters = value
	})

	BlockMonsters.subscribe(value => {
		blockMonsters = value
	})

	let unlockGroup = []
</script>

<style>
	.monster-icons {
		display: flex;
		flex-flow: row-;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		max-width: 100%;
	}

	.monster-icons > li {
		margin: 0.5rem;
	}

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
		width: 50rem;
		max-width: 100vw;
		padding: 0 1rem;
	}

	.field-header {
		margin-bottom: 1rem;
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

	fieldset {
		width: 100%;
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
				<h2 class="field-header">Slayer level</h2>
				<input class="slayer-level" type="number" name="slayer-level" min="1" max="99" maxlength="2">
			</fieldset>
			
			<fieldset>
				<h2 class="field-header">Blocked</h2>
				<ul class="monster-icons">
					{#each blockMonsters as value}
						<li>
							<MonsterCard monster="{value}" toggled="{value.toggled}"/>
						</li>
					{/each}
				</ul>
			</fieldset>

			<fieldset>
				<h2 class="field-header">Unlocked</h2>
				<ul class="monster-icons">
					{#each unlockMonsters as value}
					<li>
						<MonsterCard monster="{value}" toggled="{value.toggled}"/>
					</li>
					{/each}
				</ul>
			</fieldset>

			<fieldset>
				<h2>Quests</h2>
				<ul>
				</ul>
			</fieldset>
			
		</form>
	</section>
</main>
