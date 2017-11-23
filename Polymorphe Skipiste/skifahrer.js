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
    class SkierInfo extends A6.MovingObjects {
        constructor(_x, _y, _headcolor, _bodycolor) {
            super(_x, _y);
            this.headcolor = _headcolor;
            this.bodycolor = _bodycolor;
        }
        draw() {
            A6.crc2.fillStyle = this.bodycolor;
            A6.crc2.fillRect(this.x, this.y, 5, -20);
            A6.crc2.fillStyle = this.headcolor;
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
            A6.crc2.fill();
            A6.crc2.stroke();
            A6.crc2.fillStyle = this.headcolor;
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x - 10, this.y - 5);
            A6.crc2.lineTo(this.x + 20, this.y + 9);
            A6.crc2.stroke();
        }
        move() {
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
    A6.SkierInfo = SkierInfo;
})(A6 || (A6 = {}));
//# sourceMappingURL=skifahrer.js.map