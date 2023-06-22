// check for hp/Hull function

// check for ap/Fire Power function

// check for bloom/Accuracy function
const randomAction=(start,end)=>{
    let action = Math.floor(Math.random()*(end-start)+ start)
    return action
}
// 6 alien ships -- attack one by one
// 
//The alien ships player(hoard) 2 Object
// Your alien spaceship, the USS Assembly 

// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8
let alien1 ={
    name:"The Martian",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
   isMyTurn: true,
//    pic:""
}
let alien2 ={
    name:"The Martian",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
   isMyTurn: true,
   pic:""
}
let alien3 ={
    name:"The Martian",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
   isMyTurn: true,
   pic:""
}
let alien4 ={
    name:"The Martian",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
   isMyTurn: true,
   pic:""
}
let alien5 ={
    name:"The Martian",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
   isMyTurn: true,
   pic:""
}
let alien6 ={
    name:"The Martian",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
   isMyTurn: true,
   pic:""
}





// input display on html/screen
// showScreen(human.ap(1,10))
const showScreen = (action)=>{
    let screen = document.querySelector('.screen')
    screen.classList.toggle('thescreen')
    screen.innerText=(action)
}



// toggle new alien
let theHoard = [alien1,alien2,alien3,alien4,alien5,alien6]
let currentEnemy = [alien1]
let counter = 0
showScreen(`${counter}:counter`)
showScreen(`New Enemy Approaches${currentEnemy}`)

//USS Assembly player 1 Object 
// Your spaceship, the USS Assembly 
// hull - 20
// firepower - 5
// accuracy - .7
let human ={
    name:"Human",
    hp:100,
    ap:5,
    bloom:7,
   isMyTurn: true
}




// attack functon player state isAttacking

const battleP1 = (player)=>{
    if(player === human){
    let checkHp = human.hp -= human.ap
    showScreen(`  ${human.name},You've been Hit, health is now: ${checkHp}`  )
    }else{
        let checkHp = alien1.hp -= alien1.ap
        showScreen(`   ${alien1.name},You've been Hit, health is now: ${checkHp}`) 
    }
}

// function for retreating/gameover


// check for alien ship destroyed give option to attack again/retreat


// check for aliens alive win condition
// check for player dead lose condition




// round breakdown
// while loop with the condition of hp remaining

// You attack the first alien ship
// player attack state
//check for a hit /accuracy
// check alien ships hp 
const humanAttack = ()=>{
     showScreen(currentEnemy)
     let firepower = human.ap
     let enemyHull = currentEnemy.hp
     let attack = (enemyHull -= firepower)
     currentEnemy.hp = attack
     showScreen(`${human.name} attacks${currentEnemy.name} with the strength of all mankind!!${firepower}`)
     showScreen(`${currentEnemy.name} is weakened!! Hull is ${attack}`)
     alienPlayState()
    }
// If you survive, you attack the ship again
// player attack state
//check for a hit /accuracy
// check alien ships hp 
 const playerAtackState = ()=>{
     showScreen(human.hp)
     if(human.hp <= 0){
        showScreen("YOU DIED...")
    }else{
        humanAttack(currentEnemy)
    }
    }


        
        
 const alienAttack = ()=>{
    showScreen("The Hoard is Attacking")
    let firepower = currentEnemy.ap
    let battle = (human.hp -=currentEnemy.ap)
    human.hp = battle
    showScreen(`${human.name} has been hit ${currentEnemy.name} has the power of${firepower},ALL WILL FALL`)
    showScreen(`${human.name} is weakened!! HUll is ${battle}`)
    }
 // If the ship survives, it attacks you
    // alien attack state
    //check for a hit /accuracy
     // check players ships hp
const alienPlayState = ()=>{
    showScreen(currentEnemy.hp)
    if(currentEnemy.hp <= 0){
        newEnemy()
        counter++
        currentEnemy = theHoard[counter]
        showScreen(`The Hoard Approahes,New Enemy${currentEnemy.name} is here`)
    }else{
        alienAttack()
        playerAtackState()
    }
}
        

// If it survives, it attacks you again ... etc
const newEnemy = ()=>{
    showScreen("New Enemy Approaches")
    let newEnemy =document.querySelector('.alien')
    let nextEnemy = document.createElement('img')
    nextEnemy.setAttribute("src",theHoard[counter])
    nextEnemy.setAttribute("class","alien")
    newEnemy.replaceWith(nextEnemy)
}

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
