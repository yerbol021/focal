/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to wait until we're hungry.
 * Otherwise, we want to pick up a snack or grab something we have ready at home
 * we've got less than 20 minutes, or to take a break and cook a tasty meal if
 * we've got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're learning to code and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry, availableTime) {
  if (!hungry) {
    console.log("Wait until you're hungry.");
  } else if (availableTime < 20) {
    console.log("Pick up a snack or grab something you have ready at home.");
  } else if (availableTime >= 20 && availableTime <= 30) {
    console.log("Take a break and cook a tasty meal.");
  } else {
    console.log("You're learning to code - reconsider how much time you actually have to spare.");
  }
};

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);

