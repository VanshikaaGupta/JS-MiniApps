
window.addEventListener("load", bindEvents);
function bindEvents() {
    const a = document.querySelectorAll(".button");
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', startGame);

    }

}
var flag = "X";
var f;
function startGame() {
    var c;
    var e = document.getElementById('result');
    if (flag == "X") {
        if (this.innerHTML == "") {
            c = this.id;
            var d = document.getElementById(c).innerHTML = flag;
            e.innerHTML = "Player 2's turn";
            winner(c, d);
            flag = "O";
            
        }
        else {
            return;
        }

    }
    else {
        if (this.innerHTML == "") {
            c = this.id;
            var d = document.getElementById(c).innerHTML = flag;
            e.innerHTML = "Player 1's turn";
            winner(c, d);
            flag = "X";
        }
        else {
            return;
        }
    }
}
function winner(id, val) {
    var t = document.getElementById(id).value = val;
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;
    var z = document.getElementById('result');
    if ((b1 == b2 && b2 == b3 && b3 == "X") || (b4 == b5 && b5 == b6 && b6 == "X") || (b7 == b8 && b8 == b9 && b9 == "X")) {
        z.innerHTML = "X Wins";
        
    }
    else if ((b1 == b2 && b2 == b3 && b3 == "O") || (b4 == b5 && b5 == b6 && b6 == "O") || (b7 == b8 && b8 == b9 && b9 == "O")) {
        z.innerHTML = "O Wins";
        
    }
    else if ((b1 == b4 && b4 == b7 && b7 == "X") || (b2 == b5 && b5 == b8 && b8 == "X") || (b3 == b6 && b6 == b9 && b9 == "X")) {
        z.innerHTML = "X Wins";
        
    }
    else if ((b1 == b4 && b4 == b7 && b7 == "O") || (b2 == b5 && b5 == b8 && b8 == "O") || (b3 == b6 && b6 == b9 && b9 == "O")) {
        z.innerHTML = "O Wins";
        
    }
    else if ((b1 == b5 && b5 == b9 && b9 == "X") || (b3 == b5 && b5 == b7 && b7 == "X")) {
        z.innerHTML = "X Wins";
        
    }
    else if ((b1 == b5 && b5 == b9 && b9 == "O") || (b3 == b5 && b5 == b7 && b7 == "O")) {
        z.innerHTML = "O Wins";
        
    }
    else if ((b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) != "") {
        z.innerHTML = "Match Draw";

    }


}
