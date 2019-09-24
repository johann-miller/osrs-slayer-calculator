<script>
	import { onMount } from 'svelte'
	import {SlayerLevel, UnlockMonsters, Quests, InitialPool} from '../store.js'
	import MonsterCard from '../components/MonsterCard.svelte'
	import QuestCard from '../components/QuestCard.svelte'
	import SlayerMasterCard from '../components/SlayerMasterCard.svelte'

	let unlockMonsters, blockMonsters, quests = new Array
	let showResults = false
	let slayerLevel = 99

	InitialPool.subscribe(value => {
		blockMonsters = value
		unlockMonsters = value
	})

	Quests.subscribe(value => {
		quests = value
	})

	function toggleResults() {
		showResults = !showResults
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function updateSlayerLevel() {
		localStorage.setItem('slayerLevel', JSON.stringify(slayerLevel))
		SlayerLevel.update(() => {
			return slayerLevel
		})
	}

	onMount(() => {
		let savedSlayerLevel = localStorage.getItem('slayerLevel')
		savedSlayerLevel = JSON.parse(savedSlayerLevel)

		if (typeof savedSlayerLevel == 'undefined' || savedSlayerLevel === null) {
			localStorage.setItem('slayerLevel', JSON.stringify(slayerLevel))
		} else {
			slayerLevel = savedSlayerLevel
			updateSlayerLevel()
		}
	})
</script>

<style>
	.monster-icons {
		display: flex;
		flex-flow: row;
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
		margin-bottom: 1rem;
	}

	header p {
		text-align: center;
	}

	section {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 100%;
		padding-bottom: 10rem;
		overflow-x: hidden;
	}

	.slider-container, .section-container {
		transition: all 0.4s ease-in-out;
	}

	fieldset {
		width: 100%;
	}

	.options {
		background: #fcfcfc;
	}

	.overflow-hider {
		width: 100%;
		overflow-x: hidden;
	}

	.quest-icons {
		width: 100%;
		max-width: 20rem;
	}

	.results {
		min-height: 100vh;
	}

	.section-container {
		position: relative;
		display: grid;
		grid-template-columns: repeat(2, 100%);
		grid-template-rows: auto;
	}

	.show-results {
		transform: translateX(-100%);
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

<header>
	<h1>Slayer calculator</h1>
	<p>
		A simple app that calculates the chances of each slayer assignment
	</p>
</header>

<div class="overflow-hider">
<div class="section-container" class:show-results="{showResults}">
	<section class="options">
		<div class="slider-container">
			<form action="" onsubmit="event.preventDefault()">
				<fieldset>
					<h2 class="field-header">Slayer level</h2>
					<input class="slayer-level" type="number" name="slayer-level" min="1" max="99" maxlength="2" on:change="{updateSlayerLevel}" bind:value="{slayerLevel}">
				</fieldset>
				
				<fieldset>
					<h2 class="field-header">Blocked</h2>
					<ul class="monster-icons">
						{#each blockMonsters as item, index}
						{#if !item.unlocked && item.slayerLevel <= slayerLevel}
							<li>
								<MonsterCard monster="{item}" block="true" monsterIndex="{index}"/>
							</li>
						{/if}
						{/each}
					</ul>
				</fieldset>

				<fieldset>
					<h2 class="field-header">Unlocked</h2>
					<ul class="monster-icons">
						{#each unlockMonsters as item, index}
						{#if item.unlocked}
						<li>
							<MonsterCard monster="{item}" block="{!item.unlocked}" monsterIndex="{index}"/>
						</li>
						{/if}
						{/each}
					</ul>
				</fieldset>

				<fieldset>
					<h2 class="field-header">Quests</h2>
					<ul class="quest-icons">
						{#each quests as item}
							<li>
								<QuestCard quest="{item}" toggled="{item.toggled}"/>
							</li>
						{/each}
					</ul>
				</fieldset>
			</form>
		</div>
	</section>
	<section class="results">
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
</div>
</div>

<button class="toggle-results" class:options-button="{showResults}" on:click|preventDefault={toggleResults}></button>
