function rpsGame(youcChoice){
    let humanchoice = youcChoice
    let botchoice = randomBotChoice();

    result = decideWinner(humanchoice, botchoice);
    message = finalMessage(result);
    rpsFrontEnd(humanchoice, botchoice, message)
};

// HUMAN CHOICE
document.querySelectorAll('img').forEach((img) =>{
    img.onclick = () => {
        rpsGame(img.id)
    };
});


// BOT CHOICE
function randomBotChoice() {
    number =  Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][number]
};

// WINNER DESIDER
function decideWinner(yourchoice, computerchoice) {
    let rpsDatabase = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'scissors':0, 'rock':1, 'paper':0.5},
        'scissors': {'scissors':0.5, 'rock':0, 'paper':1}
    }
    let yourScore = rpsDatabase[yourchoice][computerchoice];
    let computerScore = rpsDatabase[computerchoice][yourchoice];
    return [yourScore, computerScore]
};

// MESSAGE DESIDER
function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0){
        return {'message':'You lose', 'color':'red'}
    } else if(yourScore === 0.5){
        return {'message':'Tied', 'color':'cyan'}
    } else {
        return {'message':'You Win', 'color':'green'}
    }
};

// FRONTEND
function rpsFrontEnd(humanchoice, botchoice, finalMessage){
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.querySelectorAll('img').forEach((img) =>{
        img.remove()
    });

    // DOM MANIPULATION
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.className = 'divclass'
    botDiv.className = 'divclass'
    messageDiv.className = 'divclass'
    
    humanDiv.innerHTML = "<img src='" + imageDatabase[humanchoice] + "' width='150px' style='box-shadow: 0px 10px 50px rgb(28, 134, 2)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botchoice] + "' width='150px' style='box-shadow: 0px 10px 50px rgb(189, 3, 3)'>"
    document.getElementById('flex-box-rps-div').append(humanDiv);
    document.getElementById('flex-box-rps-div').append(messageDiv);
    document.getElementById('flex-box-rps-div').append(botDiv);
};



