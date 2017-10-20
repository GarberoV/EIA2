/*
Aufgabe: Aufgabe 2, Canvas - Functions
Name: Veronika Garbero
Matrikel: 256581
Datum: 17.10.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace A2{
window.addEventListener("load", init);
let crc2: CanvasRenderingContext2D;

function init(): void {
    
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    crc2 = canvas.getContext("2d");
    console.log(crc2);
    
    
    // Himmel
    crc2.fillStyle = "#b2dfee";
    crc2.fillRect(0, 0, 800, 600);
    
    // Sonne
    crc2.beginPath();
    crc2.arc(670, 100, 50, 0, 2*Math.PI);
    crc2.fillStyle = "#ffd700";
    crc2.fill();
    
    // Wolken
    /*Wolke 1
    crc2.beginPath();
    crc2.arc(560, 125, 18, 0, 2 * Math.PI);
    crc2.arc(575, 130, 15, 0, 2 * Math.PI);
    crc2.arc(545, 130, 15, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    // Wolke 2
    crc2.beginPath();
    crc2.arc(300, 80, 18, 0, 2 * Math.PI);
    crc2.arc(315, 85, 15, 0, 2 * Math.PI);
    crc2.arc(285, 85, 15, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    // Wolke 3
    crc2.beginPath();
    crc2.arc(700, 250, 18, 0, 2 * Math.PI);
    crc2.arc(715, 255, 15, 0, 2 * Math.PI);
    crc2.arc(685, 255, 15, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();*/
    
    
    // 3 Wolken fix + Funktion 
    drawCloud(560, 125, "#ffffff");
    drawCloud(300, 80, "#ffffff");
    drawCloud(700, 250, "#ffffff"); 
    
    // Function drawCloud 
    
    function drawCloud (x: number, y: number, color: string) :void {
        // Wolke 1
        crc2.beginPath();
        crc2.arc(x, y, 18, 0, 2 * Math.PI);
        crc2.arc(x + 15, y + 5, 15, 0, 2 * Math.PI);
        crc2.arc(x - 15, y + 5, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();
        
 }
    
    // 2 Wolken an zufälliger Position
        for (let i: number = 0; i < 2; i++) {
            let x: number = 330 + Math.random() * 120;
            let y: number = 80 + Math.random() * 150;
            drawCloud(x, y, "#ffffff");
        }
        
    
    // Linie Piste
    crc2.beginPath();
    crc2.moveTo(60, 0);
    crc2.lineTo(800, 550);
    crc2.lineTo(800, 600);
    crc2.lineTo(0, 600);
    crc2.lineTo(0, 0);
    crc2.closePath();
    crc2.fillStyle = "#d6d6c2";
    crc2.fill();


    // Linie Lift
    crc2.beginPath();
    crc2.moveTo(30, 0);
    crc2.lineTo(800, 580);
    crc2.stroke(); 
    
    crc2.beginPath();
    crc2.moveTo(60, 0);
    crc2.lineTo(800, 550);
    crc2.stroke(); 
    
    
    
    /*Großer Baum
    crc2.beginPath();
    crc2.moveTo(410, 320);
    crc2.lineTo(460, 480);
    crc2.lineTo(360, 480);
    crc2.closePath();
    crc2.fillStyle = "#5a924f";
    crc2.fill();*/

    
    // Großer Baum fix + Funktion
    drawTreeL(410, 320, "#5a924f");
    
    //Function drawTreeL
    function drawTreeL(x: number, y: number, color: string) :void {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 50 , y + 160);
        crc2.lineTo(x - 50, y + 160);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle= color;
        crc2.fill();
        
    }
    
    
    // 3 kleine fixe Bäume + Funktion
    drawTree(80, 120, "#5a924f");
    drawTree(70, 320, "#5a924f");
    drawTree(590, 500, "#5a924f");
    
    
     // Function drawTree
    
    function drawTree (x: number, y: number, color: string) :void {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 20, y + 60);
        crc2.lineTo(x - 20, y + 60);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = color;
        crc2.fill();
            
    }
    
    // 2 Bäume an zufälliger Position
        for (let i: number = 0; i < 2; i++) {
            let x: number = 50 + Math.random() * 120;
            let y: number = 190 + Math.random() * 130;
            drawTree(x, y, "#5a924f");
        }
    
    // 2 Bäume an zufälliger Position
        for (let i: number = 0; i < 2; i++) {
            let x: number = 50 + Math.random() * 120;
            let y: number = 390 + Math.random() * 130;
            drawTree(x, y, "#5a924f");
        }
    
    // 2 Bäume an zufälliger Position
        for (let i: number = 0; i < 2; i++) {
            let x: number = 400 + Math.random() * 120;
            let y: number = 390 + Math.random() * 130;
            drawTree(x, y, "#5a924f");
        }
    
     // 2 Bäume in einer Reihe
        for (let i: number = 0; i < 2; i++) {
            drawTree(290 + i * 60, 280, "#5a924f");
}
    
     // Schneemann
    
    // KÃ¶rper
    crc2.beginPath();
    crc2.arc(200, 480, 50, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(200, 420, 40, 0, 2 * Math.PI);
    crc2.fillStyle ="#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(200, 370, 30, 0, 2 * Math.PI);
    crc2.fillStyle ="#ffffff";
    crc2.fill();
    
    // Arme
    crc2.beginPath();
    crc2.moveTo(160, 420);
    crc2.lineTo(130, 380);
    crc2.strokeStyle = "#802000";
    crc2.stroke();
    
    crc2.beginPath();
    crc2.moveTo(240, 420);
    crc2.lineTo(265, 380);
    crc2.strokeStyle = "#802000";
    crc2.stroke();
    
    // Augen
    crc2.beginPath();
    crc2.arc(190, 362, 5, 0, 2 * Math.PI);
    crc2.fillStyle = "#000000";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(212, 362, 5, 0, 2 * Math.PI);
    crc2.fillStyle = "#000000";
    crc2.fill();
    
    // Nase
    crc2.beginPath();
    crc2.moveTo(200, 370);
    crc2.lineTo(202, 375);
    crc2.lineTo(165, 373);
    crc2.strokeStyle ="#ff531a";
    crc2.stroke();
    crc2.fillStyle="#ff531a";
    crc2.fill();
    
    // KnÃ¶pfe
    
    crc2.beginPath();
    crc2.arc(200, 420, 6, 0, 2 * Math.PI);
    crc2.fillStyle = "#262626";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(200, 480, 7, 0, 2 * Math.PI);
    crc2.fillStyle = "#262626";
    crc2.fill();
    
    // Hut
    crc2.beginPath();
    crc2.moveTo(155, 345);
    crc2.lineTo(247, 346);
    crc2.strokeStyle ="#4d4d4d";
    crc2.stroke();
    
    crc2.beginPath();
    crc2.rect(170, 305, 60, 40);
    crc2.fillStyle= "#262626";
    crc2.fill();
    
    
    /* Snowflakes
    crc2.beginPath();
    crc2.arc(130, 120, 5, 0, 2 * Math.PI);
    crc2.fillStyle= "#ffffff";
    crc2.fill();*/
    
    drawSnowflake(180, 220, "#ffffff");
    
    function drawSnowflake(x: number, y: number, color: string) :void {
        crc2.beginPath();
        crc2.arc(x, y, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();
            
    }
    
    // 80 Schneeflocken an zufälliger Position
        for (let i: number = 0; i < 80; i++) {
            let x: number = 50 + Math.random() * 700;
            let y: number = 20 + Math.random() * 600;
            drawSnowflake(x, y, "#ffffff");
        }
    

    }  
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




    
    