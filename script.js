$(document).ready(onReady);
// storing point data in the variables below. 
let fungusHP = 100;
let playerAP = 100;

function onReady() {
    console.log('jquery works');
    // on the click of each individual button run function accordingly.
    $('.attack-btn.arcane-scepter').on('click', arcaneScepter);
    $('.attack-btn.entangle').on('click', entangle);
    $('.attack-btn.dragon-blade').on('click', dragonBlade);
    $('.attack-btn.star-fire').on('click', starFire);


}

function arcaneScepter(event){
    // console.log('arcane scepter attack function works:');
    playerAP -= 12
    console.log(playerAP);
    fungusHP -= 14
    console.log(fungusHP);

    if (playerAP <= 0) {
        playerAP = 0;
    }
    if (fungusHP <= 0) {
        fungusHP = 0;
    }

    render();
}
function entangle(event){
    // console.log('entangle attack function works:');
    playerAP -= 23
    console.log(playerAP);
    fungusHP -= 9
    console.log(fungusHP);

    if (playerAP <= 0) {
        playerAP = 0;
    }
    if (fungusHP <= 0) {
        fungusHP = 0;
    }

    render();
    
}
function dragonBlade(event){
    // console.log('dragon blade attack function works:');
    playerAP -= 38
    console.log(playerAP);
    fungusHP -= 47
    console.log(fungusHP);

    if (playerAP <= 0) {
        playerAP = 0;
    }
    if (fungusHP <= 0) {
        fungusHP = 0;
    }
    
    render();
}
function starFire(event){
    // console.log(' starfire attack function works:');
    playerAP -= 33
    console.log(playerAP);
    fungusHP -= 25
    console.log(fungusHP);

    if (playerAP <= 0) {
        playerAP = 0;
    }
    if (fungusHP <= 0) {
        fungusHP = 0;
    }

    render();

}


function render(){
    $('.ap-text').text(playerAP + ' AP');
    $('.hp-text').text(fungusHP + ' HP');
}


