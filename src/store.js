import {writable, readable} from 'svelte/store'

export var SlayerLevel = writable(1)

export var UnlockMonsters = writable([
  {name: 'Aviansies', image: '/images/230px-Aviansie.webp', toggled: false},
  {name: 'Boss', image: '/images/150px-Boss.webp', toggled: false},
  {name: 'Lizardmen', image: '/images/200px-Lizardman.webp', toggled: false},
  {name: 'Mithril dragons', image: '/images/280px-Mithril_dragon.webp', toggled: false},
  {name: 'Red dragons', image: '/images/290px-Red_dragon.webp', toggled: false},
  {name: 'TzHaar', image: '/images/120px-TzHaar-Xil.webp', toggled: false}
])

export var Quests = writable([
  {name: 'Priest in Peril', monsters: ['Gargoyles'], toggled: false},
  {name: 'Cabin Fever', monsters: ['Cave horror'], toggled: false}
])

export const Masters = readable([
  {name: 'Duradel', image: '/images/Duradel_chathead.webp'},
  {name: 'Konar quo Maten', image: 'images/Konar_quo_Maten_chathead.webp'},
  {name: 'Nieve', image: '/images/Nieve_chathead.webp'}
])

export const InitialPool = readable([
  {
    name: 'Abyssal demons',
    onList: [true, true, true],
    weight: [12, 9, 9],
    slayerLevel: 85,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/2/21/Abyssal_demon.png/200px-Abyssal_demon.png?5e1ed'
  },
  {
    name: 'TzHaar',
    onList: [true, false, true],
    weight: [12, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6c/TzHaar-Ket.png/120px-TzHaar-Ket.png?ee1fa'
  },
  {
    name: 'Cave kraken',
    onList: [true, true, true],
    weight: [9, 9, 6],
    slayerLevel: 87,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/d/dc/Cave_kraken.png/290px-Cave_kraken.png?4612a'
  },
  {
    name: 'Fire giants',
    onList: [true, true, true],
    weight: [7, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/16/Fire_giant.png/120px-Fire_giant.png?30592'
  },
  {
    name: 'Wyrms',
    onList: [true, true, true],
    weight: [8, 10, 7],
    slayerLevel: 6,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/1a/Wyrm.png/250px-Wyrm.png?27909'},
  {
    name: 'Kalphites',
    onList: [true, true, true],
    weight: [9, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/e9/Kalphite_Soldier.png/250px-Kalphite_Soldier.png?33258'
  },
  {
    name: 'Aviansies',
    onList: [false, false, false],
    unlockList: [true, true, true],
    weight: [9, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/ec/Aviansie_%28level_69%29.png/230px-Aviansie_%28level_69%29.png?bc4a8'
  },
])

export const Pool = writable([
  {
    name: 'Abyssal demons',
    onList: [true, true, true],
    weight: [12, 9, 9],
    slayerLevel: 85,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/2/21/Abyssal_demon.png/200px-Abyssal_demon.png?5e1ed'
  },
  {
    name: 'TzHaar',
    onList: [true, false, true],
    weight: [12, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6c/TzHaar-Ket.png/120px-TzHaar-Ket.png?ee1fa'
  },
  {
    name: 'Cave kraken',
    onList: [true, true, true],
    weight: [9, 9, 6],
    slayerLevel: 87,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/d/dc/Cave_kraken.png/290px-Cave_kraken.png?4612a'
  },
  {
    name: 'Fire giants',
    onList: [true, true, true],
    weight: [7, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/16/Fire_giant.png/120px-Fire_giant.png?30592'
  },
  {
    name: 'Wyrms',
    onList: [true, true, true],
    weight: [8, 10, 7],
    slayerLevel: 6,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/1a/Wyrm.png/250px-Wyrm.png?27909'},
  {
    name: 'Kalphites',
    onList: [true, true, true],
    weight: [9, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/e9/Kalphite_Soldier.png/250px-Kalphite_Soldier.png?33258'
  },
  {
    name: 'Aviansies',
    onList: [false, false, false],
    unlockList: [true, true, true],
    weight: [9, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/ec/Aviansie_%28level_69%29.png/230px-Aviansie_%28level_69%29.png?bc4a8'
  },
])