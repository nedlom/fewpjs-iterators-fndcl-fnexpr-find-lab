
function superbowlWin(array) { 
  const team = array.find(x => x.result === "W");
  if (team) {
    return team.year;
  }
}