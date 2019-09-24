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
      if (item.onList[index] && item.slayerLevel <= slayerLevel  && !item.blocked) {
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

    sortByChance()
  }

  function chance(monster) {
    let chance
    chance = 100 * monster.weight[masterIndex] / totalWeight
    chance = chance.toFixed(1)

    return chance
  }

  // dynamicSort is thanks to Ege Özcan - https://stackoverflow.com/users/300011/ege-%c3%96zcan
  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }

  function sortByChance() {
    monsters = monsters.sort((a,b) => chance(b) - chance(a))
  }

  function sortByName() {
    monsters = monsters.sort(dynamicSort("name"))
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
    padding: 0.5rem;
    
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

  .legend {
    grid-template-columns: repeat(2, 50%);
    height: auto;
    border-radius: 0.3rem;
    background: #e7e7e7;
  }
  
</style>

<div class="card">
  <h2>{master.name}</h2>
  <img class="master-portrait" src="{master.image}" alt="{master.name}">
  <ul class="monsters">
    <li class="monster-bar legend">
      <span>Name</span>
      <span class="chance">Chance (%)</span>
    </li>
    {#each monsters as item}
      <li class="monster-bar">
        <span>{item.name}</span>
        <span class="chance">{chance(item)}</span>
      </li>
    {/each}
  </ul>
</div>