var readLineSync = require("readline-sync");
var score = 0;
const chalk = require('chalk');

function play(question, answer){
  var userAnswer = readLineSync.question(question);

  if (userAnswer === answer){
    console.log(chalk.green.bold("You are right!"));
    score = score + 1;
  } else {
  console.log(chalk.red.bold("you are wrong!"));
  score = score - 1;
  }

}

play(" Who directed The Dark Knight Rises (2012)?","Christophar nolan");

play("What is the real name of batman ?", "Bruce wayne");

play("Who played the role of joker in Batman: the Dark Knight ? ", "Heath Ledger");

console.log(chalk.yellow.bold("Your score is ", score));