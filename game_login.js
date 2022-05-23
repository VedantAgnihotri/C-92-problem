function login(){
    var player_1 = document.getElementById('player1_input').value;
    var player_2 = document.getElementById('player2_input').value;

    console.log(player_1 +" , "+ player_2);

    localStorage.setItem("Name1", player_1);
    localStorage.setItem("Name2", player_2);

    window.location.replace("gamepage.html");
}