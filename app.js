// 6 alien ships -- attack one by one
// 
//The alien ships player(hoard) 2 Object
// Your alien spaceship, the USS Assembly 

// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8





//USS Assembly player 1 Object 
// Your spaceship, the USS Assembly 

// hull - 20
// firepower - 5
// accuracy - .7


// input display on html/screen



// attack functon player state isAttacking

// check for hp/Hull function

// check for ap/Fire Power function

// check for bloom/Accuracy function

// function for retreating/gameover


// check for alien ship destroyed give option to attack again/retreat

// toggle new alien


// check for aliens alive win condition
// check for player dead lose condition




// round breakdown
// while loop with the condition of hp remaining

// You attack the first alien ship
    // player attack state
        //check for a hit /accuracy
        // check alien ships hp 
// If the ship survives, it attacks you
    // alien attack state
        //check for a hit /accuracy
        // check players ships hp 
// If you survive, you attack the ship again
    // player attack state
        //check for a hit /accuracy
        // check alien ships hp 
// If it survives, it attacks you again ... etc

// If you destroy the ship, you have the option to attack the next ship or to retreat
    // player attack state
    // check between
        // if alien ship <1 attack play state next ship -------/-------- retreat game over play state
// If you retreat, the game is over, perhaps leaving the game open for further developments or options
        //retreat game over options try again? 
// You win the game if you destroy all of the aliens
    // check for aliens hp <1   console.log you win
// You lose the game if you are destroyed
    // check for players hp <1   console.log you lose
