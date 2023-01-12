const homeScore = document.getElementById("home--score");
const guestScore = document.getElementById("guest--score");
let homeCount = 0;
let guestCount = 0;

function score(team, points) {
  switch (team) {
    case "home":
      homeCount += points;
      homeScore.textContent = homeCount;
      break;
    case "guest":
      guestCount += points;
      guestScore.textContent = guestCount;
      break;
    case "reset-home":
      homeCount = 0;
      homeScore.textContent = homeCount;
      break;
    case "reset-guest":
      guestCount = 0;
      guestScore.textContent = guestCount;
      break;
  }
}
