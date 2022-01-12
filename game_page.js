var player1 = localStorage.getItem("player1_name");
var player2 = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + " : ";
document.getElementById("player2_name").innerHTML = player2 + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML ="question turn- "+ player1;
document.getElementById("player_answer").innerHTML ="answer turn- "+ player2;

function send(){
    NUMBER1 = document.getElementById("NUMBER1").value;
    NUMBER2 = document.getElementById("NUMBER2").value;
    actual_answer = parseInt(NUMBER1)*parseInt(NUMBER2);
    question_number="<h4>" + NUMBER1 + " X " + NUMBER2 + "</h4>";

input_box = '<label>Send You answer: <b style="color: red">Put the answer here</b></label>' +
 '<input type="text" id="answer" class="form-control" placeholder="Type Answer Here">'
check_button = '<br><br><button class = "btn btn-info" onclick = "Check()">Check</button> ';
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("NUMBER1").value="";
document.getElementById("NUMBER2").value="";
}
var question_turn = "player1";
var answer_turn = "player2";
function Check(){
    get_answer = document.getElementById("answer").value;
    if (get_answer == actual_answer){
        if(answer_turn == "player1" ){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            question_turn = "player1"
            answer_turn = "player2"
            document.getElementById("player_question").innerHTML = "question turn - " + player1;
            document.getElementById("player_answer").innerHTML = "answer turn - " + player2;

        }
        else { 
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            question_turn = "player2"
            answer_turn = "player1"
            document.getElementById("player_question").innerHTML = "question turn - " + player2;
            document.getElementById("player_answer").innerHTML = "answer turn - " + player1;}
    
    }
    document.getElementById("output").innerHTML="";
}
