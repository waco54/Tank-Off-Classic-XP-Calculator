function calculate() {
  let xpNeeded = parseFloat(document.querySelector("#xpNeeded").value);
  let xpPerGame = parseFloat(document.querySelector("#xpPerGame").value);
  let grindText = document.querySelector("body > p");
  
  let grindTime;

  const gameTime = 8;
  let numberOfGames = xpNeeded / xpPerGame;
  let timeMinutes = numberOfGames * gameTime;

  // check if timeMinutes is NaN
  if (isNaN(timeMinutes) || timeMinutes < 0) {
    grindTime = "???";
  } else if (timeMinutes > 60) {
    let timeHours = timeMinutes / 60;
    let hours = Math.floor(timeHours);
    let minutes = Math.floor(timeMinutes % 60); // calculate remaining minutes
    
    let hourLabel = hours === 1 ? "hour" : "hours";
    let minuteLabel = minutes === 1 ? "minute" : "minutes";
    grindTime = hours + " " + hourLabel + " and " + minutes + " " + minuteLabel;
  } else {
    let minuteLabel = Math.round(timeMinutes) === 1 ? "minute" : "minutes";
    grindTime = Math.round(timeMinutes) + " " + minuteLabel;
  }

  grindText.innerText = grindTime;
}
