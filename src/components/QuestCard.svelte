<script>
	import { onMount } from 'svelte'
	import {Pool, InitialPool} from '../store'
	export let quest
	export let toggled

	function toggle() {
		toggled = !toggled
		localStorage.setItem(quest.name, JSON.stringify(toggled))
		
		update()
	}
	
	function	update() {
		let questCompleted = new Boolean
		if (toggled) {
			questCompleted = true
		} else { 
			questCompleted = false
		}

		quest.monsters.forEach(item => {
			$InitialPool.forEach((childItem, index) => {
				if (item == childItem.name) {
					Pool.update(value => {
						value[index].questCompleted = questCompleted
						return value
					})
				}
			})
		})
	}

	onMount(() => {
		let savedQuest = localStorage.getItem(quest.name)
		savedQuest = JSON.parse(savedQuest)

		if (typeof savedQuest == 'undefined' || savedQuest === null) {
			localStorage.setItem(quest.name, JSON.stringify(toggled))
		} else {
			toggled = savedQuest
			update()
		}
	})
</script>

<style>
	.checkbox-button {
    position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 1rem;
    margin: 0.5rem 0;
    width: 100%;

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
  
  .check-mark {
    position: absolute;
    margin: auto 0;
    left: 1rem;
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
  <span>{quest.name}</span>
</label>