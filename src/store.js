import {writable, readable} from 'svelte/store'

export var SlayerLevel = writable(99)
export var sortByName = false
export var sortByMonster = {toggled: false, monster: 'Aberrant spectres'}

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
  {name: 'Cabin Fever', monsters: ['Cave horrors'], toggled: false},
  {name: 'Dragon Slayer', monsters: ['Black dragons', 'Blue dragons', 'Red dragons', 'Bronze dragons', 'Iron dragons', 'Steel dragons', 'Mithril dragons'], toggled: false},
  {name: 'Dragon Slayer II', monsters: ['Adamant dragons', 'Rune dragons'], toggled: false},
  {name: 'Horror from the Deep', monsters: ['Dagannoths'], toggled: false}
])

export const Masters = readable([
  {name: 'Duradel', image: '/images/Duradel_chathead.webp'},
  {name: 'Konar quo Maten', image: 'images/Konar_quo_Maten_chathead.webp'},
  {name: 'Nieve', image: '/images/Nieve_chathead.webp'}
])

export const InitialPool = readable([
  {
    name: 'Aberrant spectres',
    onList: [true, true, true],
    weight: [7, 6, 6],
    slayerLevel: 60,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/b/b2/Aberrant_spectre.png/150px-Aberrant_spectre.png?65d6f'
  },
  {
    name: 'Abyssal demons',
    onList: [true, true, true],
    weight: [12, 9, 9],
    slayerLevel: 85,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/2/21/Abyssal_demon.png/200px-Abyssal_demon.png?5e1ed'
  },
  {
    name: 'Adamant dragons',
    onList: [true, true, true],
    weight: [2, 5, 2],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/a/a7/Adamant_dragon.png/280px-Adamant_dragon.png?ece40'
  },
  {
    name: 'Ankous',
    onList: [true, true, true],
    weight: [5, 5, 5],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/4f/Ankou.png/110px-Ankou.png?efca0'
  },
  {
    name: 'Black demons',
    onList: [true, true, true],
    weight: [8, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/00/Black_demon.png/240px-Black_demon.png?5ecf8'
  },
  {
    name: 'Black dragons',
    onList: [true, true, true],
    weight: [9, 6, 6],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/9/9f/Black_dragon.png/290px-Black_dragon.png?b8574'
  },
  {
    name: 'Bloodvelds',
    onList: [true, true, true],
    weight: [8, 9, 9],
    slayerLevel: 50,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/f/f9/Bloodveld.png/250px-Bloodveld.png?adc61'
  },
  {
    name: 'Blue dragons',
    onList: [true, true, true],
    weight: [4, 4, 4],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/3/39/Blue_dragon.png/290px-Blue_dragon.png?1f705'
  },
  {
    name: 'Boss',
    onList: [true, true, true],
    weight: [12, 8, 8],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/67/Boss.png/150px-Boss.png?fb192'
  },
  {
    name: 'Brine rats',
    onList: [false, true, true],
    weight: [0, 2, 3],
    slayerLevel: 47,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/b/b8/Brine_rat.png/200px-Brine_rat.png?58670'
  },
  {
    name: 'Bronze dragons',
    onList: [false, true, false],
    weight: [0, 5, 0],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/8/8f/Bronze_dragon.png/280px-Bronze_dragon.png?58670'
  },
  {
    name: 'Cave horrors',
    onList: [true, false, true],
    weight: [4, 0, 5],
    slayerLevel: 58,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/5/5b/Cave_horror_%281%29.png/240px-Cave_horror_%281%29.png?a57e4'
  },
  {
    name: 'Dagannoths',
    onList: [true, true, true],
    weight: [9, 8, 8],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/b/bb/Dagannoth.png/300px-Dagannoth.png?81f00'
  },
  {
    name: 'TzHaar',
    onList: [true, false, true],
    weight: [12, 0, 9],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6c/TzHaar-Ket.png/120px-TzHaar-Ket.png?ee1fa'
  },
  {
    name: 'Cave kraken',
    onList: [true, true, true],
    weight: [9, 9, 6],
    slayerLevel: 87,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/d/dc/Cave_kraken.png/290px-Cave_kraken.png?4612a'
  },
  {
    name: 'Fire giants',
    onList: [true, true, true],
    weight: [7, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/16/Fire_giant.png/120px-Fire_giant.png?30592'
  },
  {
    name: 'Wyrms',
    onList: [true, true, true],
    weight: [8, 10, 7],
    slayerLevel: 62,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/1a/Wyrm.png/250px-Wyrm.png?27909'},
  {
    name: 'Kalphites',
    onList: [true, true, true],
    weight: [9, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/e9/Kalphite_Soldier.png/250px-Kalphite_Soldier.png?33258'
  },
  {
    name: 'Aviansies',
    onList: [true, true, true],
    weight: [9, 9, 9],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/ec/Aviansie_%28level_69%29.png/230px-Aviansie_%28level_69%29.png?bc4a8'
  },
  {
    name: 'Gargoyles',
    onList: [true, true, true],
    weight: [8, 6, 6],
    slayerLevel: 77,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/44/Gargoyle.png/250px-Gargoyle.png?b7dd7'
  },
])

export let Pool = writable([
  {
    name: 'Aberrant spectres',
    onList: [true, true, true],
    weight: [7, 6, 6],
    slayerLevel: 60,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/b/b2/Aberrant_spectre.png/150px-Aberrant_spectre.png?65d6f'
  },
  {
    name: 'Abyssal demons',
    onList: [true, true, true],
    weight: [12, 9, 9],
    slayerLevel: 85,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/2/21/Abyssal_demon.png/200px-Abyssal_demon.png?5e1ed'
  },
  {
    name: 'Adamant dragons',
    onList: [true, true, true],
    weight: [2, 5, 2],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/a/a7/Adamant_dragon.png/280px-Adamant_dragon.png?ece40'
  },
  {
    name: 'Ankous',
    onList: [true, true, true],
    weight: [5, 5, 5],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/4f/Ankou.png/110px-Ankou.png?efca0'
  },
  {
    name: 'Black demons',
    onList: [true, true, true],
    weight: [8, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/00/Black_demon.png/240px-Black_demon.png?5ecf8'
  },
  {
    name: 'Black dragons',
    onList: [true, true, true],
    weight: [9, 6, 6],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/9/9f/Black_dragon.png/290px-Black_dragon.png?b8574'
  },
  {
    name: 'Bloodvelds',
    onList: [true, true, true],
    weight: [8, 9, 9],
    slayerLevel: 50,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/f/f9/Bloodveld.png/250px-Bloodveld.png?adc61'
  },
  {
    name: 'Blue dragons',
    onList: [true, true, true],
    weight: [4, 4, 4],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/3/39/Blue_dragon.png/290px-Blue_dragon.png?1f705'
  },
  {
    name: 'Boss',
    onList: [true, true, true],
    weight: [12, 8, 8],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/67/Boss.png/150px-Boss.png?fb192'
  },
  {
    name: 'Brine rats',
    onList: [false, true, true],
    weight: [0, 2, 3],
    slayerLevel: 47,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/b/b8/Brine_rat.png/200px-Brine_rat.png?58670'
  },
  {
    name: 'TzHaar',
    onList: [true, false, true],
    weight: [12, 0, 9],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6c/TzHaar-Ket.png/120px-TzHaar-Ket.png?ee1fa'
  },
  {
    name: 'Cave horrors',
    onList: [true, false, true],
    weight: [4, 0, 5],
    slayerLevel: 58,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/5/5b/Cave_horror_%281%29.png/240px-Cave_horror_%281%29.png?a57e4'
  },
  {
    name: 'Cave kraken',
    onList: [true, true, true],
    weight: [9, 9, 6],
    slayerLevel: 87,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/d/dc/Cave_kraken.png/290px-Cave_kraken.png?4612a'
  },
  {
    name: 'Fire giants',
    onList: [true, true, true],
    weight: [7, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/16/Fire_giant.png/120px-Fire_giant.png?30592'
  },
  {
    name: 'Wyrms',
    onList: [true, true, true],
    weight: [8, 10, 7],
    slayerLevel: 62,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/1a/Wyrm.png/250px-Wyrm.png?27909'},
  {
    name: 'Kalphites',
    onList: [true, true, true],
    weight: [9, 9, 9],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/e9/Kalphite_Soldier.png/250px-Kalphite_Soldier.png?33258'
  },
  {
    name: 'Aviansies',
    onList: [true, true, true],
    weight: [9, 9, 9],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/ec/Aviansie_%28level_69%29.png/230px-Aviansie_%28level_69%29.png?bc4a8'
  },
  {
    name: 'Gargoyles',
    onList: [true, true, true],
    weight: [8, 6, 6],
    slayerLevel: 77,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/44/Gargoyle.png/250px-Gargoyle.png?b7dd7'
  },
])