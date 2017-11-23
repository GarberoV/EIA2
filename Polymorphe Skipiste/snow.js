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
    class SnowInfo extends A6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random();
            this.draw();
        }
        draw() {
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.beginPath();
            A6.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            A6.crc2.fill();
        }
    }
    A6.SnowInfo = SnowInfo;
})(A6 || (A6 = {}));
//# sourceMappingURL=snow.js.map