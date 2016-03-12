//https://strikingly-hangman.herokuapp.com/game/on 
//gauravbansal74@gmail.com


var player = new operations('gauravbansal74@gmail.com', 'https://strikingly-hangman.herokuapp.com/game/on');

player.apply = function(){
    var totalLength = this.word;
    this.createInput(this.word);
    
}

player.createInput = function(word){
    $("#wordContainer").text(word);
};

$("#startGame").on('click',function(){
    player.startGame(player);
});

$('#nextWord').on('click', function(){
    player.nextWord(player);
    player.apply();
});

$("#guessClick").on('click', function(){
    player.guessWord(player, $("#guessWord").val());
    player.apply();
});
