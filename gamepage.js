var player_name1 = localStorage.getItem("Name1");
var player_name2 = localStorage.getItem("Name2");

console.log(player_name1, player_name2);

var score1 = 0;
var score2 = 0;

document.getElementById('player1_name').innerHTML=player_name1 + ': ';   
document.getElementById('player2_name').innerHTML=player_name2 + ': '; 

document.getElementById('player1_score').innerHTML=score1; 
document.getElementById('player2_score').innerHTML=score2; 


document.getElementById('player_question').innerHTML="Question turn: " + player_name1;
document.getElementById('player_answer').innerHTML="Answer turn: " + player_name2;

function send(){
    get_word = document.getElementById('word').value;
    lowercase_word = get_word.toLowerCase();
    console.log(lowercase_word);


    word1 = lowercase_word.charAt(1);
    console.log(word1);
    
    length = Math.floor(lowercase_word.length/2);
    console.log(length);

    word2 = lowercase_word.charAt(length);
    console.log(word2);
    
    minus = lowercase_word.length-1;
    console.log(minus);

    word3 = lowercase_word.charAt(minus);
    console.log(word3);

    remove1 = lowercase_word.replace(word1, '_');
    console.log(remove1);

    remove2 = remove1.replace(word2, '_');
    console.log(remove2);

    remove3 = remove2.replace(word3, '_');
    console.log(remove3);

    question_word = "<h4 id='word_display'> Q. "+remove3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = " ";

}

ques_turn = "player1";
answer_turn = "player2";

function check(){

     get_answer = document.getElementById("input_check_box").value;
     answer = get_answer.toLowerCase();

     if (answer == lowercase_word){
         
        if (answer_turn == "player1"){
            score1 = score1 + 1;
            document.getElementById("player1_score").innerHTML = score1;
        }
        else{
            score2 = score2 + 1;
            document.getElementById("player2_score").innerHTML = score2;
        }
     }

     if (ques_turn == "player1"){
         ques_turn = "player2";
         document.getElementById("player_question").innerHTML = "Question Turn -  " +ques_turn;         
     }

    else{
        ques_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn -  " +ques_turn;
    }
    
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML="Answer Turn -  " +answer_turn;
    }

    else{
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML="Answer Turn -  " +answer_turn;
    }

    document.getElementById("output").innerHTML="";

}