/*	-INFORMATION-
	Subject:	Explorers Guide to Wildemount (EGW) Sub classes
	Effect:		This script adds the Echo Knight, Chronugist and Graviturgist subclasses from the Explorers Guide to Wildemount by Matthew Mercer / Wizards of the Coast (this is just a translation of their intellectual property, no rights, claims or warranties taken, given or implied).
	            NOTE: this does NOT add the new school spells from EGW just the classes. This is coded in a seperate file EGW Dunamancy SpellList [Matthew Mercer and WoTC transcribed by bassbogan666].js
    Code by:    /u/Bassbogan666 (2020-9-30)
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "EGW Subclasses [Matthew Mercer and WoTC transcribed by bassbogan666].js";
RequiredSheetVersion(12.999); 

SourceList["EGW"] = {
	name : "Explorers Guide to Wildemount",
	abbreviation : "EGW",
	group : "Matthew Mercer and Wizards of the Coast",
	date : "2020/03/17"
};

AddSubClass( 

	"wizard", 
	
	"Chronurgist",  
	
	{ 

		regExpSearch : /^(?=.*(wizard|mage|magus))(?=.*chronurgist).*$/i, 
		
		subname : "Chronurgist", 
		
		source : ["EGW", 184], 
				
		features : { 
		
			"subclassfeature2" : { 
				name : "Chronal Shift",
				source : ["EGW", 184],
				minlevel : 2,
				description : "\n   " + "As a reaction, me or creature I can see within 30ft can reroll an attack, ability check or saving throw (after seeing the result) target must use second roll. I can do this twice per long rest.",
				usages: 2,
				recovery : "long rest",
				eval : "AddAction(\"reaction\", \"Chronal Shift\", \"Chronurgist\")",
				removeeval : "RemoveAction(\"reaction\", \"Chronal Shift\")",
			},
			"subclassfeature2.1" : { 
				name : "Temporal Awareness",
				source : ["EGW", 184],
				minlevel : 2,
				description : "\n   " + "I can add my Intelligence modifier to initiative rolls.",
				addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." },
			},
			"subclassfeature6" : {
				name : "Momentary Stasis",
				source : ["EGW", 184],
				minlevel : 6,
				description : "\n   " + "As an action large or smaller creature within 60ft makes Constitution save or creature is incapacitated with speed of 0 until the end of my next turn (damage removes the effect). Minimum once.",
				usages : "Intelligence modifier per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField('Int Mod').value);",
				recovery: ["long rest"],
				eval : "AddAction(\"action\", \"Momentary Stasis\", \"Chronurgist\")",
				removeeval : "RemoveAction(\"action\", \"Momentary Stasis\")",
			},
			"subclassfeature10" : {
				name : "Arcane Abeyance",
				source : ["EGW", 184],
				minlevel : 10,
				description : "\n   " + "Once per short/long rest I can cast a spell of 4th level or lower into a grey bead with AC 15 and 1 HP for 1 hr (immune to poison and psyhic). Using an action a creature holding the bead can release the spell as if they cast it but using the my spell attack / DC.",
				usages : 1,
				recovery : ["short rest"],
				eval : "AddAction(\"action\", \"Arcane Abeyance\", \"Chronurgist\")",
				removeeval : "RemoveAction(\"action\", \"Arcane Abeyance\")",
			},
			"subclassfeature14" : {
				name : "Convergent Future",
				source : ["EGW", 185],
				minlevel : 14,
				description : "\n   " + "As a reaction when I or a creature I can see within 60ft makes an attack roll, ability check or saving throw I can ignore the die roll and decide if number rolled is min needed to succeed or 1 less than that number. When I use this feature I gain 1 level of exhaustion which can only be removed by a long rest.",
				eval : "AddAction(\"reaction\", \"Convergent Future\", \"Chronurgist\")",
				removeeval : "RemoveAction(\"reaction\", \"Convergent Future\")",
			},
		}
		
	}
);

AddSubClass( 

	"wizard", 
	
	"Graviturgist",  
	
	{ 

		regExpSearch : /^(?=.*(wizard|mage|magus))(?=.*graviturgist).*$/i, 
		
		subname : "Graviturgist", 
		
		source : ["EGW", 184], 
				
		features : { 
		
			"subclassfeature2" : { 
				name : "Adjust Density",
				source : ["EGW", 185],
				minlevel : 2,
				description : "\n   " + "As an action I can halve or double the weight of a large or smaller crea. or obj. within 30ft for 1 min (requires concentration). Crea. of halved weight has extra 10ft of movement and jumps twice as far, disadv. Str checks and saving throws. Crea. of doubled weight has 10ft less movement adv. Str checks and saving throws. At 10th level the target can be huge or smaller.",
				eval : "AddAction(\"action\", \"Adjust Density\", \"Graviturgist\")",
				removeeval : "RemoveAction(\"action\", \"Adjust Density\")",
			},
			"subclassfeature6" : {
				name : "Gravity Well",
				source : ["EGW", 185],
				minlevel : 6,
				description : "\n   " + "Whenever I cast a spell on a creature I can move it 5ft to an unoccupied space. If the creature is not willing I must succeed the spell attack or they must fail the saving throw.",
			},
			"subclassfeature10" : {
				name : "Violent Attraction",
				source : ["EGW", 185],
				minlevel : 10,
				description : "\n   " + "As a reaction I can add 1d10 to a creatures weapon attack or reduce a creatures fall damage by 2d10 if within 60ft. Minimum once.",
				usages : "Intelligence modifier per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField('Int Mod').value);",
				recovery: ["long rest"],
				eval : "AddAction(\"reaction\", \"Violent Attraction\", \"Graviturgist\")",
				removeeval : "RemoveAction(\"reaction\", \"Violent Attraction\")",
			},
			"subclassfeature14" : {
				name : "Event Horizon",
				source : ["EGW", 185],
				minlevel : 14,
				description : "\n   " + "As an action (requires concentration) hostile crea. within 30ft make Str saving throw or take 2d10 Force dmg and speed is 0 until start of its next turn. Half dmg is taken on a save and movement is halved. Can cast once per long rest without a spell slot, requires a 3rd level or higher slot thereafter.",
				eval : "AddAction(\"action\", \"Event Horizon\", \"Graviturgist\")",
				removeeval : "RemoveAction(\"action\", \"Event Horizon\")",
			},
		}
		
	}
);

AddSubClass( 

	"fighter", 
	
	"Echo Knight",  
	
	{ 

		regExpSearch : /^(?=.*(fighter))(?=.*echo)(?=.*knight).*$/i, 
		
		subname : "Echo Knight", 
		
		source : ["EGW", 183], 
				
		features : { 
		
			"subclassfeature2" : { 
				name : "Manifest Echo",
				source : ["EGW", 183],
				minlevel : 3,
				description : "\n   " + "As a bonus action I can summon a gray copy of myself within 15ft with AC 14 + prof. bonus, 1 HP and uses my saves. As free action I can command it to move up to 30ft. If its is more than 30ft from me at the end of my turn it is destroyed." + "\n   " + "I can bonus action to swap places with my echo for 15ft of movement regardless of distance." + "\n   " + "Attacks and reaction attacks can originate from me or the echo.",
				eval : "RemoveAction(\"bonus action\", \"Legion of One\"); AddAction(\"bonus action\", \"Manifest Echo\", \"Echo Knight\")",
				removeeval : "RemoveAction(\"bonus action\", \"Manifest Echo\")",
			},
			"subclassfeature3.1" : {
				name : "Unleash Incarnation",
				source : ["EGW", 183],
				minlevel : 3,
				description : "\n   " + "Whenever I attack my echo can make an additional attack. Minimum once.",
				usages : "Constitution modifier per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField('Con Mod').value);",
				recovery: ["long rest"],
				eval : "AddAction(\"action\", \"Unleash Incarnation\", \"Echo Knight\")",
				removeeval : "RemoveAction(\"action\", \"Unleash Incarnation\")",
			},
			"subclassfeature7" : {
				name : "Echo Avatar",
				source : ["EGW", 183],
				minlevel : 7,
				description : "\n   " + "As an action I can transfer my senses into my echo for 10 mins. During this I am blinded and deaf. My echo can go up to 1000ft from me when used in this way.",
			},
			"subclassfeature10" : {
				name : "Shadow Martyr",
				source : ["EGW", 183],
				minlevel : 10,
				description : "\n   " + "Using my reaction, before an attack roll is made I can use my echo to intercept an attack directed at another creature I can see. The echo teleports within 5ft of the target.",
				usages : 1,
				recovery: ["short rest"],
				eval : "AddAction(\"reaction\", \"Shadow Martyr\", \"Echo Knight\")",
				removeeval : "RemoveAction(\"reaction\", \"Shadow Martyr\")",
			},
			"subclassfeature15" : {
				name : "Reclaim Potential",
				source : ["EGW", 185],
				minlevel : 15,
				description : "\n   " + "When my echo is destroyed I gain 2d6 + Constitution modifier in temp. HP (provided I don't already have temp. HP) minimum once.",
				usages : "Constitution modifier per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField('Con Mod').value);",
				recovery: ["long rest"],
			},
			"subclassfeature18" : {
				name : "Legion of One",
				source : ["EGW", 185],
				minlevel : 18,
				description : "\n   " + "When I use my bonus action to Manifest Echo I can create two echoes that both function for my Echo Knight abilities. If I try to summon a third the prior 2 are destroyed. If I roll initative with no uses of Unleash Incarnation left, I regain one use.",
				eval : "RemoveAction(\"bonus action\", \"Manifest Echo\"); AddAction(\"bonus action\", \"Legion of One\", \"Echo Knight\")",
				removeeval : "RemoveAction(\"bonus action\", \"Legion of One\"); AddAction(\"bonus action\", \"Manifest Echo\", \"Echo Knight\")",
			},
		}
		
	}
);
