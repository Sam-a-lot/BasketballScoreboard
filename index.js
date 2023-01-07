let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let newHomeScore = 0
let newGuestScore = 0

function plus1Home() {
    newHomeScore += 1
    homeScore.textContent = newHomeScore
}

function plus2Home() {
    newHomeScore += 2
    homeScore.textContent = newHomeScore
}

function plus3Home() {
    newHomeScore += 3
    homeScore.textContent = newHomeScore
}

function plus1Guest() {
    newGuestScore += 1
    guestScore.textContent = newGuestScore
}

function plus2Guest() {
    newGuestScore += 2
    guestScore.textContent = newGuestScore
}

function plus3Guest() {
    newGuestScore += 3
    guestScore.textContent = newGuestScore
}

function newGame() {
    newHomeScore = 0
    homeScore.textContent = newHomeScore
    newGuestScore = 0
    guestScore.textContent = newGuestScore
}