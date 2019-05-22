var inquirer = require("inquirer");
var fs = require("fs");
var Word = require("./Word");

var guessWords = ["Terminator", "Avengers", "Planet of the Apes"];
var guessRND = guessWords[Math.floor(Math.random()*3)];

var Guess = new Word;
var count = 0;

Guess.new(guessRND);
var Display = Guess.Display();
console.log(Display);
function run(){
    if (count < 9) {
        inquirer.prompt([
        {
            name: "name",
            message: "Guess a Letter?"
        }
        ]).then(function(answers) {
            Guess.Check(answers.name);
            var Display = Guess.Display();
            console.log(Display);
            count++
            run()
        })
    }
};
run();