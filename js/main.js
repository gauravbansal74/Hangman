//https://strikingly-hangman.herokuapp.com/game/on 
//gauravbansal74@gmail.com


var player = new operations('gauravbansal74@gmail.com', 'https://strikingly-hangman.herokuapp.com/game/on');

player.apply = function(){
    $("#wordContainer").text(this.word);
    $("#message").text(this.message);
    $("#totalWordCount").text(this.totalWordCount);
    $("#numberOfGuessAllowedForEachWord").text(this.numberOfGuessAllowedForEachWord);
    $("#numberOfWordsToGuess").text(this.numberOfWordsToGuess);
    $("#wrongGuessCountOfCurrentWord").text(this.wrongGuessCountOfCurrentWord);
    $("#score").text(this.score);
};

player.createInput = function(word){
    
};

$("#startGame").on('click',function(){
    player.startGame(player);
    $(".secondaryPanel").show();
    $(".primaryPanel").hide();
});

$('#nextWord').on('click', function(){
    player.nextWord(player);
});

$("#guessClick").on('click', function(){
    player.guessWord(player, $("#guessWord").val());
});

$("#getResultButton").on('click', function(){
    player.getResult(player);
});

$("#submitResultButton").on('click', function(){
    player.submitResult(player);
    $(".secondaryPanel").hide();
    $(".primaryPanel").show();
});
