var Letter = require("./Letter");

var word = function(){
    this.WordArr = [];
    this.Resp = 0;
    this.GuessesCount = 0;
    this.new = function(word){
        var wordARR = word.split("")
        for(var i = 0; i<wordARR.length; i++){
            var x = new Letter(wordARR[i])
            this.WordArr.push(x);
        }
    },
    this.Display = function(){
        var string = "";
        for(var i = 0; i<this.WordArr.length; i++){
            var x = this.WordArr[i].return();
            
            string += x;
        };
        return string;
    },
    this.Check = function(char){
        this.Resp = 0
        for(var i = 0; i<this.WordArr.length; i++){
            this.WordArr[i].compare(char.toLowerCase());
            if(this.WordArr[i].guessed){
                this.Resp++;
            }
        }
    }
};

module.exports = word;
