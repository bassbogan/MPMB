/*	-INFORMATION-
	Subject:	Dunamancy Spells - Explorers guide to Wildemount (EGW)
	Effect:		This adds the dunamancy spells from the Explorers Guide to Wildemount by Matthew Mercer / Wizards of the Coast (this is just a translation of their intellectual property, no rights, claims or warranties taken, given or implied).
	            NOTE: for simplicity these are added to the wizard spell list, up to your DM if you can use these spells without being a chronurgist/graviturgist
				      this does NOT add the new subclasses in EGW just the spells. This is coded in a seperate file EGW Subclasses [Matthew Mercer and WoTC transcribed by bassbogan666].js
	Cody by:    /u/Bassbogan666 (2020-9-30)
	Sheet:		v12.999 (2018-02-19)
*/

var iFileName = "EGW Dunamancy SpellList [Matthew Mercer and WoTC transcribed by bassbogan666]"; 
RequiredSheetVersion(12.999);

SpellsList["sapping sting"] = {  
	
	name : "Sapping Sting", 
	
	nameShort : "Sapping Sting", 
	
	nameAlt : "Sapping Sting", 
	
	regExpSearch : /^(?=.*sapping)(?=.*sting).*$/i, 
	
	classes : ["wizard"], //Optional; Array of all the classes that have this spell on their list. Even with one entry you still need to put the brackets around it []. Note the use of only lower case as these entries are identical to the CLassList object names! If you omit this attribute, the spell will only be selectable through the dependencies, see below. If you want the spell to be available for subclasses and through the SpellcastingBonus object, just add an empty array, i.e. classes : [],
	
	source : ["EGW", 189], 
	
	ritual : false, 
	
	level : 0, 
	
	school : "Necro", 
	
	time : "1 a", 
	
	range : "30 ft", 
	
	components : "V,S", 
	
	duration : "Instantaneous",

	save : "Con",
	
	description : "Target makes Constitution saving throw or take 1d4 necrotic damage and fall prone.", 
	
	descriptionMetric : "Target makes Constitution saving throw or take 1d4 necrotic damage and fall prone.",
	
	descriptionFull : "You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take ld4 necrotic damage and fall prone." + AtHigherLevels + "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
};

SpellsList["gift of alacrity"] = {  
	
	name : "Gift of Alacrity", 
	
	nameShort : "Gift of Alacrity", 
	
	nameAlt : "Gift of Alacrity", 
	
	regExpSearch : /^(?=.*gift)(?=.*alacrity).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 186], 
	
	ritual : false, 
	
	level : 1, 
	
	school : "Div", 
	
	time : "1 min", 
	
	range : "touch", 
	
	components : "V,S", 
	
	duration : "8 hrs",
	
	description : "Target adds 1d8 to initiative.", 
	
	descriptionMetric : "Target adds 1d8 to initiative.",
	
	descriptionFull : "You touch a willing creature. For the duration, the target can add ld8 to its initiative rolls."
};

SpellsList["magnify gravity"] = { 
	
	name : "Magnify Gravity", 
	
	nameShort : "Magnify Gravity",
	
	nameAlt : "Magnify Gravity", 
	
	regExpSearch : /^(?=.*magnify)(?=.*gravity).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 188], 
	
	ritual : false, 
	
	level : 1, 
	
	school : "Trans", 
	
	time : "1 a", 
	
	range : "60 ft", 
	
	components : "V,S", 
	
	duration : "1 rnd", 

	save : "Con", 
	
	description : "10-ft sphere Crea take 2d8 Force dmg and half movement; Obj require Str check to move", 
	
	descriptionMetric : "3-m sphere Crea take 2d8 Force dmg and half movement; Obj require Str check to move", 
	
	descriptionFull : "The gravity in a 10 ft radius sphere centered on a point you can see within range increases for a moment. Each creature in the sphere on the turn when you cast the spell must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed. Until the start of your next turn, any object that isn't being worn or carried in the sphere requires a successful Strength check against your spell save DC to pick up or move.", 
	
};

SpellsList["fortunes favor"] = { 
	
	name : "Fortunes Favor", 
	
	nameShort : "Fortunes Favor",
	
	nameAlt : "Fortunes Favor", 
	
	regExpSearch : /^(?=.*fortunes)(?=.*favor).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 186], 
	
	ritual : false, 
	
	level : 2, 
	
	school : "Div", 
	
	time : "1 min", 
	
	range : "60 ft", 
	
	components : "V,S,M\u2020", 
	
	compMaterial : "100g white pearl which is consumed.", 
	
	duration : "1 hr", 
	
	description : "Roll an additional d20 on an attack roll, ability check or saving throw and choose which dice", 
	
	descriptionMetric : "Roll an additional d20 on an attack roll, ability check or saving throw and choose which dice", 
	
	descriptionFull : "You impart latent luck to yourself or one willing creature you can see within range. When the chosen creature makes an attack roll, an ability check, or a saving throw before the spell ends, it can dismiss this spell on itself to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the chosen creature, it can dismiss this spell on itself to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled. If the original d20 roll has advantage or disadvantage, the creature rolls the additional d20 after advantage or disadvantage has been applied to the original roll." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
};

SpellsList["immovable object"] = { 
	
	name : "Immovable Object", 
	
	nameShort : "Immovable Object",
	
	nameAlt : "Immovable Object", 
	
	regExpSearch : /^(?=.*Immovable)(?=.*Object).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 187], 
	
	ritual : false, 
	
	level : 2, 
	
	school : "Trans", 
	
	time : "1 a", 
	
	range : "Touch", 
	
	components : "V,S,M\u2020", 
	
	compMaterial : "25gp gold dust which is consumed.", 
	
	duration : "1 hr", 
	
	description : "Up to 10 lb object fixed in place, can be moved by nominated creatures or password.", 
	
	descriptionMetric : "Up to 4.5 kg object fixed in place, can be moved by nominated creatures or password.", 
	
	descriptionFull : "You touch an object that weighs no more than 10 pounds and cause it to become magically fixed in place. You and the creatures you designate when you cast this spell can move the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. If the object is fixed in the air, it can hold up to 4,000 pounds of weight. More weight causes the object to fall. Otherwise, a creature can use an action to make a Strength check against your spell save DC. On a success, the creature can move the object up to 10 feet." + AtHigherLevels + "If you cast this spell using a spell slot of 4th or 5th level, the DC to move the object increases by 5, it can carry up to 8,000 pounds of weight, and the duration increases to 24 hours. If you cast this spell using a spell slot of 6th level or higher, the DC to move the object increases by 10, it can carry up to 20,000 pounds of weight, and the effect is permanent until dispelled.", 
};

SpellsList["wristpocket"] = { 
	
	name : "Wristpocket", 
	
	nameShort : "Wristpocket",
	
	nameAlt : "Wristpocket", 
	
	regExpSearch : /^(?=.*wristpocket).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 190], 
	
	ritual : true, 
	
	level : 2, 
	
	school : "Conj", 
	
	time : "1 a", 
	
	range : "Self", 
	
	components : "S", 
	
	duration : "Conc, 1 hr", 
	
	description : "5 lb obj disappears into pocket dimension; summmon or return as an action for duration", 
	
	descriptionMetric : "5 lb obj disappears into pocket dimension; summmon or return as an action for duration", 
	
	descriptionFull : "You flick your wrist, causing one object in your hand to vanish. The object, which only you can be holding and can weigh no more than 5 pounds, is transported to an extradimensional space, where it remains for the duration. Until the spell ends, you can use your action to summon the object to your free hand, and you can use your action to return the object to the extradimensional space. An object still in the pocket plane when the spell ends appears in your space, at your feet.",
};

SpellsList["pulse wave"] = { 
	
	name : "Pulse Wave", 
	
	nameShort : "Pulse Wave",
	
	nameAlt : "Pulse Wave", 
	
	regExpSearch : /^(?=.*pulse)(?=.*wave).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 188], 
	
	ritual : false, 
	
	level : 3, 
	
	school : "Evoc", 
	
	time : "1 a", 
	
	range : "30 ft cone", 
	
	components : "V,S", 
	
	duration : "Instantaneous", 

	save : "Con", 
	
	description : "30-ft cone crea and obj save or take 6d6 Force dmg and push or pull 15-ft", 
	
	descriptionMetric : "9-m cone crea and obj save or take 6d6 Force dmg and push or pull 4.5-m", 
	
	descriptionFull : "You create intense pressure, unleash it in a 30-foot cone, and decide whether the pressure pulls or pushes creatures and objects. Each creature in that cone must make a Constitution saving throw. A creature takes 6d6 force damage on a failed save, or have as much damage on a successful one. And every creature that fails the save is either pulled 15 feet toward you or pushed 15 feet away from you, depending on the choice you made for the spell. In addition, unsecured objects that are completely within the cone are likewise pulled or pushed 15 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 and the distance pulled or pushed increases by 5 feet for each slot level above 3rd.",
};

SpellsList["gravity sinkhole"] = { 
	
	name : "Gravity Sinkhole", 
	
	nameShort : "Gravity Sinkhole",
	
	nameAlt : "Gravity Sinkhole", 
	
	regExpSearch : /^(?=.*gravity)(?=.*sinkhole).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 187], 
	
	ritual : false, 
	
	level : 4, 
	
	school : "Evoc", 
	
	time : "1 a", 
	
	range : "120 ft", 
	
	components : "V,S,M", 
	
	compMaterial : "black marble", 
	
	duration : "Instantaneous", 

	save : "Con", 
	
	description : "20-ft sphere save or take 5d10 Force dmg and pulled to center of sphere even in air", 
	
	descriptionMetric : "6-m sphere save or take 5d10 Force dmg and pulled to center of sphere even in air", 
	
	descriptionFull : "A 20-foot-radius sphere of crushing force forms at a point you can see within range and tugs at the creatures there. Each creature in the sphere must make a Constitution saving throw. On a failed save, the creature takes 5d10 force damage and is pulled in a straight line toward the center of the sphere, ending in an unoccupied space as close to the center as possible (even if that space is in the air). On a successful save, the creature takes half as much damage and isn't pulled." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.",
};

SpellsList["temporal shunt"] = { 
	
	name : "Temporal Shunt", 
	
	nameShort : "Temporal Shunt",
	
	nameAlt : "Temporal Shunt", 
	
	regExpSearch : /^(?=.*temporal)(?=.*shunt).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 189], 
	
	ritual : false, 
	
	level : 5, 
	
	school : "Trans", 
	
	time : "1 rea", 
	
	range : "120 ft", 
	
	components : "V,S", 
	
	duration : "1 rnd", 

	save : "Wis", 
	
	description : "1+1/SL attacking or casting crea vanish; spells are wasted; targets don't remember", 
	
	descriptionMetric : "1+1/SL attacking or casting crea vanish; spells are wasted; targets don't remember", 
	
	descriptionFull : "You target the triggering creature, which must succeed on a Wisdom saving throw or vanish, being thrown to another point in time and causing the attack to miss or the spell to be wasted. At the start of its next turn, the target reappears where it was or in the closest unoccupied space. The target doesn't remember you casting the spell or being affected by it." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. All targets must be within 30 feet of each other.",
};

SpellsList["gravity fissure"] = { 
	
	name : "Gravity Fissure", 
	
	nameShort : "Gravity Fissure",
	
	nameAlt : "Gravity Fissure", 
	
	regExpSearch : /^(?=.*gravity)(?=.*fissure).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 187], 
	
	ritual : false, 
	
	level : 6, 
	
	school : "Evoc", 
	
	time : "1 a", 
	
	range : "100-ft line", 
	
	components : "V,S,M", 
	
	compMaterial : "Fistful of iron filings", 
	
	duration : "Instantaneous", 

	save : "Con", 
	
	description : "100-ft line crea save or take 8d8 Force dmg; Crea within 10-ft also take dmg and pulled", 
	
	descriptionMetric : "30-m line crea save or take 8d8 Force dmg; Crea within 10-ft also take dmg and pulled", 
	
	descriptionFull : "You manifest a ravine of gravitational energy in a line originating from you that is 100 feet long and 5 feet wide. Each creature in that line must make a Constitution saving throw, taking 8d8 force damage on a failed save, or half as much damage on a successful one. Each creature within 10 feet of the line but not in it must succeed on a Constitution saving throw or take 8d8 force damage and be pulled toward the line until the creature is in its area." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d8 for each slot level above 6th.",
};

SpellsList["tether essence"] = { 
	
	name : "Tether Essence", 
	
	nameShort : "Tether Essence",
	
	nameAlt : "Tether Essence", 
	
	regExpSearch : /^(?=.*tether)(?=.*essence).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 189], 
	
	ritual : false, 
	
	level : 7, 
	
	school : "Necro", 
	
	time : "1 a", 
	
	range : "60 ft", 
	
	components : "V,S,M\u2020", 
	
	compMaterial : "250gp platinum cord which is consumed", 
	
	duration : "Conc, 1 hr", 

	save : "Con", 
	
	description : "2 crea linked and take the same dmg and healing for duration or until 0 hp; Disadv if within 30-ft", 
	
	descriptionMetric : "2 crea linked and take the same dmg and healing for duration or until 0 hp; Disadv if within 9-m", 
	
	descriptionFull : "Two creatures you can see within range must make a Constitution saving throw, with disadvantage if they are within 30 feet of each other. Either creature can willingly fail the save. If either save succeeds, the spell has no effect. If both saves fail, the creatures are magically linked for the duration, regardless of the distance between them. When damage is dealt to one of them, the same damage is dealt to the other one. If hit points are restored to one of them, the same number of hit points are restored to the other one. If either of the tethered creatures is reduced to 0 hit points, the spell ends on both. If the spell ends on one creature, it ends on both", 
};

SpellsList["dark star"] = { 
	
	name : "Dark Star", 
	
	nameShort : "Dark Star",
	
	nameAlt : "Dark Star", 
	
	regExpSearch : /^(?=.*dark )(?=.*star).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 186], 
	
	ritual : false, 
	
	level : 8, 
	
	school : "Evoc", 
	
	time : "1 a", 
	
	range : "150 ft", 
	
	components : "V,S,M\u2020", 
	
	compMaterial : "Shard of onyx and drop of casters blood which are consumed", 
	
	duration : "Conc, 1 min", 

	save : "Con", 
	
	description : "40-ft sphere dark; dif. ter.; no sound; crea deaf and imm. Thunder dmg; save or take 8d10 Force dmg", 
	
	descriptionMetric : "12-m sphere dark; dif. ter.; no sound; crea deaf and imm. Thunder dmg; save or take 8d10 Force dmg", 
	
	descriptionFull : "This spell creates a sphere centered on a point you choose within range. The sphere can have a radius of up to 40 feet. The area within this sphere is filled with magical darkness and crushing gravitational force. For the duration, the spell's area is difficult terrain. A creature with darkvision can't see through the magical darkness, and nonmagical light can't illuminate it. No sound can be created within or pass through the area. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there. Any creature that enters the spell's area for the first time on a turn or starts its turn there must make a Constitution saving throw. The creature takes 8d10 force damage on a failed save, or half as much damage on a successful one. A creature reduced to 0 hit points by this damage is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust.",
};

SpellsList["reality break"] = { 
	
	name : "Reality Break", 
	
	nameShort : "Reality Break",
	
	nameAlt : "Reality Break", 
	
	regExpSearch : /^(?=.*reality)(?=.*break).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 189], 
	
	ritual : false, 
	
	level : 8, 
	
	school : "Conj", 
	
	time : "1 a", 
	
	range : "60 ft", 
	
	components : "V,S,M", 
	
	compMaterial : "Crystal prism", 
	
	duration : "Conc, 1 min", 

	save : "Wis", 
	
	description : "Crea save or can't take reactions and at start of turn roll 1d10 on reality break table and suffer effects", 
	
	descriptionMetric : "Crea save or can't take reactions and at start of turn roll 1d10 on reality break table and suffer effects", 
	
	descriptionFull : "You shatter the barriers between realities and timelines, thrusting a creature into turmoil and madness. The target must succeed on a Wisdom saving throw, or it can't take reactions until the spell ends. The affected target must also roll a d10 at the start of each of its turns; the number rolled determines what happens to the target, as shown on the Reality Break Effects table. At the end of each of its turns, the affected target can repeat the Wisdom saving throw, ending the spell on itself on a success."
                      + "\n   " + "1-2 Vision of the Far Realm: The target takes 6d12 psychic damage, and it is stunned until the end of the turn."
					  + "\n   " + "3-5 Rending Rift: The target must make a Dexterity saving throw, taking 8d12 force damage on a failed save, or half as much damage on a successful one."
					  + "\n   " + "6-8 Wormhole: The target is teleported, along with everything it is wearing and carrying, up to 30 feet to an unoccupied space of your choice that you can see. The target also takes 10d12 force damage and is knocked prone."
					  + "\n   " + "9-10 Chill of the Dark Void: The target takes 10d12 cold damage, and it is blinded until the end of the turn",
};

SpellsList["ravenous void"] = { 
	
	name : "Ravenous Void", 
	
	nameShort : "Ravenous Void",
	
	nameAlt : "Ravenous Void", 
	
	regExpSearch : /^(?=.*ravenous)(?=.*void).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 188], 
	
	ritual : false, 
	
	level : 9, 
	
	school : "Evoc", 
	
	time : "1 a", 
	
	range : "1000 ft", 
	
	components : "V,S,M", 
	
	compMaterial : "Small 9 pointed iron star", 
	
	duration : "Conc, 1 min", 

	save : "Str", 
	
	description : "20-ft sphere, 100-ft dif. ter; crea save or 5d10 Force dmg pull and restrained, obj. pull and destroyed", 
	
	descriptionMetric : "6-m sphere, 30-m dif. ter; crea save or 5d10 Force dmg pull and restrained, obj. pull and destroyed", 
	
	descriptionFull : "You create a 20-foot-radius sphere of destructive gravitational force centered on a point you can see within range. For the spell's duration, the sphere and any space within 100 feet of it are difficult terrain, and nonmagical objects fully inside the sphere are destroyed if they aren't being worn or carried. When the sphere appears and at the start of each of your turns until the spell ends, unsecured objects within 100 feet of the sphere are pulled toward the sphere's center, ending in an unoccupied space as close to the center as possible. A creature that starts its turn within 100 feet of the sphere must succeed on a Strength saving throw or be pulled straight toward the sphere's center, ending in an unoccupied space as close to the center as possible. A creature that enters the sphere for the first time on a turn or starts its turn there takes 5d10 force damage and is restrained until it is no longer in the sphere. If the sphere is in the air, the restrained creature hovers inside the sphere. A creature can use its action to make a Strength check against your spell save DC, ending this restrained condition on itself or another creature in the sphere that it can reach. A creature reduced to 0 hit points by this spell is annihilated, along with any nonmagical items it is wearing or carrying.",
};

SpellsList["time ravage"] = { 
	
	name : "Time Ravage", 
	
	nameShort : "Time Ravage",
	
	nameAlt : "Time Ravage", 
	
	regExpSearch : /^(?=.*time)(?=.*ravage).*$/i, 
	
	classes : ["wizard"], 
	
	source : ["EGW", 189], 
	
	ritual : false, 
	
	level : 9, 
	
	school : "Necro", 
	
	time : "1 a", 
	
	range : "90 ft", 
	
	components : "V,S,M\u2020", 
	
	compMaterial : "Hourglass filled with 5000gp diamond dust which is consumed", 
	
	duration : "Instantaneous", 

	save : "Con", 
	
	description : "Crea take 10d12 Necro Dmg and aged; save half dmg and not aged", 
	
	descriptionMetric : "Crea take 10d12 Necro Dmg and aged; save half dmg and not aged", 
	
	descriptionFull : "You target a creature you can see within range, putting its physical form through the devastation of rapid aging. The target must make a Constitution saving throw, taking 10d12 necrotic damage on a failed save, or half as much damage on a successful one. If the save fails, the target also ages to the point where it has only 30 days left before it dies of old age. In this aged state, the target has disadvantage on attack rolls, ability checks, and saving throws, and its walking speed is halved. Only the wish spell or the greater restoration cast with a 9th-level spell slot can end these effects and restore the target to its previous age.",
};
