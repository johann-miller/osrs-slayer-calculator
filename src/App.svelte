<script>
	import {UnlockMonsters, BlockMonsters, Quests} from './store.js'
	import MonsterCard from './components/MonsterCard.svelte'
	import QuestCard from './components/QuestCard.svelte'

	let unlockMonsters, blockMonsters, quests = []

	UnlockMonsters.subscribe(value => {
		unlockMonsters = value
	})

	BlockMonsters.subscribe(value => {
		blockMonsters = value
	})

	Quests.subscribe(value => {
		quests = value
	})
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
		position: relative;
		display: flex;
		flex-flow: column;
		align-items: center;
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
		margin-bottom: 2rem;

		border-bottom: 1px #e7e7e7 solid;
	}

	header h1 {
		margin-bottom: 2rem;
	}

	header p {
		text-align: center;
	}

	section {
		position: absolute;
		top: 0;
		display: flex;
		flex-flow: column;
		align-items: center;
		margin-top: 2rem;
	}

	fieldset {
		width: 100%;
	}

	.slayer-level {
		width: 5rem;
		text-align: center;
	}

	.toggle-options {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		height: 2.5rem;
		border-radius: 1.25rem;
		background: #900;
		color: #fafafa;
	}
	
</style>

<main>
	
	<section class="options">
		<header>
			<h1>Slayer calculator</h1>
			<p>
				A simple app that calculates the chances of each slayer assignment
			</p>
	</header>
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
				<h2 class="field-header">Quests</h2>
				<ul>
					{#each quests as value}
						<li>
							<QuestCard quest="{value}" toggled="{value.toggled}"/>
						</li>
					{/each}
				</ul>
			</fieldset>
			
		</form>
	</section>
	<section class="results">
	</section>
	<button class="toggle-options">
		Results
	</button>
</main>
