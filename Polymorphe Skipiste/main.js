/*
Aufgabe: Aufgabe 6, Polymorphe Skipiste
Name: Veronika Garbero
Matrikel: 256581
Datum: 23.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A6;
(function (A6) {
    window.addEventListener("load", init);
    let objects = [];
    let n_skifahrer = 1;
    let n_snow = 160;
    let n_cloud = 3;
    let img;
    // Init Funktion, die B�ume, Berge usw. zeichnet
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A6.crc2 = canvas.getContext("2d");
        console.log(A6.crc2);
        // Himmel
        // Create gradient
        var grd = A6.crc2.createLinearGradient(0, 0, 0, 200);
        grd.addColorStop(0, "#9999ff");
        grd.addColorStop(0.5, "#9966ff");
        grd.addColorStop(1, "#cc99ff");
        A6.crc2.fillStyle = grd;
        A6.crc2.fillRect(0, 0, 800, 600);
        // Sonne
        A6.crc2.beginPath();
        A6.crc2.arc(670, 100, 50, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#ffd700";
        A6.crc2.fill();
        // Piste
        A6.crc2.beginPath();
        A6.crc2.moveTo(0, 100);
        A6.crc2.lineTo(800, 550);
        A6.crc2.lineTo(800, 600);
        A6.crc2.lineTo(0, 600);
        A6.crc2.lineTo(0, 0);
        A6.crc2.closePath();
        A6.crc2.fillStyle = "#d7e4e5";
        A6.crc2.fill();
        // Linie Lift
        A6.crc2.beginPath();
        A6.crc2.moveTo(0, 50);
        A6.crc2.lineTo(800, 495);
        A6.crc2.stroke();
        // Schneemann
        // Körper
        A6.crc2.beginPath();
        A6.crc2.arc(200, 480, 50, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#ffffff";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.arc(200, 420, 40, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#ffffff";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.arc(200, 370, 30, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#ffffff";
        A6.crc2.fill();
        // Arme
        A6.crc2.beginPath();
        A6.crc2.moveTo(160, 420);
        A6.crc2.lineTo(130, 380);
        A6.crc2.strokeStyle = "#802000";
        A6.crc2.stroke();
        A6.crc2.beginPath();
        A6.crc2.moveTo(240, 420);
        A6.crc2.lineTo(265, 380);
        A6.crc2.strokeStyle = "#802000";
        A6.crc2.stroke();
        // Augen
        A6.crc2.beginPath();
        A6.crc2.arc(190, 362, 5, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#000000";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.arc(212, 362, 5, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#000000";
        A6.crc2.fill();
        // Nase
        A6.crc2.beginPath();
        A6.crc2.moveTo(200, 370);
        A6.crc2.lineTo(202, 375);
        A6.crc2.lineTo(165, 373);
        A6.crc2.strokeStyle = "#ff531a";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#ff531a";
        A6.crc2.fill();
        // Knöpfe
        A6.crc2.beginPath();
        A6.crc2.arc(200, 420, 6, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#262626";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.arc(200, 480, 7, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#262626";
        A6.crc2.fill();
        // Hut
        A6.crc2.beginPath();
        A6.crc2.moveTo(155, 345);
        A6.crc2.lineTo(247, 346);
        A6.crc2.strokeStyle = "#4d4d4d";
        A6.crc2.stroke();
        A6.crc2.beginPath();
        A6.crc2.rect(170, 305, 60, 40);
        A6.crc2.fillStyle = "#262626";
        A6.crc2.fill();
        //-------------- Schleifen
        // Skifahrer
        for (let i = 0; i < n_skifahrer; i++) {
            let ski = new A6.SkierInfo(0, 130, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            objects.push(ski);
        }
        // 160 Schneeflocken an zuf�lliger Position
        for (let i = 0; i < n_snow; i++) {
            let sn = new A6.SnowInfo(50 + Math.random() * 700, 20 + Math.random() * 600);
            objects.push(sn);
        }
        // 3 Wolken an zuf�lliger Position
        for (let i = 0; i < n_cloud; i++) {
            let cl = new A6.CloudInfo(330 + Math.random() * 130, 30 + Math.random() * 200);
            objects.push(cl);
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
        img = A6.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    //------------- Funktion
    // Function drawTree
    function drawTree(x, y, color) {
        A6.crc2.beginPath();
        A6.crc2.moveTo(x, y);
        A6.crc2.lineTo(x + 20, y + 60);
        A6.crc2.lineTo(x - 20, y + 60);
        A6.crc2.closePath();
        A6.crc2.stroke();
        A6.crc2.fillStyle = color;
        A6.crc2.fill();
    }
    //------------ Animation 
    function animate() {
        console.log("animation");
        A6.crc2.putImageData(img, 0, 0);
        for (let i = 0; i < objects.length; i++) {
            let o = objects[i];
            o.move();
        }
        window.setTimeout(animate, 20);
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=main.js.map