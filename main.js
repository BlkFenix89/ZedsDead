var gameData = {

    Killed: 0,
    ZedPerClick: 1,
    ZedPerClickCost: 10, 
    
    survivor: 0,
    survivorAttack: 0.2,
    buySurvivorCost: 100
}

//CLICK ATTACKS//
function killZombie() {
    gameData.Killed += gameData.ZedPerClick
    document.getElementById("ZombiesKilled").innerHTML = gameData.Killed + " Zombies Killed"
}

//UPGRAGES TO CLICK ATTACKS//
function buyZedPerClick() {
    if (gameData.Killed >= gameData.ZedPerClickCost){
        gameData.Killed -= gameData.ZedPerClickCost
        gameData.ZedPerClick += 1
        gameData.ZedPerClickCost *= 2
        document.getElementById("ZombiesKilled").innerHTML = gameData.Killed + " Zombies Killed"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Bat (Currently Level " + gameData.ZedPerClick + ") Cost: " + gameData.ZedPerClickCost + " Killed"
    }
}

//IDLE ATTACKS//
function survivorAttack() {
  gameData.Killed += gameData.survivorAttack
  document.getElementById("ZombiesKilled").innerHTML = gameData.Killed + " Zombies Killed"
}

//UPGRADES TO IDLE ATTACKS
function buySurvivor() {
  if (gameData.Killed >= gameData.buySurvivorCost){
      gameData.Killed -= gameData.buySurvivorCost
      gameData.survivor +=1
      gameData.buySurvivorCost *= 2
      document.getElementById("ZombiesKilled").innerHTML = gameData.Killed + " Zombies Killed"
      document.getElementById("buySurvivor").innerHTML = "Recruit Survivor Cost: " + gameData.buySurvivorCost + " Zombies Killed"
  }
}

//LOOP THAT RUNS IDLE FUNCTIONS//
var mainGameLoop = window.setInterval(function() {
    if (gameData.survivor >= 1){
      survivorAttack()
    }
  }, 1000)

//GAME SAVE MECHANICS
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("ZedsDeadSave", JSON.stringify(gameData))
  }, 15000)

var savegame = JSON.parse(localStorage.getItem("ZedsDeadSave"))
  if (savegame !== null) {
    gameData = savegame
  }