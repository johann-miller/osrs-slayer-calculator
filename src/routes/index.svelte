<script>
	import {UnlockMonsters, BlockMonsters, Quests} from '../store.js'
	import MonsterCard from '../components/MonsterCard.svelte'
	import QuestCard from '../components/QuestCard.svelte'
	import SlayerMasterCard from '../components/SlayerMasterCard.svelte'

	let unlockMonsters, blockMonsters, quests = []
	let showResults = true

	UnlockMonsters.subscribe(value => {
		unlockMonsters = value
	})

	BlockMonsters.subscribe(value => {
		blockMonsters = value
	})

	Quests.subscribe(value => {
		quests = value
	})

	function toggleResults() {
		showResults = !showResults
		window.scrollTo({ top: 0, behavior: 'smooth' });
		console.log('bloop')
	}
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

	form, .slayer-masters {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 50rem;
		max-width: 100vw;
		padding: 0 1rem;
	}

	.slayer-masters li {
		width: 100%;
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
		margin: 6rem 0;

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
		right: 0;
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 100%;
		padding-bottom: 10rem;
		overflow-x: hidden;
	}

	section, .slider-container {
		transition: all 0.6s ease-in-out;
	}

	fieldset {
		width: 100%;
	}

	.hide-options {
		transform: translateX(-100%);
		overflow-y: hidden;
		position: fixed;
	}

	.hide-options > * {
		transform: translateX(100%);
	}

	.options {
		background: #fcfcfc;
	}

	.quest-icons {
		width: 100%;
		max-width: 20rem;
	}

	.results {
		z-index: -1;
		min-height: 100vh;
	}

	.slayer-level {
		width: 5rem;
		text-align: center;
	}

	.slider-container {
		position: relative;
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 100%;
	}

	.toggle-results {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		height: 2.5rem;
		border-radius: 1.25rem;
		background: #900;
		color: #fcfcfc;
	}

	.toggle-results::before {
		content: 'Results';
	}

	.options-button::before {
		content: 'Options';
	}
</style>

<section class="options" class:hide-options="{showResults}">
<div class="slider-container">
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
			<ul class="quest-icons">
				{#each quests as value}
					<li>
						<QuestCard quest="{value}" toggled="{value.toggled}"/>
					</li>
				{/each}
			</ul>
		</fieldset>
	</form>
</div>
</section>
<section class="results">
	<header>
		<h1>Slayer calculator</h1>
		<p>Results based on your information</p>
	</header>
	<ul class="slayer-masters">
		<li>
			<SlayerMasterCard masterIndex=0 />
		</li>
		<li>
			<SlayerMasterCard masterIndex=1 />
		</li>
		<li>
			<SlayerMasterCard masterIndex=2 />
		</li>
	</ul>
</section>
<button class="toggle-results" class:options-button="{showResults}" on:click|preventDefault={toggleResults}></button>