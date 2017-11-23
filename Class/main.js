/*
Aufgabe: Aufgabe 5, Interface - Class
Name: Veronika Garbero
Matrikel: 256581
Datum: 14.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
// ---------------- !!!! NICHT FERTIG GEWORDEN... FINDE DEN FEHLER NCHT :(( 
var A5_Class;
(function (A5_Class) {
    window.addEventListener("load", init);
    let skifahrer = [];
    let snow = [];
    let cloud = [];
    let img;
    // Init Funktion, die B�ume, Berge usw. zeichnet
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A5_Class.crc2 = canvas.getContext("2d");
        console.log(A5_Class.crc2);
        // Himmel
        // Create gradient
        var grd = A5_Class.crc2.createLinearGradient(0, 0, 0, 200);
        grd.addColorStop(0, "#9999ff");
        grd.addColorStop(0.5, "#9966ff");
        grd.addColorStop(1, "#cc99ff");
        A5_Class.crc2.fillStyle = grd;
        A5_Class.crc2.fillRect(0, 0, 800, 600);
        // Sonne
        A5_Class.crc2.beginPath();
        A5_Class.crc2.arc(670, 100, 50, 0, 2 * Math.PI);
        A5_Class.crc2.fillStyle = "#ffd700";
        A5_Class.crc2.fill();
        // Piste
        A5_Class.crc2.beginPath();
        A5_Class.crc2.moveTo(0, 100);
        A5_Class.crc2.lineTo(800, 550);
        A5_Class.crc2.lineTo(800, 600);
        A5_Class.crc2.lineTo(0, 600);
        A5_Class.crc2.lineTo(0, 0);
        A5_Class.crc2.closePath();
        A5_Class.crc2.fillStyle = "#d7e4e5";
        A5_Class.crc2.fill();
        // Linie Lift
        A5_Class.crc2.beginPath();
        A5_Class.crc2.moveTo(0, 50);
        A5_Class.crc2.lineTo(800, 495);
        A5_Class.crc2.stroke();
        // Schneemann
        // Körper
        A5_Class.crc2.beginPath();
        A5_Class.crc2.arc(200, 480, 50, 0, 2 * Math.PI);
        A5_Class.crc2.fillStyle = "#ffffff";
        A5_Class.crc2.fill();
        A5_Class.crc2.beginPath();
        A5_Class.crc2.arc(200, 420, 40, 0, 2 * Math.PI);
        A5_Class.crc2.fillStyle = "#ffffff";
        A5_Class.crc2.fill();
        A5_Class.crc2.beginPath();
        A5_Class.crc2.arc(200, 370, 30, 0, 2 * Math.PI);
        A5_Class.crc2.fillStyle = "#ffffff";
        A5_Class.crc2.fill();
        // Arme
        A5_Class.crc2.beginPath();
        A5_Class.crc2.moveTo(160, 420);
        A5_Class.crc2.lineTo(130, 380);
        A5_Class.crc2.strokeStyle = "#802000";
        A5_Class.crc2.stroke();
        A5_Class.crc2.beginPath();
        A5_Class.crc2.moveTo(240, 420);
        A5_Class.crc2.lineTo(265, 380);
        A5_Class.crc2.strokeStyle = "#802000";
        A5_Class.crc2.stroke();
        // Augen
        A5_Class.crc2.beginPath();
        A5_Class.crc2.arc(190, 362, 5, 0, 2 * Math.PI);
        A5_Class.crc2.fillStyle = "#000000";
        A5_Class.crc2.fill();
        A5_Class.crc2.beginPath();
        A5_Class.crc2.arc(212, 362, 5, 0, 2 * Math.PI);
        A5_Class.crc2.fillStyle = "#000000";
        A5_Class.crc2.fill();
        // Nase
        A5_Class.crc2.beginPath();
        A5_Class.crc2.moveTo(200, 370);
        A5_Class.crc2.lineTo(202, 375);
        A5_Class.crc2.lineTo(165, 373);
        A5_Class.crc2.strokeStyle = "#ff531a";
        A5_Class.crc2.stroke();
        A5_Class.crc2.fillStyle = "#ff531a";
        A5_Class.crc2.fill();
        // Knöpfe
        A5_Class.crc2.beginPath();
        A5_Class.crc2.arc(200, 420, 6, 0, 2 * Math.PI);
        A5_Class.crc2.fillStyle = "#262626";
        A5_Class.crc2.fill();
        A5_Class.crc2.beginPath();
        A5_Class.crc2.arc(200, 480, 7, 0, 2 * Math.PI);
        A5_Class.crc2.fillStyle = "#262626";
        A5_Class.crc2.fill();
        // Hut
        A5_Class.crc2.beginPath();
        A5_Class.crc2.moveTo(155, 345);
        A5_Class.crc2.lineTo(247, 346);
        A5_Class.crc2.strokeStyle = "#4d4d4d";
        A5_Class.crc2.stroke();
        A5_Class.crc2.beginPath();
        A5_Class.crc2.rect(170, 305, 60, 40);
        A5_Class.crc2.fillStyle = "#262626";
        A5_Class.crc2.fill();
        //-------------- Schleifen
        // Skifahrer
        for (let i = 0; i < 2; i++) {
            skifahrer[i] = new A5_Class.SkierInfo(0, 130, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
        }
        // 160 Schneeflocken an zuf�lliger Position
        for (let i = 0; i < 160; i++) {
            snow[i] = new A5_Class.SnowInfo(50 + Math.random() * 700, 20 + Math.random() * 600);
        }
        // 3 Wolken an zuf�lliger Position
        for (let i = 0; i < 3; i++) {
            cloud[i] = new A5_Class.CloudInfo(330 + Math.random() * 130, 30 + Math.random() * 200);
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
        img = A5_Class.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    //------------- Funktion
    // Function drawTree
    function drawTree(x, y, color) {
        A5_Class.crc2.beginPath();
        A5_Class.crc2.moveTo(x, y);
        A5_Class.crc2.lineTo(x + 20, y + 60);
        A5_Class.crc2.lineTo(x - 20, y + 60);
        A5_Class.crc2.closePath();
        A5_Class.crc2.stroke();
        A5_Class.crc2.fillStyle = color;
        A5_Class.crc2.fill();
    }
    //------------ Animation 
    function animate() {
        console.log("animation");
        A5_Class.crc2.putImageData(img, 0, 0);
        // Schneeflocken
        for (let i = 0; i < snow.length; i++) {
            let sn = snow[i];
            sn.moveSnowInfo();
        }
        // Wolke
        for (let i = 0; i < cloud.length; i++) {
            let cl = cloud[i];
            cl.moveCloudInfo();
        }
        //Skifahrer
        for (let i = 0; i < skifahrer.length; i++) {
            let ski = skifahrer[i];
            ski.moveSkierInfo();
        }
        window.setTimeout(animate, 20);
    }
})(A5_Class || (A5_Class = {}));
//# sourceMappingURL=main.js.map