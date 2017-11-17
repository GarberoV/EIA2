/*
Aufgabe: Aufgabe 5, Interface - Class
Name: Veronika Garbero
Matrikel: 256581
Datum: 14.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/


namespace A5_Class {
    
   export let crc2: CanvasRenderingContext2D;
         window.addEventListener("load", init);
    
        let skifahrer: SkierInfo[] = [];
        let snow: SnowInfo[] = [];
        let cloud: CloudInfo[] = [];
        let img: ImageData;
        
    window.addEventListener("load", init);
    

    
// Init Funktion, die B‰ume, Berge usw. zeichnet
    function init(): void {
        
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
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
    crc2.arc(670, 100, 50, 0, 2*Math.PI);
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
    
    // K√∂rper
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
    
    // Kn√∂pfe
    
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

//-------------- Schleifen
        
        // Skifahrer
        for (let i: number = 0; i < 2; i++) {
            skifahrer[i] = new SkierInfo (0, 130,
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                                          "hsl(" + Math.random() * 360 + ", 100%, 50%)");
                                         
            }
        
        
        // 160 Schneeflocken an zuf‰lliger Position
        for (let i: number = 0; i < 160; i++) {
            snow[i] = new SnowInfo (50 + Math.random() * 700,
                                    20 + Math.random() * 600);
           }
        
        
        // 3 Wolken an zuf‰lliger Position
        for (let i: number = 0; i < 3; i++) {
             cloud[i] = new CloudInfo (330 + Math.random() * 130,
                                       30 + Math.random() * 200);
           } 
         
        
        // 1 Baum an zuf‰lliger Position
        for (let i: number = 0; i < 1; i++) {
            let x: number = 50 + Math.random() * 120;
            let y: number = 190 + Math.random() * 130;
            drawTree(x, y, "#004d00");
        }
        
    
        // 2 B‰ume an zuf‰lliger Position
        for (let i: number = 0; i < 2; i++) {
            let x: number = 50 + Math.random() * 120;
            let y: number = 390 + Math.random() * 130;
            drawTree(x, y, "#004d00");
        }
        
    
        // 2 B‰ume an zuf‰lliger Position
        for (let i: number = 0; i < 2; i++) {
            let x: number = 400 + Math.random() * 120;
            let y: number = 390 + Math.random() * 130;
            drawTree(x, y, "#004d00");
        }
        
    
        // 2 B‰ume in einer Reihe
        for (let i: number = 0; i < 2; i++) {
            drawTree(310 + i * 60, 400, "#004d00");
        }
        
         img = crc2.getImageData(0, 0, 800, 600);
        

      animate();
    }
    
    
//------------- Funktion
    
   
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
    
    
//------------ Animation 
    

   function animate(): void {
        console.log("animation");
        crc2.putImageData(img, 0, 0);
   
       
       // Schneeflocken
        for (let i: number = 0; i < snow.length; i++) {
            let sn: SnowInfo = snow[i];
            sn.moveSnowInfo();
          }
        
            
        // Wolke
        for (let i: number = 0; i < cloud.length; i++) {
            let cl: CloudInfo = cloud[i];
            cl.moveCloudInfo();
        }
        
        //Skifahrer
       for (let i: number = 0; i < skifahrer.length; i++) {
           let ski: SkierInfo = skifahrer[i];
           ski.moveSkierInfo();
         }
       
     
          window.setTimeout(animate, 20);
        }
    }

   



    