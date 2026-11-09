{
	name: "Shadow Mewtwonite Y",
	spritenum: 601,
	megaStone: "Mewtwo-Mega-SY",
	megaEvolves: ["Mewtwo-Shadow"],
	itemUser: ["Mewtwo-Shadow"],
	onTakeItem(item, source) {
		if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
		return true;
	},
	num: -663,
	gen: 6,
	isNonstandard: "Past"
}