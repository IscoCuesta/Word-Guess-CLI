var Letter = require("./Letter");

var word = function(){
    this.WordArr = [];
    this.new = function(word){
        var wordARR = word.split("")
        for(var i = 0; i<wordARR.length; i++){
            var x = new Letter(wordARR[i])
            this.WordArr.push(x);
        }
    },
    this.Display = function(){
        var string = [];
        for(var i = 0; i<this.WordArr.length; i++){
            var x = this.WordArr[i].return();
            
            string.push(x);
        };
        return string.toString();
    },
    this.Check = function(char){
        for(var i = 0; i<this.WordArr.length; i++){
            this.WordArr[i].compare(char);
        }
    }
};

module.exports = word;
