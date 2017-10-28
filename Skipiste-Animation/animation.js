/*
Aufgabe: Aufgabe 3, Skipiste- Animation
Name: Veronika Garbero
Matrikel: 256581
Datum: 25.10.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A3;
(function (A3) {
    window.addEventListener("load", init);
    let crc2;
    // Arrays for animations
    let arrayX = [];
    let arrayY = [];
    let cloudX = [];
    let cloudY = [];
    let skifahrerX = [];
    let skifahrerY = [];
    // Variable, um den Hintergrund zu speichern
    let imgData;
    // Init Funktion, die B�ume, Berge usw. zeichnet
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let imgData;
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        // Himmel
        // Create gradient
        var grd = crc2.createLinearGradient(0, 0, 0, 200);
        grd.addColorStop(0, "#4d79ff");
        grd.addColorStop(0.5, "#3366cc");
        grd.addColorStop(1, "#6699ff");
        crc2.fillStyle = grd;
        crc2.fillRect(0, 0, 800, 600);
        // Sonne
        crc2.beginPath();
        crc2.arc(670, 100, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffd700";
        crc2.fill();
        // 3 Wolken fix 
        drawCloud(560, 125, "#ffffff");
        drawCloud(300, 80, "#ffffff");
        drawCloud(700, 250, "#ffffff");
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
        // Gro�er Baum fix
        drawTreeL(410, 320, "#5a924f");
        // 3 kleine fixe B�ume
        drawTree(80, 120, "#5a924f");
        drawTree(70, 320, "#5a924f");
        drawTree(590, 500, "#5a924f");
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
        // Snowflakes
        drawSnowflake(180, 220, "#ffffff");
        //------------- Funktionen
        // Function drawCloud 
        function drawCloud(x, y, color) {
            // Wolke 1
            crc2.beginPath();
            crc2.arc(x, y, 18, 0, 2 * Math.PI);
            crc2.arc(x + 15, y + 5, 15, 0, 2 * Math.PI);
            crc2.arc(x - 15, y + 5, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = color;
            crc2.fill();
        }
        // Function drawTreeL
        function drawTreeL(x, y, color) {
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 50, y + 160);
            crc2.lineTo(x - 50, y + 160);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = color;
            crc2.fill();
        }
        // Function drawSnowflake
        function drawSnowflake(x, y, color) {
            crc2.beginPath();
            crc2.arc(x, y, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = color;
            crc2.fill();
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
        //------------- Schleifen
        // 2 Wolken an zuf�lliger Position
        for (let i = 0; i < 2; i++) {
            let x = 330 + Math.random() * 120;
            let y = 80 + Math.random() * 150;
            drawCloud(x, y, "#ffffff");
        }
        // 80 Schneeflocken an zuf�lliger Position
        for (let i = 0; i < 80; i++) {
            let x = 50 + Math.random() * 700;
            let y = 20 + Math.random() * 600;
            drawSnowflake(x, y, "#ffffff");
        }
        // 2 B�ume an zuf�lliger Position
        for (let i = 0; i < 2; i++) {
            let x = 50 + Math.random() * 120;
            let y = 190 + Math.random() * 130;
            drawTree(x, y, "#5a924f");
        }
        // 2 B�ume an zuf�lliger Position
        for (let i = 0; i < 2; i++) {
            let x = 50 + Math.random() * 120;
            let y = 390 + Math.random() * 130;
            drawTree(x, y, "#5a924f");
        }
        // 2 B�ume an zuf�lliger Position
        for (let i = 0; i < 2; i++) {
            let x = 400 + Math.random() * 120;
            let y = 390 + Math.random() * 130;
            drawTree(x, y, "#5a924f");
        }
        // 2 B�ume in einer Reihe
        for (let i = 0; i < 2; i++) {
            drawTree(290 + i * 60, 280, "#5a924f");
        }
        //------------ Animierte Schneeflocken     
        function animate() {
            console.log("Timeout");
            crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
            crc2.putImageData(imgData, 0, 0);
            for (let i = 0; i < arrayX.length; i++) {
                if (arrayY[i] > 600) {
                    arrayY[i] = 0;
                }
                drawSnowflake(arrayX[i], arrayY[i], "#ffffff");
            }
            window.setTimeout(animate, 20);
        }
        //-------------- Animierte Wolken
        function aniCloud() {
            console.log("Timeout");
            crc2.putImageData(imgData, 0, 0);
            for (let i = 0; i < arrayX.length; i++) {
                arrayX[i] += Math.random() * 6 - 2; // hier experimentieren um
                arrayY[i] += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
                drawCloud(arrayX[i], arrayY[i], "#ffffff");
            }
            window.setTimeout(animate, 20);
        }
        // Aufruf f�r zuf�llig positionierte Schneeflocken
        // drawrandomSnowflakes();
        window.setTimeout(animate, 30);
        // Backgroundimage is saved
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i = 0; i < 300; i++) {
            arrayX[i] = 370;
            arrayY[i] = 0;
        }
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=animation.js.map