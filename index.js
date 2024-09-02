let homeScoreBtn = document.getElementById("home-score-btn")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
  homeScore += 2
  homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
  homeScore += 3
  homeStoreEl.textContent = homeScore
}

let guestScoreBtn = document.getElementById("guest-score-btn")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
  guestScore += 1
  guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo(){
  guestScore += 2
  guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree(){
  guestScore += 3
  guestScoreEl.textContent = guestScore
}