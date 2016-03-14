
function operations(playerId, serverURL){
    this.core = new core(serverURL);
    this.playerId = playerId;
    this.sessionId = "";
    this.numberOfWordsToGuess = 0;
    this.numberOfGuessAllowedForEachWord = 10;
    return this;
    
}

operations.prototype.updateModel = function(player, data){
    for (var k in data){
        if(data[k] instanceof Object){
            this.updateModelFromObject(player, data[k]);
        }else{
            player[k] = data[k];
        }
    }
}

operations.prototype.updateWord = function(player, output){
    player.word = output.word.split('');
}


operations.prototype.updateModelFromObject = function(player, data){
    for (var k in data){
      //  if(k == 'word')
      //  this.updateWord(player,data);
      //  else
        player[k] = data[k];
    }
}

operations.prototype.done = function(player,requestCom){
    requestCom.done(function(data){
        player.updateModel(player, data);
         console.log(player);
         player.apply();
    });
    
}

operations.prototype.startGame = function(player){
    var data = {};
    data.playerId = player.playerId;
    data.action = "startGame";
    this.done(player, this.core.post(data));
}

operations.prototype.nextWord = function(player){
    var data = {};
    data.sessionId = player.sessionId;
    data.action = "nextWord";
    this.done(player, this.core.post(data));
}


operations.prototype.guessWord = function(player, guessword){
    var data = {};
    data.sessionId = player.sessionId;
    data.action = "guessWord";
    data.guess = guessword;
    this.done(player, this.core.post(data));
    player.getResult(player);
}

operations.prototype.getResult = function(player){
    var data = {};
    data.sessionId = player.sessionId;
    data.action = "getResult";
    this.done(player, this.core.post(data));
}

operations.prototype.submitResult = function(player){
    var data = {};
    data.sessionId = player.sessionId;
    data.action = "submitResult";
    this.done(player, this.core.post(data));
}