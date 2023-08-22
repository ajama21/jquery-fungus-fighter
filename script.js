$(document).ready(onReady);
// Declaring initial HP and AP for storage.  
let fungusHP = 100;
let playerAP = 100;
// Funciton to call when DOM is ready.
function onReady() {
    console.log('jquery works');
    // Set individual event listeners for each attack button.
    $('.attack-btn.arcane-scepter').on('click', arcaneScepter);
    $('.attack-btn.entangle').on('click', entangle);
    $('.attack-btn.dragon-blade').on('click', dragonBlade);
    $('.attack-btn.star-fire').on('click', starFire);


}
// Function to handle arcaneScepter attack.
function arcaneScepter(event){
    // console.log('arcane scepter attack function works:');
    playerAP -= 12
    console.log(playerAP);
    fungusHP -= 14
    console.log(fungusHP);

    // Checking to see if AP and HP are less than 0: if so set to 0
    if (playerAP <= 0) {
        playerAP = 0;
    }
    if (fungusHP <= 0) {
        fungusHP = 0;
    }

    render();
}
// Function to handle entangle attack.
function entangle(event){
    // console.log('entangle attack function works:');
    playerAP -= 23
    console.log(playerAP);
    fungusHP -= 9
    console.log(fungusHP);

    // Checking to see if AP and HP are less than 0: if so set to 0
    if (playerAP <= 0) {
        playerAP = 0;
    }
    if (fungusHP <= 0) {
        fungusHP = 0;
    }

    render();
    
}
// Function to handle dragonBlade attack.
function dragonBlade(event){
    // console.log('dragon blade attack function works:');
    playerAP -= 38
    console.log(playerAP);
    fungusHP -= 47
    console.log(fungusHP);
// Checking to see if AP and HP are less than 0: if so set to 0
    if (playerAP <= 0) {
        playerAP = 0;
    }
    if (fungusHP <= 0) {
        fungusHP = 0;
    }
    
    render();
}
// Function to handle starFire attack.
function starFire(event){
    // console.log(' starfire attack function works:');
    playerAP -= 33
    console.log(playerAP);
    fungusHP -= 25
    console.log(fungusHP);

    // Checking to see if AP and HP are less than 0: if so set to 0
    if (playerAP <= 0) {
        playerAP = 0;
    }
    if (fungusHP <= 0) {
        fungusHP = 0;
    }

    render();

}

// Function to update playerAP and fungusHP on DOM. 
function render(){
    $('.ap-text').text(playerAP + ' AP');
    $('.hp-text').text(fungusHP + ' HP');

    //
    if (playerAP <= 0) {
        // If playerAP is 0 or less, disable all attack buttons and add 'jump' class to the enemy
        $('.freaky-fungus').addClass('jump');
        $('.attack-btn').prop('disabled', true);
    }
    if (fungusHP <= 0) {
        // If fungusHP is 0 or less, disable all attack buttons and add 'dead' class to the enemy
        $('.freaky-fungus').addClass('dead');
        $('.attack-btn').prop('disabled', true);
    }
}


