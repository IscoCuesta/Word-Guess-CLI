var Letter = function(x){
    this.letter = x,
    this.guessed = false,
    this.val = "-",
    this.compare = function(word){
        if(word === this.letter){
            this.guessed = true;
            this.val = this.letter;
        }
    },
    this.return = function(){
        if(this.guessed){
            return this.letter;
        }
        else{
            return this.val;
        };
    }
};


module.exports = Letter;