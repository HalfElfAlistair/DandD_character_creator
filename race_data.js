const races = {
    "Dragonborn": {
        maxAge: 80,
        subraces: "",
        baseInches: 66,
        heightDiceType: 8,
        weightDiceRolls: 2,
        weightDiceType: 6,
        basePounds: 175,
        size: "Medium",
        speed: 30,
        languages: ["Common", " Draconic"],
        extraLanguages: 0,
        darkVision: 0,
        additionalTraits: {
            "Draconic Ancestry": "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry dropdown. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
            "Breath Weapon": "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
            "Damage Resistance": "You have resistance to the damage type associated with your draconic ancestry."
        },
        dragonType: {
            "Black": {
                "Damage Type": "Acid",
                "Breath Weapon": "5 by 30 ft. line (Dex. save)"
            },
            "Blue": {
                "Damage Type": "Lightning",
                "Breath Weapon": "5 by 30 ft. line (Dex. save)"
            },
            "Brass": {
                "Damage Type": "Fire",
                "Breath Weapon": "5 by 30 ft. line (Dex. save)" 
            },
            "Bronze": {
                "Damage Type": "Lightning",
                "Breath Weapon": "5 by 30 ft. line (Dex. save)" 
            },
            "Copper": {
                "Damage Type": "Acid",
                "Breath Weapon": "5 by 30 ft. line (Dex. save)"
            },
            "Gold": {
                "Damage Type": "Fire",
                "Breath Weapon": "15 ft. cone (Dex. save)"
            },
            "Green": {
                "Damage Type": "Poison",
                "Breath Weapon": "15 ft. cone (Con. save)"
            },
            "Red": {
                "Damage Type": "Fire",
                "Breath Weapon": "15 ft. cone (Dex. save)"
            },
            "Silver": {
                "Damage Type": "Cold",
                "Breath Weapon": "15 ft. cone (Con. save)"
            },
            "White": {
                "Damage Type": "Cold",
                "Breath Weapon": "15 ft. cone (Con. save)"
            },
        }
    },
    "Dwarf": {
        maxAge: 350,
        subraces: {
            "Hill Dwarf": {
                baseInches: 44,
                heightDiceType: 4,
                weightDiceRolls: 2,
                weightDiceType: 6,
                basePounds: 115,
                size: "Medium",
                speed: 25,
                languages: ["Common", " Dwarvish"],
                extraLanguages: 0,
                darkVision: 60,
                additionalTraits: {
                    "Darkvision": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    "Dwarven Resilience": "You have advantage on saving throws against poison, and you have resistance against poison damage.",
                    "Dwarven Combat Training": "You have proficiency with the battleaxe, handaxe, light hammer and warhammer.",
                    "Tool Proficiency": "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
                    "Stonecutting": "Whenever you make an intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
                    "Dwarven Toughness": "Your hit point maximum increases by 1, and it increases by one every time you gain a level."
                }
            },
            "Mountain Dwarf": {
                baseInches: 48,
                heightDiceType: 4,
                weightDiceRolls: 2,
                weightDiceType: 6,
                basePounds: 130,
                size: "Medium",
                speed: 25,
                languages: ["Common", " Dwarvish"],
                extraLanguages: 0,
                darkVision: 60,
                additionalTraits: {
                    "Darkvision": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    "Dwarven Resilience": "You have advantage on saving throws against poison, and you have resistance against poison damage.",
                    "Dwarven Combat Training": "You have proficiency with the battleaxe, handaxe, light hammer and warhammer.",
                    "Tool Proficiency": "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
                    "Stonecutting": "Whenever you make an intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
                    "Dwarven armor Training": "You have proficiency with light and medium armor."
                }
            },
        },
    },
    "Elf": {
        maxAge: 750,
        subraces: {
            "High Elf": {
                baseInches: 54,
                heightDiceType: 10,
                weightDiceRolls: 1,
                weightDiceType: 4,
                basePounds: 90,
                size: "Medium",
                speed: 30,
                languages: ["Common", " Elvish"],
                extraLanguages: 1,
                darkVision: 60,
                additionalTraits: {
                    "Darkvision": "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    "Keen Senses": "You have proficiency in the perception skill.",
                    "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                    "Trance": "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'Trance.') While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours sleep.",
                    "Elf Weapon Training": "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
                    "Cantrip": "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
                    "Extra Language": "You can speak, read, and write one extra language of your choice."
                }
            },
            "Wood Elf": {
                baseInches: 54,
                heightDiceType: 10,
                weightDiceRolls: 1,
                weightDiceType: 4,
                basePounds: 100,
                size: "Medium",
                speed: 35,
                languages: ["Common", " Elvish"],
                extraLanguages: 0,
                darkVision: 60,
                additionalTraits: {
                    "Darkvision": "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    "Keen Senses": "You have proficiency in the perception skill.",
                    "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                    "Trance": "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'Trance.') While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours sleep.",
                    "Elf Weapon Training": "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
                    "Fleet of Foot": "Your base walking speed increases to 35 feet.",
                    "Mask of the Wild": "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                }
            },
            "Dark Elf": {
                baseInches: 53,
                heightDiceType: 6,
                weightDiceRolls: 1,
                weightDiceType: 6,
                basePounds: 75,
                size: "Medium",
                speed: 30,
                languages: ["Common", " Elvish"],
                extraLanguages: 0,
                darkVision: 120,
                additionalTraits: {
                    "Darkvision": "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    "Keen Senses": "You have proficiency in the perception skill.",
                    "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
                    "Trance": "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'Trance.') While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours sleep.",
                    "Superior Darkvision": "Your darkvision has a radius of 120 feet.",
                    "Sunlight Sensitivity": "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
                    "Drow Magic": "You know the 'dancing lights' cantrip. When you reach 3rd level, you can cast the 'faerie fire' spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the 'darkness' spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
                    "Drow Weapon Training": "You have proficiency with rapiers, shortswords, and hand crossbows."
                }
            },
        },
    },
    "Gnome": {
        maxAge: 500,
        subraces: {
            "Forest Gnome": {
                baseInches: 35,
                heightDiceValue: 4,
                weightDiceRolls: 1,
                weightDiceType: 1,
                basePounds: 35,
                size: "Small",
                speed: 25,
                languages: ["Common", " Gnomish"],
                extraLanguages: 0,
                darkVision: 60,
                additionalTraits: {
                    "Darkvision": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    "Gnome Cunning": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws and against magic.",
                    "Natural Illusionist": "You know the 'minor illusion' cantrip. Intelligence is your spellcasting ability for it.",
                    "Speak with Small Beasts": "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
                }
            },
            "Rock Gnome": {
                baseInches: 35,
                heightDiceValue: 4,
                weightDiceRolls: 1,
                weightDiceType: 1,
                basePounds: 35,
                size: "Small",
                speed: 25,
                languages: ["Common", " Gnomish"],
                extraLanguages: 0,
                darkVision: 60,
                additionalTraits: {
                    "Darkvision": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    "Gnome Cunning": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws and against magic.",
                    "Artificer's Lore": "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
                    "Tinker": "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10gp worth of materials to construct a Tiny clockwork device (AC5, 1hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.	When you create a device, choose one of the following options:	'Clockwork Toy'. This toy is a clockwork animal, monster or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.   'Fire Starter'. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.	'Music Box'. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
                }
            },
        },

    },
    "Half-Elf": {
        maxAge: 200,
        subraces: "",
        baseInches: 57,
        heightDiceType: 8,
        weightDiceRolls: 2,
        weightDiceType: 4,
        basePounds: 110,
        size: "Medium",
        speed: 30,
        languages: ["Common", " Elvish"],
        extraLanguages: 1,
        darkVision: 60,
        additionalTraits: {
            "Darkvision": "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
            "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
            "Skill Versatility": "You gain proficiency in two skills of your choice."
        }
    },
    "Halfling": {
        maxAge: 150,
        subraces: {
            "Lightfoot": {
                baseInches: 31,
                heightDiceValue: 4,
                weightDiceRolls: 1,
                weightDiceType: 1,
                basePounds: 35,
                size: "Small",
                speed: 25,
                languages: ["Common", " Halfling"],
                extraLanguages: 0,
                darkVision: 0,
                additionalTraits: {
                    "Lucky": "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
                    "Brave": "You have advantage on saving throws against being frightened.",
                    "Halfling Nimbleness": "You can move through the space of any creature that is of a size larger than yours.",
                    "Naturally Stealthy": "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
                }
            },
            "Stout": {
                baseInches: 31,
                heightDiceValue: 4,
                weightDiceRolls: 1,
                weightDiceType: 1,
                basePounds: 35,
                size: "Small",
                speed: 25,
                languages: ["Common", " Halfling"],
                extraLanguages: 0,
                darkVision: 0,
                additionalTraits: {
                    "Lucky": "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
                    "Brave": "You have advantage on saving throws against being frightened.",
                    "Halfling Nimbleness": "You can move through the space of any creature that is of a size larger than yours.",
                    "Stout Resilience": "You have advantage on saving throws against poison, and you have resistance against poison damage."
                }
            },
        },
    },
    "Half-Orc": {
        maxAge: 75,
        subraces: "",
        baseInches: 58,
        heightDiceType: 10,
        weightDiceRolls: 2,
        weightDiceType: 6,
        basePounds: 140,
        size: "Medium",
        speed: 30,
        languages: ["Common", " Orc"],
        extraLanguages: 0,
        darkVision: 60,
        additionalTraits: {
            "Darkvision": "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
            "Menacing": "You gain proficiency in the Intimidation skill.",
            "Relentless Endurance": "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
            "Savage Attacks": "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
        }
    },
    "Human": {
        maxAge: 100,
        subraces: "",
        baseInches: 56,
        heightDiceType: 10,
        weightDiceRolls: 2,
        weightDiceType: 4,
        basePounds: 110,
        size: "Medium",
        speed: 30,
        languages: ["Common"],
        extraLanguages: 1,
        darkVision: 0,
        additionalTraits: "",
    },
    "Tiefling": {
        maxAge: 110,
        subraces: "",
        baseInches: 57,
        heightDiceType: 8,
        weightDiceRolls: 2,
        weightDiceType: 4,
        basePounds: 110,
        size: "Medium",
        speed: 30,
        languages: ["Common", " Infernal"],
        extraLanguages: 0,
        darkVision: 60,
        additionalTraits: {
            "Darkvision": "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
            "Hellish Resistance": "You have resistance to fire damage.",
            "Infernal Legacy": "You know the 'thaumaturgy' cantrip. When you reach 3rd level, you can cast the 'hellish rebuke' spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the 'darkness' spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
        }
    },
};