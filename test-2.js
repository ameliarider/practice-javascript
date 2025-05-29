var partySize = 4;
var i = 0;

// WRITE YOUR CODE HERE

function doubleParty() {
  while (i < 4) {
    partySize++;
    i += 1;
  }
  return partySize;
}
doubleParty();
console.log(partySize);