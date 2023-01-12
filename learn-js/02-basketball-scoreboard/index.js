const homeScore = document.getElementById("home--score");
const guestScore = document.getElementById("guest--score");
let homeCount = 0;
let guestCount = 0;

function add(team, points) {
  if (team === "home") {
    homeCount += points;
    homeScore.textContent = homeCount;
  } else {
    guestCount += points;
    guestScore.textContent = guestCount;
  }
}
