<script>
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
</script>

<style>
	.arrow {
		position: absolute;
		right: 0;
		height: 100%;
		width: auto;
		padding: 0.8rem;
		pointer-events: none;
	}

	.container {
		position: relative;
		cursor: pointer;
	}

	select {
		padding: 0.5rem;
		border-radius: 0.3rem;
		width: 12rem;
		max-width: 100%;
		-webkit-appearance: none;
		cursor: pointer;
	}

	.container:not(:first-child) {
		margin-top: 1rem;
	}
</style>

<div class="container">
<select name="block-monster">
  {#each monsters as monster}
	  <option value="{monster}"></option>
	{/each}
</select>
<img class="arrow" src="/images/arrow.svg" alt="Arrow">
</div>

