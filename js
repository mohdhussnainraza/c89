question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        update_player1_score = player_score +1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
    }
    else
    {
        update_player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }
}
    if(qustion_turn == "player1")
    {
        question_turn == "player2"
        document.getElementById("player_question").innerHTML = "Quesiton Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_quesion").innerHTML = "Question Turn - " + player1_name ; 
    }