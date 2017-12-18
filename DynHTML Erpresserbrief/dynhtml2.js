/*
Aufgabe: Aufgabe 9, DynHTML Erpresserbrief
Name: Veronika Garbero
Matrikel: 256581
Datum: 13.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A9;
(function (A9) {
    window.addEventListener("load", init);
    let blackmail;
    // Array f�r Buchstaben
    function init() {
        let buchstaben = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let n = buchstaben.length;
        if (n == buchstaben.length) {
            for (let i = 0; i < buchstaben.length; i++) {
                drawButton(buchstaben[i]);
            }
        }
        drawTextBox();
    }
    // Tasten f�r Buchstaben
    function drawButton(_buchstaben) {
        let button = document.createElement("div");
        button.style.width = "33px";
        button.style.height = "33px";
        button.innerText = _buchstaben;
        button.style.marginTop = "3px";
        button.style.border = "1px solid #4d4d4d";
        button.style.cursor = "pointer";
        button.style.backgroundColor = "black";
        button.style.color = "white";
        button.style.textAlign = "center";
        button.id = _buchstaben;
        button.className = "letters";
        button.addEventListener("click", handleClick);
        document.body.appendChild(button);
    }
    // Brief zeichnen
    function drawTextBox() {
        let brief = document.createElement("div");
        brief.style.width = "904px";
        brief.style.height = "400px";
        brief.style.backgroundColor = "#8c8c8c";
        brief.style.border = "2px solid black";
        brief.style.marginLeft = "3px";
        brief.style.marginTop = "12px";
        brief.addEventListener("click", putLetters);
        document.body.appendChild(brief);
    }
    // Buchstaben ausw�hlen + Farbe der Boxen �ndern
    function handleClick(_event) {
        let click = _event.target;
        click.style.backgroundColor = "#ffcc99";
        click.style.color = "black";
        blackmail = click.id;
        let divList = document.getElementsByClassName("letters");
        for (let i = 0; i < divList.length; i++) {
            if (blackmail != divList[i].id) {
                divList[i].style.backgroundColor = "black";
                divList[i].style.color = "white";
            }
        }
    }
    // Buchstaben durch klicken in Brief einf�gen
    function putLetters(_event) {
        let box = document.createElement("div");
        box.style.width = "30px";
        box.style.height = "30px";
        box.innerText = blackmail;
        box.style.marginLeft = "2px";
        box.style.marginRight = "2px";
        box.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 60%, 70%)";
        box.style.fontSize = "12px";
        box.style.textAlign = "center";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";
        box.style.position = "absolute";
        box.id = blackmail;
        box.addEventListener("click", putLetters);
        document.body.appendChild(box);
        let clicking = _event.target;
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=dynhtml2.js.map