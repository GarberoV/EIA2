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
    
    export class SnowInfo {
        snowX: number;
        snowY: number;
        
        constructor (x: number, y: number) {
            this.snowX = x;
            this.snowY = y;
         }
  
        
        moveSnowInfo(): void {
            if (this.snowY > 600) {
                this.snowY = 0;
                }
            this.snowY += Math.random();
            this.drawSnowInfo();
            
            }
        
        
        drawSnowInfo(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.snowX, this.snowY, 3, 0, 2 * Math.PI);
            crc2.fill();
         }
    }
}