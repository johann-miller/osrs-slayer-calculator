<script>
  import { onMount } from 'svelte'
  import {SlayerLevel, Pool, InitialPool, Masters} from '../store'

  export let masterIndex = 0
  let counter = 0
  let pool = $Pool
  let slayerLevel = 99
  var master = $Masters[masterIndex]
  let monsters = []
  var totalWeight = updateTotalWeight(masterIndex)

  Pool.subscribe(value => {
    pool = value
    updateMonsters(masterIndex)
    updateTotalWeight(masterIndex)
  })

  SlayerLevel.subscribe(value => {
    slayerLevel = value
    updateMonsters(masterIndex)
    updateTotalWeight(masterIndex)
  })

  // Updates the pool of monsters the slayer master can assign
  function updateMonsters(index) {
    let newMonsters = []
    $Pool.forEach(item => {
      if (item.onList[index] && item.slayerLevel <= slayerLevel) {
        newMonsters = [...newMonsters, item]
      }
    })
    monsters = newMonsters
  }

  // Finds the total weight of all monsters in the pool
  function updateTotalWeight(index) {
    let newTotalWeight = 0

    monsters.forEach(item => {
      newTotalWeight = newTotalWeight + item.weight[index]
    })

    totalWeight = newTotalWeight
  }

  function chance(monster) {
    let chance
    chance = 100 * monster.weight[masterIndex] / totalWeight
    chance = chance.toFixed(1)

    return chance
  }
</script>

<style>
  .card {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 2rem 1rem;
    margin: 1rem 0;
    width: 100%;

    background: #fcfcfc;
    border: 1px #e7e7e7 solid;
    border-radius: 1rem;
    box-shadow: 0 1px 5px rgba(154,160,185,.05), 0 2px 10px rgba(166,173,201,.2);
  }

  .chance {
    justify-self: end;
  }

  .master-portrait {
    width: 5rem;
    height: auto;
    margin: 2rem 0;
  }

  .monsters {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
  }

  .monster-bar {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: auto;
    height: 2rem;
    padding-bottom: 0.5rem;
    
    border-bottom: 1px #e7e7e7 solid;
    width: 100%;
    max-width: 25rem;
  }

  .monster-bar span {
    z-index: 3;
  }

  .monster-bar:not(:first-child) {
    margin-top: 1rem;
  }
  
</style>

<div class="card">
  <h2>{master.name}</h2>
  <img class="master-portrait" src="{master.image}" alt="{master.name}">
  <ul class="monsters">
    {#each monsters as item}
      <li class="monster-bar">
        <span>{item.name}</span>
        <span class="chance">{chance(item)}</span>
      </li>
    {/each}
  </ul>
</div>