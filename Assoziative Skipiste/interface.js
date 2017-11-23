/*
Aufgabe: Aufgabe 4, Assoziative Skipiste
Name: Veronika Garbero
Matrikel: 256581
Datum: 09.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A4;
(function (A4) {
    window.addEventListener("load", init);
    let crc2;
    let arrayX = [];
    let arrayY = [];
    let cloudX = [];
    let cloudY = [];
    let skifahrer = [];
    var image;
    // Init Funktion, die B�ume, Berge usw. zeichnet
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        // Himmel
        // Create gradient
        var grd = crc2.createLinearGradient(0, 0, 0, 200);
        grd.addColorStop(0, "#9999ff");
        grd.addColorStop(0.5, "#9966ff");
        grd.addColorStop(1, "#cc99ff");
        crc2.fillStyle = grd;
        crc2.fillRect(0, 0, 800, 600);
        // Sonne
        crc2.beginPath();
        crc2.arc(670, 100, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffd700";
        crc2.fill();
        // Piste
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(800, 550);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.fillStyle = "#d7e4e5";
        crc2.fill();
        // Linie Lift
        crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.lineTo(800, 495);
        crc2.stroke();
        // Schneemann
        // Körper
        crc2.beginPath();
        crc2.arc(200, 480, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 420, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 370, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
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
        crc2.strokeStyle = "#ff531a";
        crc2.stroke();
        crc2.fillStyle = "#ff531a";
        crc2.fill();
        // Knöpfe
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
        crc2.strokeStyle = "#4d4d4d";
        crc2.stroke();
        crc2.beginPath();
        crc2.rect(170, 305, 60, 40);
        crc2.fillStyle = "#262626";
        crc2.fill();
        //-------------- Schleifen
        //Skifahrer ----------------------------- A4
        for (let i = 0; i < 1; i++) {
            skifahrer[i] = {
                x: 0,
                y: 130,
                headcolor: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                bodycolor: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
            };
        }
        // 3 Wolken an zuf�lliger Position
        for (let i = 0; i < 3; i++) {
            cloudX[i] = 330 + Math.random() * 130;
            cloudY[i] = 30 + Math.random() * 200;
        }
        // 160 Schneeflocken an zuf�lliger Position
        for (let i = 0; i < 160; i++) {
            arrayX[i] = 50 + Math.random() * 700;
            arrayY[i] = 20 + Math.random() * 600;
        }
        // 1 Baum an zuf�lliger Position
        for (let i = 0; i < 1; i++) {
            let x = 50 + Math.random() * 120;
            let y = 190 + Math.random() * 130;
            drawTree(x, y, "#004d00");
        }
        // 2 B�ume an zuf�lliger Position
        for (let i = 0; i < 2; i++) {
            let x = 50 + Math.random() * 120;
            let y = 390 + Math.random() * 130;
            drawTree(x, y, "#004d00");
        }
        // 2 B�ume an zuf�lliger Position
        for (let i = 0; i < 2; i++) {
            let x = 400 + Math.random() * 120;
            let y = 390 + Math.random() * 130;
            drawTree(x, y, "#004d00");
        }
        // 2 B�ume in einer Reihe
        for (let i = 0; i < 2; i++) {
            drawTree(310 + i * 60, 400, "#004d00");
        }
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    //------------- Funktionen
    // Function drawCloud 
    function drawCloud(x, y) {
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(x, y, 20, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 15, y + 5, 18, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x - 15, y + 5, 18, 0, 2 * Math.PI);
        crc2.fill();
    }
    // Function drawSnowflake
    function drawSnowflake(x, y) {
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(x, y, 3, 0, 2 * Math.PI);
        crc2.fill();
    }
    /* Function drawSkifahrer
    function drawSkifahrer(x: number, y: number): void {
        crc2.fillStyle = "#000000";
        crc2.fillRect(x, y, 5, -20);
        crc2.beginPath();
        crc2.arc(x + 2.5, y - 20, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x - 10, y - 5);
        crc2.lineTo(x + 20, y + 9);
        crc2.stroke();
    }*/
    // Function drawSkifahrer -------------------- A4
    function drawSkifahrer(s) {
        crc2.fillStyle = s.bodycolor;
        crc2.fillRect(s.x, s.y, 5, -20);
        crc2.fillStyle = s.headcolor;
        crc2.beginPath();
        crc2.arc(s.x + 2.5, s.y - 20, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = s.headcolor;
        crc2.beginPath();
        crc2.moveTo(s.x - 10, s.y - 5);
        crc2.lineTo(s.x + 20, s.y + 9);
        crc2.stroke();
    }
    // Function drawTree
    function drawTree(x, y, color) {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 20, y + 60);
        crc2.lineTo(x - 20, y + 60);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = color;
        crc2.fill();
    }
    //------------ Animation 
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);
        // Schneeflocken
        for (let i = 0; i < arrayX.length; i++) {
            if (arrayY[i] > 600) {
                arrayY[i] = 0;
            }
            arrayY[i] += Math.random(); // andere Bewegungsmuster finden
            drawSnowflake(arrayX[i], arrayY[i]);
        }
        // Wolke
        for (let i = 0; i < cloudX.length; i++) {
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
            cloudX[i] += Math.random(); // andere Bewegungsmuster finden
            drawCloud(cloudX[i], cloudY[i]);
        }
        //Skifahrer ------------- A4
        for (let i = 0; i < skifahrer.length; i++) {
            if (skifahrer[i].x < 0 || skifahrer[i].y > 600) {
                skifahrer[i].x = 0;
                skifahrer[i].y = 130;
                skifahrer[i].headcolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                skifahrer[i].bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            skifahrer[i].x += 5;
            skifahrer[i].y += 3;
            drawSkifahrer(skifahrer[i]);
        }
        window.setTimeout(animate, 20);
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=interface.js.map