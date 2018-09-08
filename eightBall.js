//chooses a random element from an array
function choose(choices){
    var index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

//answers
var answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy. Try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

//shakes the ball
function shake(){
    var answer = choose(answers);
    $('#inside').removeClass('answerAnimation');
    function shaken(){
        $('#inside').addClass('answerAnimation');
        document.getElementById('answerContainer').innerHTML = answer;
    };
    setTimeout(shaken,10);
}