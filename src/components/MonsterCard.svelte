<script>
	import { onMount } from 'svelte'
	import { get } from 'svelte/store'
	import {Pool, InitialPool} from '../store'
	export let monster
	export let monsterIndex
	export let toggled = false
	export let block
	let pool

	Pool.subscribe(value => {
		pool = value
	})

	function toggle() {
		toggled = !toggled
		localStorage.setItem(monster.name, JSON.stringify(toggled))
		
		update()
	}

	function update() {
		Pool.update(value => {
			let newValue = value
			let blocked = new Boolean

			if (toggled && block) {
				blocked = true
			} 
			else if (toggled && !block) {
				blocked = false
			}
			else if (!toggled && block) {
				blocked = false
			}
			else if (!toggled && !block) {
				blocked = true
			}

			newValue[monsterIndex].blocked = blocked
			
			return newValue
		})
	}

	onMount(() => {
		let savedMonster = localStorage.getItem(monster.name)
		savedMonster = JSON.parse(savedMonster)

		if (typeof savedMonster == 'undefined' || savedMonster === null) {
			localStorage.setItem(monster.name, JSON.stringify(toggled))
		} else {
			toggled = savedMonster
			update()
		}
	})

</script>

<style>
	.checkbox-button {
    position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		position: relative;
		padding: 0.5rem 1rem;
    width: 100%;

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
  
  .check-mark {
    position: absolute;
    margin: auto 0;
    right: 1rem;
    height: 1.5rem;
    width: auto;
  }

	.blocked {
		border: 1px #900 solid;
		box-shadow: 0 1px 5px rgba(153,0,0,.025), 0 2px 10px rgba(153,0,0,.1);
		color: #900;
	}
</style>

<label class="checkbox-button" class:blocked="{toggled}" on:click|preventDefault={toggle}>
  {#if toggled}
    <img class="check-mark" src="/images/check-icon.svg" alt="Check mark">
  {/if}
	<input type="checkbox" value="">
  <span>{monster.name}</span>
</label>

