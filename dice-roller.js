let randomNumber = process.argv;
let num = randomNumber.slice(2);

function getRandomNumber (num) {
  let diceNumber = [];
  for ( let i = 1; i <= num ; i ++){
    let randomNum = Math.floor(Math.random() *  6) + 1; 
  diceNumber.push(randomNum)
}
console.log(diceNumber, "after loop");
let diceNumbers = diceNumber.join(', ')
  console.log(`Rolled ${num} dice: ${diceNumbers}`);
}
getRandomNumber(num);