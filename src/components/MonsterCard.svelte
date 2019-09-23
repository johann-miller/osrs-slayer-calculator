<script>
	import { get } from 'svelte/store'
	import {Pool, InitialPool} from '../store'
	export let monster
	export let toggled = false
	export let block
	let pool

	Pool.subscribe(value => {
		pool = value
	})

	function toggle() {
		toggled = !toggled
		
		// If the monster is being toggled
		pool.forEach((item, index) => {
			if (item.name == monster.name) {
				Pool.update(value => {
					let newValue = value
					if (toggled) {
						if (block) {
							newValue[index].onList = [false, false, false]
						} else {
							newValue[index].onList = $InitialPool[index].unlockList
						}
					} else {
						if (block) {
							newValue[index].onList = $InitialPool[index].onList
							if (pool[index].questCompleted) {
								newValue[index].onList = $InitialPool[index].unlockList
							}
						} else {
							newValue[index].onList = [false, false, false]
						}
					}
					
					return newValue
				})
			}
		})
	}

</script>

<style>
	.checkbox-button {
		position: relative;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 10rem;
		height: 12rem;
		padding: 1rem;
		margin: 0.5rem 0;

		text-align: center;
		background: #fafafa;
		border: 1px #e7e7e7 solid;
		border-radius: 0.3rem;
		color: inherit;
		cursor: pointer;
		user-select: none;
		transition: all 0.1s ease-in-out;
	}

	.checkbox-button:first-child {
		margin-top: 0;
	}

	.checkbox-button input[type="checkbox"] {
		opacity: 0;
		width: 0;
		height: 0;
		margin: 0;
		position: absolute;
	}

	.blocked {
		border: 1px #900 solid;
		box-shadow: 0 1px 5px rgba(153,0,0,.025), 0 2px 10px rgba(153,0,0,.1);
		color: #900;
	}

	.check-mark {
		position: absolute;
    height: 1.5rem;
    width: auto;
		top: 0.5rem;
		left: 1rem;
  }

	.monster-icon {
		height: 4rem;
		width: auto;
		margin-bottom: 0.5rem;
	}
</style>

<label class="checkbox-button" class:blocked="{toggled}" on:click|preventDefault={toggle}>
	{#if toggled}
		<img class="check-mark" src="/images/check-icon.svg" alt="Check mark">
	{/if}
	<input type="checkbox" value="">
	<img class="monster-icon" src={monster.image} alt="{monster.name}">
	<span>{monster.name}</span>
</label>

