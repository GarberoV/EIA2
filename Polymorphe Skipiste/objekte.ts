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
    
   export class MovingObjects {
        x: number;
        y: number;
       
       
       constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            }
        
        draw(): void { }
       
        move(): void {
            this.x += Math.random() * 200;
            this.y += Math.random() * 200;
            }
        
        }
    }
    