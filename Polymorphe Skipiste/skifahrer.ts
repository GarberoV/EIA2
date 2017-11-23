/*
Aufgabe: Aufgabe 6, Polymorphe Skipiste
Name: Veronika Garbero
Matrikel: 256581
Datum: 23.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace A6 {
    
    export class SkierInfo extends MovingObjects {
        
        headcolor: string;
        bodycolor: string;
       
 
    
    constructor (_x: number, _y: number, _headcolor: string, _bodycolor: string) {
        super(_x, _y);
        this.headcolor = _headcolor;
        this.bodycolor = _bodycolor;
       }
        
        
        
       draw(): void {
          crc2.fillStyle = this.bodycolor;
          crc2.fillRect(this.x, this.y, 5, -20);
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.arc(this.x + 2.5, this.y -20, 7, 0, 2 * Math.PI);
          crc2.fill();
          crc2.stroke();
          crc2.fillStyle = this.headcolor;
          crc2.beginPath();
          crc2.moveTo(this.x - 10, this.y - 5);
          crc2.lineTo(this.x + 20, this.y + 9);
          crc2.stroke();
        }
        

        move(): void {
            if (this.x > 800) {
                this.x = 0;
                this.y = 130;
                
                this.bodycolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                }
            
            
            this.x += 5;
            this.y += 3;
            this.draw();
           
        }
      }
    }