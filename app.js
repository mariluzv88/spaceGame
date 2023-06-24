// check for hp/Hull function

// check for ap/Fire Power function

// check for bloom/Accuracy function
const randomAction = (start,end) => {
    let action = Math.floor(Math.random()*(end-start )+ start)
    return action
}
// input display on html/screen
// showScreen(human.ap(1,10))
const showScreen = (action)=>{
    let screen = document.querySelector('.screen')
    screen.classList.toggle('thescreen')
    screen.innerHTML=(action)
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
    hp:randomAction(10,20),
    ap: randomAction(8,14),
    bloom:randomAction(6,8),
    isMyTurn: true,
    pic:"https://thumbs.gfycat.com/InfamousAppropriateAiredale-max-1mb.gif"
}
let alien2 ={
    name:"The MonStars",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
    isMyTurn: true,
    pic:"https://thumbs.gfycat.com/HealthyWildHarrierhawk-max-1mb.gif"
}
let alien3 ={
    name:"Stitch",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
    isMyTurn: true,
    pic:"https://media.tenor.com/2E17n7LsxiUAAAAC/stitch-frog.gif"
}
let alien4 ={
    name:"Kang and Kodos",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
    isMyTurn: true,
    pic:"https://media.tenor.com/st8PxZ-amRsAAAAd/kang-kodos.gif"
}
let alien5 ={
    name:"Zoidberg",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
    isMyTurn: true,
    pic:"https://i.pinimg.com/originals/72/e7/ca/72e7caf49bf59454048170002674c4a7.gif"
}
let alien6 ={
    name:"The Great Gazoo",
    hp:randomAction(3,6),
    ap: randomAction(2,4),
    bloom:randomAction(6,8),
    isMyTurn: true,
    pic:"https://media.tenor.com/gUWnjI03gZAAAAAM/gazoo-gun.gif"
}



//USS Assembly player 1 Object 
// Your spaceship, the USS Assembly 
// hull - 20
// firepower - 5
// accuracy - .7
let human ={
    name:"Agent J",
    hp:100,
    ap:1,
    bloom:7,
    isMyTurn: true
}





// toggle new alien
let currentAlien = [alien1]
let counter = 0
// let theRound = ["Round1","Round2","Round3"]
let RoundAvailable = ["Round1","Round2","Round3"]
isClicked = true
const newRound = ()=>{
    for(let i=0;i<=RoundAvailable;i++){
        return i;
    }
}

const retreat = () => {
    showScreen("You are retreating. GAME OVER the future is hollow")
    alien1.hp = 100
    human.hp = randomAction(10,20)
    
    
}

// setTimeout pause to alert new round starting
const Rounds =()=>{
    newRound()
    //    setTimeout(theRound,3000)
    alert(`${RoundAvailable[0]} is starting....`)
    showScreen("The Hoard is Approaching.......")
    // humanAttack()
    // showAlien()
}
// let enemy = document.querySelector('.alien')
// enemy.classList.toggle('alienIcon')

// enemy.replaceWith(alien1.pic)

const showAlien =()=>{
    let box = document.querySelector('alienIcon')
    let image = theHoard[0].pic
    box.replaceWith(image)
    
    
}

// attack functon player state isAttacking

const battleP1 = (player)=>{
    let currentAlien = alien1
    if(player === human){
        let checkHp = human.hp -= currentAlien.ap
        showScreen(`  ${human.name},You've been Hit, health is now: ${checkHp}`  )
        checkWin()
    }else{
        let checkHp = currentAlien.hp -= currentAlien.ap
        showScreen(`   ${currentAlien.name},You've been Hit, health is now: ${checkHp}`)
        checkWin()
        
    }
}
const checkWin =()=>{
    let checkHp = human.hp
    let checkEnemyHP = alien1.hp
    if(checkHp < 1){
        showScreen("......You Died.....")
    }else if(checkEnemyHP < 1){
        showScreen(`YOU WON the Fight, defeated ${alien1.name}....something else lingers in the shadows `)
        //  setTimeout(showScreen,10000)
        //  showScreen("New Enemy Approaches")
        // nextEnemy()
    }
}
// let alien1 = alien2
// if(alien1.hp === 0){
    //     let newOpp = document.querySelector('.alienIcon')
    //     newOpp.createElement(img)
    //     newOpp.replaceWith(alien2.pic)
    // }
    
    // let Aliens = theHoard[0]
    // if(Aliens.hp === 0){
        //     let newAlien = document.querySelector('.alienIcon')
        //     newAlien.document.createElement('img')
        //     Aliens = theHoard[1]
        //     newAlien.setAttribute('src',Aliens.pic)
        //     Aliens.replaceWith = newAlien.pic
        
        
        // }
        const nextEnemy=()=>{
            if(currentAlien.hp < 1){
                currentAlien.innerHTML=""
                
            }
            
}
// const myTurn = ()=>{
    //     if(theHoard.isMyTurn === true){
        //     let newALien = 
        //     }
        // }
        let theHoard = [alien1,alien2,alien3,alien4,alien5,alien6]
        console.log(theHoard[0].hp)
        console.log(nextEnemy())
        
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

// If you survive, you attack the ship again
// player attack state
//check for a hit /accuracy
// check alien ships hp 


 // If the ship survives, it attacks you
    // alien attack state
    //check for a hit /accuracy
     // check players ships hp

        

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
