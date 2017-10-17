namespace A2{
window.addEventListener("load", init);

function init(): void {
    
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
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
    crc2.beginPath();
    crc2.arc(560, 125, 18, 0, 2 * Math.PI);
    crc2.arc(575, 130, 15, 0, 2 * Math.PI);
    crc2.arc(545, 130, 15, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(300, 80, 18, 0, 2 * Math.PI);
    crc2.arc(315, 85, 15, 0, 2 * Math.PI);
    crc2.arc(285, 85, 15, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(700, 250, 18, 0, 2 * Math.PI);
    crc2.arc(715, 255, 15, 0, 2 * Math.PI);
    crc2.arc(685, 255, 15, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    
    // Piste
    crc2.beginPath();
    crc2.moveTo(60, 0);
    crc2.lineTo(800, 550);
    crc2.lineTo(800, 600);
    crc2.lineTo(0, 600);
    crc2.lineTo(0, 0);
    crc2.closePath();
    crc2.fillStyle = "#d6d6c2";
    crc2.fill();


    // Linie Piste
    crc2.beginPath();
    crc2.moveTo(30, 0);
    crc2.lineTo(800, 580);
    crc2.stroke(); 
    
    crc2.beginPath();
    crc2.moveTo(60, 0);
    crc2.lineTo(800, 550);
    crc2.stroke(); 

    
    // Schneemann
    
    // Körper
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
    crc2.strokeStyle ="#4d4d4d";
    crc2.stroke();
    
    crc2.beginPath();
    crc2.rect(170, 305, 60, 40);
    crc2.fillStyle= "#262626";
    crc2.fill();
    
    // Bäume
    crc2.fillStyle = "#8b5a2b";
    crc2.fillRect(400, 455, 25, 45);
    crc2.beginPath();
    crc2.moveTo(410, 350);
    crc2.lineTo(460, 430);
    crc2.lineTo(360, 430);
    crc2.closePath();
    crc2.fillStyle = "#5a924f";
    crc2.fill();
    
    
    
   
    
    
    
}
}   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




    
    