import {writable} from 'svelte/store'

export const UnlockMonsters = writable([
  {name: 'Aviansies', image: '/images/230px-Aviansie.webp', toggled: false},
  {name: 'Boss', image: '/images/150px-Boss.webp', toggled: false},
  {name: 'Lizardmen', image: '/images/200px-Lizardman.webp', toggled: false},
  {name: 'Mithril dragons', image: '/images/280px-Mithril_dragon.webp', toggled: false},
  {name: 'Red dragons', image: '/images/290px-Red_dragon.webp', toggled: false},
  {name: 'TzHaar', image: '/images/120px-TzHaar-Xil.webp', toggled: false}
])

export const BlockMonsters = writable([
  {name: 'Abyssal demons', image: '/images/200px-Abyssal_demon.webp', toggled: false},
  {name: 'Dagganoths', image: '/images/300px-Dagannoth.webp', toggled: false},
  {name: 'Kalphites', image: '/images/250px-Kalphite_Soldier.webp', toggled: false}
])

export const Quests = writable([
  {name: 'Priest in Peril', monsters: ['Gargoyles'], toggled: false}
])