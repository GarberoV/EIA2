/*
Aufgabe: Aufgabe 5, Interface - Class
Name: Veronika Garbero
Matrikel: 256581
Datum: 14.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A5_Class;
(function (A5_Class) {
    class SnowInfo {
        constructor(x, y) {
            this.snowX = x;
            this.snowY = y;
        }
        moveSnowInfo() {
            if (this.snowY > 600) {
                this.snowY = 0;
            }
            this.snowY += Math.random();
            this.drawSnowInfo();
        }
        drawSnowInfo() {
            A5_Class.crc2.fillStyle = "#ffffff";
            A5_Class.crc2.beginPath();
            A5_Class.crc2.arc(this.snowX, this.snowY, 3, 0, 2 * Math.PI);
            A5_Class.crc2.fill();
        }
    }
    A5_Class.SnowInfo = SnowInfo;
})(A5_Class || (A5_Class = {}));
//# sourceMappingURL=snow.js.map