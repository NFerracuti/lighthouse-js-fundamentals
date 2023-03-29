const finalPosition = function (moves) {
  const where = [0,0];
  for (let move of moves) {
    if (move == "north") {
      (where[1] = where[1]+1);
    }
    if (move == "south") {
      (where[1] = where[1]-1);
    }
    if (move == "east") {
      (where[0] = where[0]+1);
    }
    if (move == "west") {
      (where[0] = where[0]-1);
    }
  }
  
  return where
}

console.log(finalPosition(['north', 'north', 'west', 'west', 'north', 'east','north']))