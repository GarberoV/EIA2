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
    
    export class SkierInfo {
        
        skifahrerX: number;
        skifahrerY: number;
        headcolor: string;
        bodycolor: string;
       
 
    
    constructor (_x: number, _y: number, _headcolor: string, _bodycolor: string) {
        this.skifahrerX = _x;
        this.skifahrerY = _y;
        this.headcolor = _headcolor;
        this.bodycolor = _bodycolor;
       }
        
        
        
       drawSkierInfo(): void {
          crc2.fillStyle = this.bodycolor;
          crc2.fillRect(this.skifahrerX, this.skifahrerY, 5, -20);
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.arc(this.skifahrerX + 2.5, this.skifahrerY -20, 7, 0, 2 * Math.PI);
          crc2.fill();
          crc2.stroke();
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.moveTo(this.skifahrerX - 10, this.skifahrerY - 5);
          crc2.lineTo(this.skifahrerX + 20, this.skifahrerY + 9);
          crc2.stroke();
        }
        

        moveSkierInfo(): void {
            if (this.skifahrerX > 800) {
                this.skifahrerX = 0;
                this.skifahrerY = 130;
                
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                }
            
            if (this.skifahrerY > 600) {
                this.skifahrerY = 0;
                this.skifahrerY = 0;
                }
            
            this.skifahrerX += 5;
            this.skifahrerY += 3;
            this.drawSkierInfo();
           
        }
      }
    }