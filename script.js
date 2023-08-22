$(document).ready(onReady);

let fungusHP = 100;
let playerHP = 100;

function onReady() {
    // console.log('jquery is working');
    $('.attack-btn').on('click', attack)
}
// Object to store AP and HP
let attackInfo = {
    'arcane-scepter': { AP: 12, HP: 14 },
    'entangle': { AP: 23, HP: 9 },
    'dragon-blade': { AP: 38, HP: 47 },
    'star-fire': { AP: 33, HP: 25 }
};




// ✅ Handle click events:

// ✅ When you click an attack button:

// update state variable(s) to make:
    // Freaky Fungus lose hit points (HP) (fungus will reduce)
    //reduce your attack points (AP)

// See Attacks below, for the AP and HP values of each attack
    // Arcane Scepter
      // AP Cost: 12
      // HP Damage: 14
    // entangle Entangle
      // AP Cost: 23
      // HP Damage: 9
    // dragon blade Dragon Blade
      // AP Cost: 38
      // HP Damage: 47
    // star fire Star Fire
      // AP Cost: 33
      // HP Damage: 25

// ✅ State may be held in one or more variables of your choosing

// HP and AP values may not be negative (set to zero, if they would otherwise be negative)
    // if (hpValue <= 0){             
    // hpValue = 0;
    //}

        // if (apValue <= 0){
    // apValue = 0;
    //}
// Render state changes to the DOM

// Update the text above the attack buttons (eg, "100 AP")
// Update the text above the enemy fungus (eg, "100 HP")
// If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the walk class with a dead class on the freaky-fungus element, to make them fall over and die.
// If you run out of AP, the monster wins and humanity is doomed 😢 Replace the walk class with a jump class on the freaky-fungus element, to make them jump for the glory of the fungal race.
// You may no longer attack, if AP is 0. Give all of the attack buttons a disabled attribute, so they may no longer be used.





