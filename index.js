var inquirer = require("inquirer");
var fs = require("fs");
var Word = require("./Word");

var guessWords = ["terminator", "avengers", "planet of the apes"];
var guessRND = guessWords[Math.floor(Math.random()*3)];

var Guess = new Word;
var count = 0;

Guess.new(guessRND);
var Display = Guess.Display();
console.log(Display);
function run(){
    if (count <= (guessRND.length + 3)) {
        inquirer.prompt([
        {
            name: "name",
            message: "Guess a Letter?"
        }
        ]).then(function(answers) {
            Guess.Check(answers.name);
            var Display = Guess.Display();
            console.log(Display);
            if(Guess.WordArr.length - Guess.Resp<=0){
                count = 100;
                console.log("\n congartulation! you WON!");
                Again();
            }else{
            console.log("\n Guesses left : "+ ((guessRND.length + 3)-count));
            console.log("Words remaining : "+ (Guess.WordArr.length - Guess.Resp) +"\n");
            count++;
            run();
            };
        })
    }else{
        Again();
    }
};

function Again(){
    inquirer.prompt([
        {
        name: "again",
        type: "confirm",
        message: "Want to play again?",
        default: false
    }        
    ]).then(function(resp){
        console.log("\n Sorry, you loose!");
        if(resp.again){
            count = 0;
            guessRND = guessWords[Math.floor(Math.random()*3)];
            Guess = new Word;
            Guess.new(guessRND);
            Display = Guess.Display();
            console.log(Display);
            run();

        }else{
            console.log("See you soon!")
        }
    })
}
run();