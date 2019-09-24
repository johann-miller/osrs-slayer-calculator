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
  {name: 'Horror from the Deep', monsters: ['Dagannoths'], toggled: false},
  {name: 'Mourning\'s End Part II', monsters: ['Dark beasts'], toggled: false},
  {name: 'Desert Treasure', monsters: ['Dust devils'], toggled: false},
  {name: 'Regicide', monsters: ['Elves'], toggled: false},
  {name: 'Bone Voyage', monsters: ['Fossil Island wyverns'], toggled: false},
  {name: 'Contact!', monsters: ['Minions of Scabaras'], toggled: false},
  {name: 'Elemental Workshop I', monsters: ['Skeletal wyverns'], toggled: false},
  {name: 'Death Plateau', monsters: ['Spiritual creatures'], toggled: false},
  {name: 'Lunar Diplomacy', monsters: ['Suqahs'], toggled: false},
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
    name: 'Dark beasts',
    onList: [true, true, true],
    weight: [11, 5, 5],
    slayerLevel: 90,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/e1/Dark_beast.png/290px-Dark_beast.png?81f00'
  },
  {
    name: 'Drakes',
    onList: [true, true, true],
    weight: [8, 10, 7],
    slayerLevel: 84,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/d/da/Drake.png/280px-Drake.png?71620'
  },
  {
    name: 'Dust devils',
    onList: [true, true, true],
    weight: [5, 6, 6],
    slayerLevel: 65,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/5/5e/Dust_devil.png/140px-Dust_devil.png?88631'
  },
  {
    name: 'Elves',
    onList: [true, false, true],
    weight: [4, 0, 4],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/c/ce/Elf_Warrior_%281%29.png/130px-Elf_Warrior_%281%29.png?7a1ed'
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
    name: 'Fossil Island wyverns',
    onList: [true, true, true],
    weight: [5, 5, 5],
    slayerLevel: 66,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/2/22/Spitting_Wyvern.png/250px-Spitting_Wyvern.png?aaf11'
  },
  {
    name: 'Gargoyles',
    onList: [true, true, true],
    weight: [8, 6, 6],
    slayerLevel: 75,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/44/Gargoyle.png/250px-Gargoyle.png?b7dd7'
  },
  {
    name: 'Greater demons',
    onList: [true, true, true],
    weight: [9, 7, 6],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/5/56/Greater_demon.png/250px-Greater_demon.png?f293e'
  },
  {
    name: 'Hell hounds',
    onList: [true, true, true],
    weight: [10, 8, 8],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/3/3e/Hellhound.png/200px-Hellhound.png?0e2a9'
  },
  {
    name: 'Hydras',
    onList: [false, true, false],
    weight: [0, 10, 0],
    slayerLevel: 95,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/9/9d/Hydra.png/220px-Hydra.png?9572f'
  },
  {
    name: 'Iron dragons',
    onList: [true, true, true],
    weight: [5, 5, 5],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/41/Iron_dragon.png/280px-Iron_dragon.png?5b7f9'
  },
  {
    name: 'Jellies',
    onList: [false, true, false],
    weight: [0, 6, 0],
    slayerLevel: 52,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/05/Jelly.png/250px-Jelly.png?28a08'
  },
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
    name: 'Kurasks',
    onList: [true, true, true],
    weight: [4, 3, 3],
    slayerLevel: 70,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/7/77/Kurask.png/250px-Kurask.png?d25f0'
  },
  {
    name: 'Lizardmen',
    onList: [true, true, true],
    weight: [10, 8, 8],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/8/82/Lizardman_%28level_53%29.png/200px-Lizardman_%28level_53%29.png?71082'
  },
  {
    name: 'Minions of Scabaras',
    onList: [false, false, true],
    weight: [0, 0, 4],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/01/Locust_rider_%28ranged%29.png/250px-Locust_rider_%28ranged%29.png?46392'
  },
  {
    name: 'Mithril dragons',
    onList: [true, true, true],
    weight: [9, 5, 5],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/9/94/Mithril_dragon.png/280px-Mithril_dragon.png?956ac'
  },
  {
    name: 'Mutated zygomites',
    onList: [true, true, true],
    weight: [2, 2, 2],
    slayerLevel: 57,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/f/ff/Zygomite_%28level_74%29.png/200px-Zygomite_%28level_74%29.png?ea620'
  },
  {
    name: 'Nechryael',
    onList: [true, true, true],
    weight: [9, 7, 7],
    slayerLevel: 80,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/00/Nechryael.png/145px-Nechryael.png?d80e7'
  },
  {
    name: 'Red dragons',
    onList: [true, true, true],
    weight: [8, 5, 5],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6a/Red_dragon.png/290px-Red_dragon.png?f0a8a'
  },
  {
    name: 'Rune dragons',
    onList: [true, true, true],
    weight: [2, 5, 2],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/9/96/Rune_dragon.png/280px-Rune_dragon.png?90f09'
  },
  {
    name: 'Skeletal wyverns',
    onList: [true, true, true],
    weight: [7, 5, 5],
    slayerLevel: 72,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6f/Skeletal_Wyvern.png/280px-Skeletal_Wyvern.png?6d52e'
  },
  {
    name: 'Smoke devils',
    onList: [true, true, true],
    weight: [9, 7, 7],
    slayerLevel: 93,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/8/83/Smoke_devil.png/250px-Smoke_devil.png?87507'
  },
  {
    name: 'Spiritual creatures',
    onList: [true, false, true],
    weight: [7, 0, 6],
    slayerLevel: 63,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/1a/Spiritual_warrior_%28Zamorak%29.png/200px-Spiritual_warrior_%28Zamorak%29.png?ef14c'
  },
  {
    name: 'Steel dragons',
    onList: [true, true, true],
    weight: [7, 5, 5],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/0b/Steel_dragon.png/280px-Steel_dragon.png?dd42e'
  },
  {
    name: 'Suqahs',
    onList: [true, false, true],
    weight: [8, 0, 8],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/7/79/Suqah.png/150px-Suqah.png?7eec3'
  },
  {
    name: 'Trolls',
    onList: [true, true, true],
    weight: [6, 6, 6],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/65/Arrg.png/160px-Arrg.png?2e0cb'
  },
  {
    name: 'Turoth',
    onList: [false, true, true],
    weight: [0, 3, 3],
    slayerLevel: 55,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/f/f8/Turoth_%28lv_83%29.png/250px-Turoth_%28lv_83%29.png?96f06'
  },
  {
    name: 'TzHaar',
    onList: [true, false, true],
    weight: [10, 0, 10],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6c/TzHaar-Ket.png/120px-TzHaar-Ket.png?ee1fa'
  },
  {
    name: 'Waterfiends',
    onList: [true, true, false],
    weight: [2, 2, 0],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/4f/Waterfiend.png/120px-Waterfiend.png?3dfda'
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
    name: 'Dark beasts',
    onList: [true, true, true],
    weight: [11, 5, 5],
    slayerLevel: 90,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/e/e1/Dark_beast.png/290px-Dark_beast.png?81f00'
  },
  {
    name: 'Drakes',
    onList: [true, true, true],
    weight: [8, 10, 7],
    slayerLevel: 84,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/d/da/Drake.png/280px-Drake.png?71620'
  },
  {
    name: 'Dust devils',
    onList: [true, true, true],
    weight: [5, 6, 6],
    slayerLevel: 65,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/5/5e/Dust_devil.png/140px-Dust_devil.png?88631'
  },
  {
    name: 'Elves',
    onList: [true, false, true],
    weight: [4, 0, 4],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/c/ce/Elf_Warrior_%281%29.png/130px-Elf_Warrior_%281%29.png?7a1ed'
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
    name: 'Fossil Island wyverns',
    onList: [true, true, true],
    weight: [5, 5, 5],
    slayerLevel: 66,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/2/22/Spitting_Wyvern.png/250px-Spitting_Wyvern.png?aaf11'
  },
  {
    name: 'Gargoyles',
    onList: [true, true, true],
    weight: [8, 6, 6],
    slayerLevel: 75,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/44/Gargoyle.png/250px-Gargoyle.png?b7dd7'
  },
  {
    name: 'Greater demons',
    onList: [true, true, true],
    weight: [9, 7, 6],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/5/56/Greater_demon.png/250px-Greater_demon.png?f293e'
  },
  {
    name: 'Hell hounds',
    onList: [true, true, true],
    weight: [10, 8, 8],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/3/3e/Hellhound.png/200px-Hellhound.png?0e2a9'
  },
  {
    name: 'Hydras',
    onList: [false, true, false],
    weight: [0, 10, 0],
    slayerLevel: 95,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/9/9d/Hydra.png/220px-Hydra.png?9572f'
  },
  {
    name: 'Iron dragons',
    onList: [true, true, true],
    weight: [5, 5, 5],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/41/Iron_dragon.png/280px-Iron_dragon.png?5b7f9'
  },
  {
    name: 'Jellies',
    onList: [false, true, false],
    weight: [0, 6, 0],
    slayerLevel: 52,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/05/Jelly.png/250px-Jelly.png?28a08'
  },
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
    name: 'Kurasks',
    onList: [true, true, true],
    weight: [4, 3, 3],
    slayerLevel: 70,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/7/77/Kurask.png/250px-Kurask.png?d25f0'
  },
  {
    name: 'Lizardmen',
    onList: [true, true, true],
    weight: [10, 8, 8],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/8/82/Lizardman_%28level_53%29.png/200px-Lizardman_%28level_53%29.png?71082'
  },
  {
    name: 'Minions of Scabaras',
    onList: [false, false, true],
    weight: [0, 0, 4],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/01/Locust_rider_%28ranged%29.png/250px-Locust_rider_%28ranged%29.png?46392'
  },
  {
    name: 'Mithril dragons',
    onList: [true, true, true],
    weight: [9, 5, 5],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/9/94/Mithril_dragon.png/280px-Mithril_dragon.png?956ac'
  },
  {
    name: 'Mutated zygomites',
    onList: [true, true, true],
    weight: [2, 2, 2],
    slayerLevel: 57,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/f/ff/Zygomite_%28level_74%29.png/200px-Zygomite_%28level_74%29.png?ea620'
  },
  {
    name: 'Nechryael',
    onList: [true, true, true],
    weight: [9, 7, 7],
    slayerLevel: 80,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/00/Nechryael.png/145px-Nechryael.png?d80e7'
  },
  {
    name: 'Red dragons',
    onList: [true, true, true],
    weight: [8, 5, 5],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6a/Red_dragon.png/290px-Red_dragon.png?f0a8a'
  },
  {
    name: 'Rune dragons',
    onList: [true, true, true],
    weight: [2, 5, 2],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/9/96/Rune_dragon.png/280px-Rune_dragon.png?90f09'
  },
  {
    name: 'Skeletal wyverns',
    onList: [true, true, true],
    weight: [7, 5, 5],
    slayerLevel: 72,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6f/Skeletal_Wyvern.png/280px-Skeletal_Wyvern.png?6d52e'
  },
  {
    name: 'Smoke devils',
    onList: [true, true, true],
    weight: [9, 7, 7],
    slayerLevel: 93,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/8/83/Smoke_devil.png/250px-Smoke_devil.png?87507'
  },
  {
    name: 'Spiritual creatures',
    onList: [true, false, true],
    weight: [7, 0, 6],
    slayerLevel: 63,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/1/1a/Spiritual_warrior_%28Zamorak%29.png/200px-Spiritual_warrior_%28Zamorak%29.png?ef14c'
  },
  {
    name: 'Steel dragons',
    onList: [true, true, true],
    weight: [7, 5, 5],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/0/0b/Steel_dragon.png/280px-Steel_dragon.png?dd42e'
  },
  {
    name: 'Suqahs',
    onList: [true, false, true],
    weight: [8, 0, 8],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: false,
    image: 'https://oldschool.runescape.wiki/images/thumb/7/79/Suqah.png/150px-Suqah.png?7eec3'
  },
  {
    name: 'Trolls',
    onList: [true, true, true],
    weight: [6, 6, 6],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/65/Arrg.png/160px-Arrg.png?2e0cb'
  },
  {
    name: 'Turoth',
    onList: [false, true, true],
    weight: [0, 3, 3],
    slayerLevel: 55,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/f/f8/Turoth_%28lv_83%29.png/250px-Turoth_%28lv_83%29.png?96f06'
  },
  {
    name: 'TzHaar',
    onList: [true, false, true],
    weight: [10, 0, 10],
    slayerLevel: 1,
    blocked: true,
    unlocked: true,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/6/6c/TzHaar-Ket.png/120px-TzHaar-Ket.png?ee1fa'
  },
  {
    name: 'Waterfiends',
    onList: [true, true, false],
    weight: [2, 2, 0],
    slayerLevel: 1,
    blocked: false,
    unlocked: false,
    questCompleted: true,
    image: 'https://oldschool.runescape.wiki/images/thumb/4/4f/Waterfiend.png/120px-Waterfiend.png?3dfda'
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
])