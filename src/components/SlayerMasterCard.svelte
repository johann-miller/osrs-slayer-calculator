<script>
  import {Pool, Masters} from '../store'

  export let masterIndex = 2
  let master = $Masters[masterIndex]
  let maxChance = 8.94
  let monsters = [
    {name: 'Abyssal demons', weight: 10, chance: 5.67},
    {name: 'TzHaar', weight: 10, chance: 8.94},
    {name: 'Cave horrors', weight: 6, chance: 3.60},
  ]

  function relativeChance(chance) {
    let relativeChance = chance / maxChance
    relativeChance = 100 * relativeChance
    return relativeChance
  }
</script>

<style>
  .card {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0;
    width: 100%;

    background: #fcfcfc;
    border: 1px #e7e7e7 solid;
    border-radius: 1rem;
    box-shadow: 0 1px 5px rgba(154,160,185,.05), 0 2px 10px rgba(166,173,201,.2);
  }

  .master-portrait {
    width: 5rem;
    height: auto;
    margin: 2rem 0;
  }

  .monsters {
    width: 100%;
  }

  .monster-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 2rem;
    border-radius: 1rem;
  }

  .monster-bar span {
    z-index: 3;
  }

  .monster-bar:not(:first-child) {
    margin-top: 1rem;
  }

  .chance-bar {
    position: absolute;
    width: 100%;
    max-width: 25rem;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px #e7e7e7 solid;
  }

  .background {
    z-index: 1;
    position: absolute;
    background: #fafafa;
    width: 100%;
    height: 100%;
  }

  .fill {
    z-index: 2;
    position: absolute;
    background: #e7e7e7;
    height: 100%;
    width: 25%;
  }
  
</style>

<div class="card">
  <h2>{master.name}</h2>
  <img class="master-portrait" src="{master.image}" alt="Nieve">
  <ul class="monsters">
    {#each monsters as value}
      <li class="monster-bar">
        <span>{value.name} :</span>
        <span class="chance">{value.chance}%</span>
        <div class="chance-bar">
          <div class="background"></div>
          <div class="fill" style="width: {relativeChance(value.chance)}%"></div>
        </div>
      </li>
    {/each}
  </ul>
</div>