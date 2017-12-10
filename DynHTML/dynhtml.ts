/*
Aufgabe: Aufgabe 8, DynHTML
Name: Veronika Garbero
Matrikel: 256581
Datum: 09.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/


namespace dynhtml {
    
    window.addEventListener("load", Eingabe);

    function Eingabe() : void {
        
        let n = prompt("Bitte geben Sie eine Zahl zwischen 10 und 100 ein")
        if (isNaN(parseInt(n)) || parseInt(n) < 10 || parseInt(n) > 100) {
            alert ("Eingabe falsch - Versuchen Sie es noch einmal");
            Eingabe();
    }
        
        else {
            for (let i: number = 0; i < parseInt(n); i++) {
                Quadrate(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 360);
                 
            }
         }
     }

    function Quadrate (x: number, y: number, color: number) : void {
        
            let div: HTMLDivElement = document.createElement("div");
            
            div.style.width = "35px";
            div.style.height = "35px";
            div.style.backgroundColor = "hsl(" + color +", 70%, 85%)";
            div.style.left = x + "px";
            div.style.top = y + "px";
            
            document.body.appendChild(div);
  
    }
}