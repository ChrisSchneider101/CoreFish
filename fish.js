fish_set_version="11.19.24"

saltwater_mult = 1;
freshwater_mult = 2;
rain_mult = 1.5;
alien_mult = 2;
void_mult = 1.5;
junk_mult = 0;

fish = [
	{
	  "name": "Alligator",
	  "water": "Freshwater",
	  "unique_mult": 2,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/a/a4/Alligator.png/100px-Alligator.png"
	},
	{
	  "name": "Axolotl",
	  "water": "Freshwater",
	  "unique_mult": 8,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/9/91/Axolotl.png/100px-Axolotl.png"
	},
	{
	  "name": "Largemouth Bass",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/1/11/Largemouth_Bass.png/100px-Largemouth_Bass.png"
	},
	{
	  "name": "Bluegill",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/a/a2/Bluegill.png/100px-Bluegill.png"
	},
	{
	  "name": "Bowfin",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/3/34/Bowfin.png/100px-Bowfin.png"
	},
	{
	  "name": "Bull Shark",
	  "water": "Freshwater",
	  "unique_mult": 3,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/9/90/Bull_Shark.png/100px-Bull_Shark.png"
	},
	{
	  "name": "Carp",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/a/a8/Carp.png/100px-Carp.png"
	},
	{
	  "name": "Catfish",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/9/99/Catfish.png/100px-Catfish.png"
	},
	{
	  "name": "Crab",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/6/63/Crab.png/100px-Crab.png"
	},
	{
	  "name": "Crappie",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/5/55/Crappie.png/100px-Crappie.png"
	},
	{
	  "name": "Crayfish",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/5/53/Crayfish.png/100px-Crayfish.png"
	},
	{
	  "name": "Drum",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/f/fb/Drum.png/100px-Drum.png"
	},
	{
	  "name": "Frog",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/e/e6/Frog.png/100px-Frog.png"
	},
	{
	  "name": "Gar",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/c/c6/Gar.png/100px-Gar.png"
	},
	{
	  "name": "Golden Bass",
	  "water": "Freshwater",
	  "unique_mult": 10,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/b/b4/Golden_Bass.png/100px-Golden_Bass.png"
	},
	{
	  "name": "Goldfish",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/0/02/Goldfish.png/100px-Goldfish.png"
	},
	{
	  "name": "Guppy",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/9/9f/Guppy.png/100px-Guppy.png"
	},
	{
	  "name": "King Salmon",
	  "water": "Freshwater",
	  "unique_mult": 3,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/f/f8/King_Salmon.png/100px-King_Salmon.png"
	},
	{
	  "name": "Koi",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/6/66/Koi.png/100px-Koi.png"
	},
	{
	  "name": "Leech",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/3/32/Leech.png/100px-Leech.png"
	},
	{
	  "name": "Mooneye",
	  "water": "Freshwater",
	  "unique_mult": 8,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/f/fc/Mooneye.png/100px-Mooneye.png"
	},
	{
	  "name": "Muskellunge",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/1/15/Muskellunge.png/100px-Muskellunge.png"
	},
	{
	  "name": "Perch",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/4/43/Perch.png/100px-Perch.png"
	},
	{
	  "name": "Pike",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/3/31/Pike.png/100px-Pike.png"
	},
	{
	  "name": "Pupfish",
	  "water": "Freshwater",
	  "unique_mult": 8,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/f/fd/Pupfish.png/100px-Pupfish.png"
	},
	{
	  "name": "Rainbow Trout",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/1/14/Rainbow_Trout.png/100px-Rainbow_Trout.png"
	},
	{
	  "name": "Salmon",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/e/e0/Salmon.png/100px-Salmon.png"
	},
	{
	  "name": "Snail",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/d/d2/Snail.png/100px-Snail.png"
	},
	{
	  "name": "Sturgeon",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/4/42/Sturgeon.png/100px-Sturgeon.png"
	},
	{
	  "name": "Toad",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/c/c9/Toad.png/100px-Toad.png"
	},
	{
	  "name": "Turtle",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/e/e9/Turtle.png/100px-Turtle.png"
	},
	{
	  "name": "Walleye",
	  "water": "Freshwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/0/05/Walleye.png/100px-Walleye.png"
	},
	{
	  "name": "Angelfish",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/5/5c/Angelfish.png/100px-Angelfish.png"
	},
	{
	  "name": "Atlantic Salmon",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/c/c7/Atlantic_Salmon.png/100px-Atlantic_Salmon.png"
	},
	{
	  "name": "Bluefish",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/8/88/Bluefish.png/100px-Bluefish.png"
	},
	{
	  "name": "Clownfish",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/c/ca/Clownfish.png/100px-Clownfish.png"
	},
	{
	  "name": "Coelacanth",
	  "water": "Saltwater",
	  "unique_mult": 4,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/4/4b/Coelacanth.png/100px-Coelacanth.png"
	},
	{
	  "name": "Dogfish",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/5/51/Dogfish.png/100px-Dogfish.png"
	},
	{
	  "name": "Eel",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/9/91/Eel.png/100px-Eel.png"
	},
	{
	  "name": "Flounder",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/8/85/Flounder.png/100px-Flounder.png"
	},
	{
	  "name": "Golden Manta Ray",
	  "water": "Saltwater",
	  "unique_mult": 2,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/7/7c/Golden_Manta_Ray.png/100px-Golden_Manta_Ray.png"
	},
	{
	  "name": "Great White Shark",
	  "water": "Saltwater",
	  "unique_mult": 3,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/4/46/Great_White_Shark.png/100px-Great_White_Shark.png"
	},
	{
	  "name": "Grouper",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/c/c4/Grouper.png/100px-Grouper.png"
	},
	{
	  "name": "Hammerhead Shark",
	  "water": "Saltwater",
	  "unique_mult": 1.5,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/4/4f/Hammerhead_Shark.png/100px-Hammerhead_Shark.png"
	},
	{
	  "name": "Herring",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/f/f1/Herring.png/100px-Herring.png"
	},
	{
	  "name": "Krill",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/0/03/Krill.png/100px-Krill.png"
	},
	{
	  "name": "Lionfish",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/b/bb/Lionfish.png/100px-Lionfish.png"
	},
	{
	  "name": "Lobster",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/9/9f/Lobster.png/100px-Lobster.png"
	},
	{
	  "name": "Man O' War",
	  "water": "Saltwater",
	  "unique_mult": 5,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/e/e4/Man_O%27_War.png/100px-Man_O%27_War.png"
	},
	{
	  "name": "Manta Ray",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/e/e6/Manta_Ray.png/100px-Manta_Ray.png"
	},
	{
	  "name": "Marlin",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/d/d9/Marlin.png/100px-Marlin.png"
	},
	{
	  "name": "Octopus",
	  "water": "Saltwater",
	  "unique_mult": 2,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/5/5a/Octopus.png/100px-Octopus.png"
	},
	{
	  "name": "Oyster",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/5/54/Oyster.png/100px-Oyster.png"
	},
	{
	  "name": "Sawfish",
	  "water": "Saltwater",
	  "unique_mult": 3,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/b/ba/Sawfish.png/100px-Sawfish.png"
	},
	{
	  "name": "Seahorse",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/6/6e/Seahorse.png/100px-Seahorse.png"
	},
	{
	  "name": "Sea Turtle",
	  "water": "Saltwater",
	  "unique_mult": 3,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/f/f0/Sea_Turtle.png/100px-Sea_Turtle.png"
	},
	{
	  "name": "Shrimp",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/9/91/Shrimp.png/100px-Shrimp.png"
	},
	{
	  "name": "Squid",
	  "water": "Saltwater",
	  "unique_mult": 3,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/8/81/Squid.png/100px-Squid.png"
	},
	{
	  "name": "Sting Ray",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/1/13/Sting_Ray.png/100px-Sting_Ray.png"
	},
	{
	  "name": "Sunfish",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/5/56/Sunfish.png/100px-Sunfish.png"
	},
	{
	  "name": "Swordfish",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/f/f7/Swordfish.png/100px-Swordfish.png"
	},
	{
	  "name": "Tuna",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/c/c5/Tuna.png/100px-Tuna.png"
	},
	{
	  "name": "Whale",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/c/c6/Whale.png/100px-Whale.png"
	},
	{
	  "name": "Wolffish",
	  "water": "Saltwater",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/0/02/Wolffish.png/100px-Wolffish.png"
	},
	{
	  "name": "Anomalocaris",
	  "water": "Rain",
	  "unique_mult": 4,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/5/54/Anomalocaris.png/100px-Anomalocaris.png"
	},
	{
	  "name": "Helicoprion",
	  "water": "Rain",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/3/30/Helicoprion.png/100px-Helicoprion.png"
	},
	{
	  "name": "Horseshoe Crab",
	  "water": "Rain",
	  "unique_mult": 4,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/c/c4/Horseshoe_Crab.png/100px-Horseshoe_Crab.png"
	},
	{
	  "name": "Leedsichthys",
	  "water": "Rain",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/0/00/Leedsichthys.png/100px-Leedsichthys.png"
	},
	{
	  "name": "Bone",
	  "water": "Junk",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/2/2c/Bone.png/100px-Bone.png"
	},
	{
	  "name": "Old Boot",
	  "water": "Junk",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/3/3a/Old_Boot.png/100px-Old_Boot.png"
	},
	{
	  "name": "Branch",
	  "water": "Junk",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/e/ea/Branch.png/100px-Branch.png"
	},
	{
	  "name": "Diamond",
	  "water": "Junk",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/e/ea/Diamond.png/100px-Diamond.png"
	},
	{
	  "name": "Drink Rings",
	  "water": "Junk",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/5/53/Drink_Rings.png/100px-Drink_Rings.png"
	},
	{
	  "name": "Plastic Bag",
	  "water": "Junk",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/e/e4/Plastic_Bag.png/100px-Plastic_Bag.png"
	},
	{
	  "name": "Soda Can",
	  "water": "Junk",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/a/a4/Soda_Can.png/100px-Soda_Can.png"
	},
	{
	  "name": "Weed",
	  "water": "Junk",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/4/40/Weed.png/100px-Weed.png"
	},
	{
	  "name": "Unidentified Fish Object",
	  "water": "Alien",
	  "unique_mult": 4,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/9/91/Unidentified_Fish_Object.png/100px-Unidentified_Fish_Object.png"
	},
	{
	  "name": "CREATURE",
	  "water": "Void",
	  "unique_mult": 1,
	  "img_src": "https://webfishing.wiki.gg/images/thumb/b/be/CREATURE.gif/100px-CREATURE.gif"
	}
]